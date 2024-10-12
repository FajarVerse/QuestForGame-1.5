const GameCards = (props) => {
  const { children, gameId } = props;

  return (
    <div className="relative w-40 h-56 flex justify-center flex-shrink-0 bg-sunset overflow-hidden border-[3px] border-lightSunset drop-shadow-xl box-shadow">
      {children}
    </div>
  );
};

const CardImage = (props) => {
  const { image, titleImage } = props;

  return (
    <div className="w-full h-full">
      <img
        src={image}
        alt={titleImage}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

const CardFill = (props) => {
  const { title, date, rating } = props;

  return (
    <div className="absolute bottom-0 w-full h-1/3 px-4 py-1 bg-sunset rounded-t-2xl border-t-[3px] border-lightSunset">
      <h3 className="font-bebas-neue font-bold text-lg text-dark tracking-wide mb-2">
        {(title || "").substring(0, 15)}...
      </h3>
      <div className="w-full flex justify-between">
        <p className="font-comic-neue font-extrabold text-base text-slate-800">
          {(date || "").substring(0, 4)}
        </p>
        <p className="font-comic-neue font-extrabold text-base text-slate-800">
          ⭐ {rating}
        </p>
      </div>
    </div>
  );
};
GameCards.CardImage = CardImage;
GameCards.CardFill = CardFill;

export default GameCards;
