import { FlexCol } from "../styles";
interface TextInfoProps {
  title: string;
  text: string;
}
export const TextInfo = ({ title, text }: TextInfoProps) => {
  const firstLetter = title[0];
  return (
    <FlexCol className="pl-2">
      <p className="text-ellipsis  overflow-hidden font-bold text-lg font-serif">
        {title.replace(firstLetter, firstLetter.toUpperCase())}:
      </p>
      <p className="text-ellipsis  overflow-hidden font-semibold text-base font-serif pl-3">
        {text}
      </p>
    </FlexCol>
  );
};
