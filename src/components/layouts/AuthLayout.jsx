const AuthLayout = (props) => {
  const { children, background, backgroundImage, className } = props;

  return (
    <section
      className={`pt-20 pb-14 ${background} bg-center bg-cover ${className}`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container mx-auto">{children}</div>
    </section>
  );
};

export default AuthLayout;
