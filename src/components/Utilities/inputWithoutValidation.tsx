interface InputProps {
  type?: string;
  placeholder: string;
  action: (e: string) => void;
  value: string;
  required?: boolean;
}

export const InputWithoutValidation = ({
  action,
  placeholder,
  value,
  type,
  required,
}: InputProps) => {
  return (
    <div className="w-full">
      {
        <>
          {required && (
            <span className="text-red-600 text-[0.5rem]">*Required</span>
          )}
          <input
            autoComplete={"on"}
            value={value}
            type={type}
            className={`rounded-md focus:outline-none focus text-center border-2  focus:text-slate-600 w-full border-sky-900
          `}
            placeholder={placeholder}
            onChange={({ target }) => action(target.value)}
          />
        </>
      }
    </div>
  );
};
