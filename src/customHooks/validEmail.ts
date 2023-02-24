export const UseValidEmail = (
  value: string,
  changeState: React.Dispatch<
    React.SetStateAction<{
      email: string;
      valid: string | boolean;
      text: string;
    }>
  >
) => {
  const validEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const IsValid = validEmail.test(value);
  IsValid
    ? changeState({
        email: value,
        text: "Email Es Valido",
        valid: IsValid,
      })
    : changeState({
        email: value,
        text: "Email no es valido",
        valid: IsValid,
      });
};
