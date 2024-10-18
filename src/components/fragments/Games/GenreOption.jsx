import Button from "../../elements/Button";

const GenreOption = ({genreGames}) => {
  
  return (
    <>
      <div className="w-full py-2 flex gap-3 overflow-x-scroll card-scroll-bar lg:gap-5">
        <Button className="px-5 lg:py-1.5 lg:px-7 lg:text-xl" onClick={() => genreGames("")}>All</Button>
        <Button className="px-5 lg:py-1.5 lg:px-7 lg:text-xl" onClick={() => genreGames("action")}>Action</Button>
        <Button className="px-5 lg:py-1.5 lg:px-7 lg:text-xl" onClick={() => genreGames("adventure")}>Adventure</Button>
        <Button className="px-5 lg:py-1.5 lg:px-7 lg:text-xl" onClick={() => genreGames("rpg")}>RPG</Button>
        <Button className="px-5 lg:py-1.5 lg:px-7 lg:text-xl" onClick={() => genreGames("shooter")}>Shooter</Button>
        <Button className="px-5 lg:py-1.5 lg:px-7 lg:text-xl" onClick={() => genreGames("sports")}>Sports</Button>
        <Button className="px-5 lg:py-1.5 lg:px-7 lg:text-xl" onClick={() => genreGames("racing")}>Racing</Button>
      </div>
    </>
  );
};

export default GenreOption;
