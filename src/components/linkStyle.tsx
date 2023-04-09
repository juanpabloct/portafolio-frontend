import { Link, useParams, useLocation } from "react-router-dom";

export const LinkStyle = ({ to, title }: { to: string; title: string }) => {
  const url = useLocation();
  console.log(url);

  return (
    <Link
      className={`${
        url.pathname === to && "text-white border-b border-white"
      } hover:text-white px-4 py-2 w-full`}
      to={to}
    >
      {title}
    </Link>
  );
};
