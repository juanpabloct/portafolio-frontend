export const UseValidPassword = (
  value: string,
  changeState: React.Dispatch<
    React.SetStateAction<{
      password: string;
      valid: string | boolean;
      text: string;
    }>
  >
) => {
  return value.length > 6
    ? changeState((current) => {
        return {
          ...current,
          password: value,
          text: "Contraseña Correcta",
          valid: true,
        };
      })
    : changeState((current) => {
        return {
          ...current,
          password: value,
          text: "Contraseña Valida",
          valid: false,
        };
      });
};
