const Header = (props) => {
  const { children, className } = props;

  return (
    <h2
      className={`${className} font-bold text-center tracking-wide mb-3 md:text-5xl lg:text-4xl xl:text-5xl`}
    >
      {children}
    </h2>
  );
};

export default Header;
