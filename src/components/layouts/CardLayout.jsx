const CardLayout = (props) => {
  const { children, cardContentRef } = props;

  return (
    <>
      <div
        className="relative w-full pt-3 pb-3.5 flex overflow-x-scroll gap-5 mb-2 scroll-smooth card-scroll-bar"
        ref={cardContentRef}
      >
        {children}
      </div>
    </>
  );
};

export default CardLayout;
