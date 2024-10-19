const SubHeader = (props) => {
  const { children, className } = props;

  return (
    <>
      <header>
        <h1
          className={`${className} font-montserrat font-bold text-2xl md:text-3xl lg:text-[2rem] lg:mb-3 xl:text-[2.5rem]`}
        >
          {children}
        </h1>
      </header>
    </>
  );
};

export default SubHeader;
