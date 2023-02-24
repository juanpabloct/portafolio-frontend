import { ReactNode, useState } from "react";
import { EyeOff } from "../../assets/icons/inputPassword/HidePassword/EyeOff";
import { Eye } from "../../assets/icons/inputPassword/showPassword/eye";

interface InputProps {
  type?: string;
  placeholder: string;
  action: (e: string) => void;
  value: {
    valid: string | boolean;
    text: string;
  };
  valueNow: string;
  required?: boolean;
}

export const InputValidation = ({
  type = "text",
  placeholder = "",
  action,
  value,
  valueNow,
  required,
}: InputProps) => {
  const { text, valid } = value;
  const [changeTypeInput, setChangeTypeInput] = useState(type);
  return (
    <div className="relative w-full">
      <div className="w-full">
        {required && (
          <span className="text-red-600 text-[0.67rem]">*Required</span>
        )}
        <div className="relative">
          {type === "password" && (
            <span
              className="absolute right-[0.2rem] rounded-md top-[2px] bg-white z-50 cursor-pointer"
              onClick={() => {
                setChangeTypeInput((current) =>
                  current === "password" ? "text" : "password"
                );
              }}
            >
              {changeTypeInput === "password" ? (
                <Eye fill="rgb(12 74 110 )" />
              ) : (
                <EyeOff fill="rgb(12 74 110 )" />
              )}
            </span>
          )}
          {
            <>
              <input
                autoComplete={"on"}
                required={required}
                value={valueNow}
                type={changeTypeInput}
                className={`rounded-md focus:outline-none focus text-center border-2  focus:text-slate-600 w-full ${
                  typeof valid === "boolean" && !valid
                    ? "border-red-700"
                    : "border-sky-900"
                }`}
                placeholder={placeholder}
                onChange={({ target }) => action(target.value)}
              />
            </>
          }
        </div>
      </div>
      <p
        className={`text-[0.76rem] font-sans font-semibold select-none ${
          valid ? "text-slate-700" : "text-red-900"
        }`}
      >
        {text}
      </p>
    </div>
  );
};
