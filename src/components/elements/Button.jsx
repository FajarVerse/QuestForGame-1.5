import { Link } from "react-router-dom";

const Button = (props) => {
  const { children, className, onClick, link } = props;
  return (
    <Link to={link} className="group">
      <button
        className={`${className} px-2 py-0.5 bg-sunset font-comic-neue font-bold text-base text-second border-2 border-lightSunset btn-shadow flex items-center gap-1 lg:px-3 lg:text-lg group-hover:scale-105 group-hover:bg-[#e89218] transition duration-300 ease-out`}
        onClick={onClick}
      >
        {children}
      </button>
    </Link>
  );
};

export default Button;
