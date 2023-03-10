import axios from "axios";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { UseContextLoginProvider } from "../../context/contextLogin";
import { UseValidEmail } from "../../customHooks/validEmail";
import { UseValidPassword } from "../../customHooks/validPassword";
import { ChangeCorrect, ChangeUser } from "../../reducers/Reducer.sessions";
import { connect } from "../../util/conectionApi";
import { Button } from "../button";
import { InputValidation } from "../Utilities/inputValidation";

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
            const { data } = await connect.post("/user/login", {
              params: {
                email: email.email,
                password: password.password,
              },
            });
            dispatch(
              ChangeUser({
                user: { ...data, haveUser: true },
                correct: { isCorrect: true, message: data.message },
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
      <Link to={"/"} className={"text-blue-400"}>
        Redirigir a vista Principal
      </Link>
    </form>
  );
};
