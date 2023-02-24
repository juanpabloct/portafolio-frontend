import { useDispatch } from "react-redux";
import { Check } from "../../assets/icons/inputPassword/CheckAndError/check";
import { useSession } from "../../customHooks/customHookSession";
import { useEffect } from "react";
import { ChangeCorrect } from "../../reducers/Reducer.sessions";
import { ErrorIcons } from "../../assets/icons/inputPassword/CheckAndError/errorIcons";
export const Notification = () => {
  const { correct } = useSession();
  const { isCorrect, message, show } = correct;
  const dispatch = useDispatch();
  useEffect(() => {
    const timeChangeShow = setTimeout(() => {
      dispatch(ChangeCorrect({ ...correct, show: false }));
    }, 4000);
    return () => {
      clearTimeout(timeChangeShow);
    };
  }, [show]);

  return (
    <div
      className={`absolute flex items-center gap-2 border right-0 p-3 shadow-md shadow-black ${
        isCorrect ? "border-slate-400" : "border-red-500 text-red-500"
      } ${
        show ? "visible opacity-100" : "invisible opacity-0"
      } transition-["visible"] duration-1000 delay-200 animate-notificationOpacity `}
    >
      {isCorrect ? <Check size="24" /> : <ErrorIcons size="24" />}
      <p className="text-lg">{message}</p>
    </div>
  );
};
