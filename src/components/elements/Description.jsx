const Description = (props) => {
  const { children, className } = props;

  return (
    <p
      className={`font-comic-neue font-medium text-base text-description mb-2 md:text-lg lg:text-base lg:mb-3 xl:text-xl ${className}`}
    >
      {children}
    </p>
  );
};

export default Description;
