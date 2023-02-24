import axios from "axios";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  ContextLoginProvider,
  UseContextLoginProvider,
} from "../../context/contextLogin";
import { UseValidEmail } from "../../customHooks/validEmail";
import { UseValidPassword } from "../../customHooks/validPassword";
import { ChangeCorrect, ChangeUser } from "../../reducers/Reducer.sessions";
import { Email, Password } from "../../types/InterfaceOfStates";
import { Button } from "../button";
import { InputValidation } from "../Utilities/inputValidation";

export const Login = () => {
  const dispatch = useDispatch();
  const { email, password, setEmail, setPassword } = UseContextLoginProvider();
  const validPasswordAndEmail = !(
    Boolean(email.valid) && Boolean(password.valid)
  );

  return (
    <form
      action=""
      className="flex-col flex w-1/2 gap-10 items-center"
      onSubmit={(e) => e.preventDefault()}
    >
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
        action={(e) => UseValidPassword(e, setPassword)}
        required={password.required}
        placeholder="Password"
        type={"password"}
        value={password}
        valueNow={password.password}
      />
      <Button
        action={async () => {
          try {
            const { data } = await axios.post(
              "http://127.0.0.1:9000/user/login",
              {
                params: {
                  email: email.email,
                  password: password.password,
                },
              }
            );
            dispatch(
              ChangeUser({
                user: { ...data, haveUser: true },
                correct: { isCorrect: true, message: data.message },
              })
            );
          } catch (error: any) {
            const { message } = error.response.data;
            dispatch(ChangeCorrect({ isCorrect: false, message, show: true }));
          }
        }}
        text={"Ingresar"}
        validate={validPasswordAndEmail}
      />
    </form>
  );
};
