const Header = (props) => {
  const { children, className } = props;

  return (
    <h2
      className={`${className} font-montserrat font-bold text-5xl text-center text-wrap mb-2 md:text-5xl lg:text-6xl xl:text-7xl`}
    >
      {children}
    </h2>
  );
};

export default Header;
