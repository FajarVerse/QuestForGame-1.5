import { Link } from "react-router-dom";

const GameCards = (props) => {
  const { children, gameId, id } = props;

  return (
    <>
      <Link to={`/detail-game/${id}`} className="group">
        <div className="relative w-36 h-44 flex justify-center flex-shrink-0 bg-sunset overflow-hidden border-[3px] border-lightSunset drop-shadow-xl box-shadow md:h-48 lg:w-44 lg:h-60 group-hover:scale-95 transition duration-300 ease-in-out">
          {children}
        </div>
      </Link>
    </>
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
    <div className="absolute bottom-0 w-full h-1/3 px-4 py-1 bg-sunset rounded-t-2xl ring-2 ring-lightSunset lg:py-2">
      <h3 className="font-montserrat font-bold text-sm text-second mb-2 lg:text-lg lg:tracking-wider">
        {(title || "").substring(0, 10)}...
      </h3>
      <div className="w-full flex justify-between">
        <p className="font-comic-neue font-extrabold text-sm text-second lg:text-base">
          {(date || "").substring(0, 4)}
        </p>
        <p className="font-comic-neue font-extrabold text-sm text-second lg:text-base">
          ⭐ {rating}
        </p>
      </div>
    </div>
  );
};
GameCards.CardImage = CardImage;
GameCards.CardFill = CardFill;

export default GameCards;
