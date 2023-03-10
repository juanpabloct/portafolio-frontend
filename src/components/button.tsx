interface PropsButton {
  action: () => void;
  text: string;
  validate?: boolean;
}
export const Button = ({ action, text, validate }: PropsButton) => {
  return (
    <button
      type="submit"
      className={`border-sky-900 border rounded-md px-8 py-[0.2rem] ${
        validate ? "bg-neutral-500 " : "bg-[#5c6d93] cursor-pointer"
      } font-medium text-base text-white  `}
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
