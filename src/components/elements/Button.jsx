import { Link } from "react-router-dom";

const Button = (props) => {
  const { children, className, onClick, link } = props;
  return (
    <Link to={link}>
      <button
        className={`${className} px-2 py-1 bg-sunset font-comic-neue font-bold text-base text-second border-2 border-lightSunset btn-shadow flex items-center gap-1 lg:px-3 lg:text-lg`}
        onClick={onClick}
      >
        {children}
      </button>
    </Link>
  );
};

export default Button;
