import { Dispatch, SetStateAction, useEffect } from "react";
import { UseValidEmail } from "../../customHooks/validEmail";
import { UseValidPassword } from "../../customHooks/validPassword";
import {
  Addres,
  Email,
  IterationKey,
  Password,
  userInformation,
} from "../../types/InterfaceOfStates";
import { InputValidation } from "../Utilities/inputValidation";
import { StepByStep } from "../Utilities/stepByStep";
import { InputWithoutValidation } from "../Utilities/inputWithoutValidation";
import { UseContextLoginProvider } from "../../context/contextLogin";
import { useDispatch } from "react-redux/es/exports";
import { ChangeCorrect } from "../../reducers/Reducer.sessions";
import { connect } from "../../util/conectionApi";
interface PropsCreateUser {
  email: Email;
  setEmail: Dispatch<SetStateAction<Email>>;
  password: Password;
  setPassword: Dispatch<SetStateAction<Password>>;
  addres: IterationKey;
  setAddres: Dispatch<SetStateAction<Addres>>;
  userInformation: IterationKey;
  setUserInformation: Dispatch<SetStateAction<userInformation>>;
}

export const CreateUser = () => {
  const {
    addres,
    email,
    password,
    setAddres,
    setEmail,
    setPassword,
    setUserInformation,
    userInformation,
  } = UseContextLoginProvider();
  const dispatch = useDispatch();
  const allData = UseContextLoginProvider();
  const dataAreValids = !!email.valid && !!password.valid;

  return (
    <form
      action=""
      className="flex-col flex  gap-10 items-center h-full w-full"
      onSubmit={(e) => e.preventDefault()}
    >
      <StepByStep
        valid={dataAreValids}
        actionLastStep={async () => {
          try {
            const data = await connect.post("/user/newUser", {
              userAddres: addres,
              user: { email: email.email, password: password.password },
              information: {
                ...userInformation,
                dateOfBirth:
                  userInformation.dateOfBirth === ""
                    ? null
                    : new Date(userInformation.dateOfBirth),
              },
            });
            dispatch(
              ChangeCorrect({
                isCorrect: true,
                message: "Usuario Creado Correctamente",
              })
            );
          } catch (error: any) {
            dispatch(
              ChangeCorrect({
                isCorrect: false,
                message: error.response.data.error,
              })
            );
          }
        }}
        element={[
          {
            elements: (
              <>
                <InputValidation
                  required={true}
                  action={(e) => {
                    UseValidEmail(e, setEmail);
                  }}
                  placeholder="Email"
                  value={email}
                  valueNow={email.email}
                />
                <InputValidation
                  required={true}
                  action={(e) => UseValidPassword(e, setPassword)}
                  placeholder="Password"
                  type={"password"}
                  value={password}
                  valueNow={password.password}
                />
              </>
            ),
            title: "Usuario",
          },
          {
            elements: (
              <>
                {Object.keys(addres).map((infoAddres, i) => {
                  return (
                    <InputWithoutValidation
                      key={i}
                      action={(e) => {
                        setAddres((current) => {
                          return { ...current, [infoAddres]: e };
                        });
                      }}
                      placeholder={infoAddres}
                      type={"text"}
                      value={addres[infoAddres]}
                    />
                  );
                })}
              </>
            ),
            title: "Dirreccion",
          },
          {
            elements: (
              <>
                {Object.keys(userInformation).map((info, i) => {
                  return (
                    <InputWithoutValidation
                      key={i}
                      action={(e) => {
                        setUserInformation((current) => {
                          return { ...current, [info]: e };
                        });
                      }}
                      placeholder={info}
                      type={info !== "dateOfBirth" ? "text" : "date"}
                      value={userInformation[info]}
                    />
                  );
                })}
              </>
            ),
            title: "Informacion Del Usuario",
          },
        ]}
        textLastStep={"Crear Usuario"}
      />
    </form>
  );
};
