interface PropsButton {
  action: () => void;
  text: string;
  validate: boolean;
}
export const Button = ({ action, text, validate }: PropsButton) => {
  return (
    <button
      type="submit"
      className={`border-sky-900 border rounded-md w-1/2 ${
        validate ? "bg-neutral-500 " : "bg-[#5c6d93] cursor-pointer"
      } font-medium text-lg text-white py-1 `}
      disabled={validate}
      onSubmit={(e) => e.preventDefault()}
      onClick={() => {
        action();
      }}
    >
      {text}
    </button>
  );
};
