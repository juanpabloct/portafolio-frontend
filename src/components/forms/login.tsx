import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { UseContextLoginProvider } from "../../context/contextLogin";
import { UseValidEmail } from "../../customHooks/validEmail";
import { UseValidPassword } from "../../customHooks/validPassword";
import { InputValidation } from "../Utilities";
import { connect } from "../../util/conectionApi";
import { ChangeCorrect, ChangeUser } from "../../reducers/Reducer.sessions";
import { Button } from "../button";

export const Login = () => {
  const dispatch = useDispatch();
  const { email, password, setEmail, setPassword } = UseContextLoginProvider();
  const navigate = useNavigate();
  const validPasswordAndEmail = !(
    Boolean(email.valid) && Boolean(password.valid)
  );

  return (
    <form
      action=""
      className="flex-col flex w-1/2 gap-10 items-center"
      onSubmit={(e) => e.preventDefault()}
    >
      <div>
        <h3 className="font-bold text-lg">Login</h3>
        <hr className="w-full bg-red-600 h-1" />
      </div>

      <InputValidation
        action={(e) => {
          UseValidEmail(e, setEmail);
        }}
        placeholder="Email"
        value={email}
        valueNow={email.email}
        required={email.required}
      />
      <InputValidation
        action={(e) => {
          UseValidPassword(e, setPassword);
        }}
        required={password.required}
        placeholder="Password"
        type={"password"}
        value={password}
        valueNow={password.password}
      />
      <Button
        action={async () => {
          try {
            const data = await connect.post("/user/login", {
              params: {
                email: email.email,
                password: password.password,
              },
            });
            dispatch(
              ChangeUser({
                user: { ...data, haveUser: true },
                correct: { isCorrect: true, message: data.data.message },
              })
            );
            navigate("/");
          } catch (error: any) {
            if (error?.response) {
              const { message } = error.response.data;
              dispatch(
                ChangeCorrect({ isCorrect: false, message, show: true })
              );
            } else {
              dispatch(
                ChangeCorrect({
                  isCorrect: false,
                  message: "No se puede Conectar al Servidor",
                })
              );
            }
          }
        }}
        text={"Ingresar"}
        validate={validPasswordAndEmail}
      />
      <Link
        to={"/"}
        className={"text-blue-400 text-sm"}
        title="Redirigir a la vista principar sin ingresar el usuario"
      >
        Redirigir a vista Principal
      </Link>
    </form>
  );
};
