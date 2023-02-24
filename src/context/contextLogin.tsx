import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useState,
} from "react";
import {
  Addres,
  Email,
  Password,
  userInformation,
} from "../types/InterfaceOfStates";

const CreateContextLogin = createContext<{
  email: Email;
  setEmail: Dispatch<React.SetStateAction<Email>>;
  password: Password;
  setPassword: Dispatch<React.SetStateAction<Password>>;
  addres: Addres;
  setAddres: Dispatch<React.SetStateAction<Addres>>;
  userInformation: userInformation;
  setUserInformation: Dispatch<React.SetStateAction<userInformation>>;
}>(Object.create(null));

export const ContextLoginProvider = ({ children }: { children: ReactNode }) => {
  const [email, setEmail] = useState<Email>({
    email: "",
    valid: "",
    text: "",
  });
  const [password, setPassword] = useState<Password>({
    password: "",
    valid: "",
    text: "",
  });
  const [addres, setAddres] = useState<Addres>({
    country: "",
    department: "",
    city: "",
    directions: "",
  });
  const [userInformation, setUserInformation] = useState<userInformation>({
    name: "",
    lastName: "",
    dateOfBirth: "",
  });
  return (
    <CreateContextLogin.Provider
      value={{
        email,
        setEmail,
        password,
        setPassword,
        addres,
        setAddres,
        userInformation,
        setUserInformation,
      }}
    >
      {children}
    </CreateContextLogin.Provider>
  );
};

export const UseContextLoginProvider = () => useContext(CreateContextLogin);
