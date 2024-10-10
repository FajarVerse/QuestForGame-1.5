const AuthLayout = (props) => {
  const { children, background } = props;

  return (
    <section className={`pt-20 pb-14 ${background} `}>
      <div className="container">{children}</div>
    </section>
  );
};

export default AuthLayout;
