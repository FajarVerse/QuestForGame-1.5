import Button from "../elements/Button";

const ToggleScrollX = (props) => {
  const { cardContent = null } = props;

  const onScrollLeft = () => {
    if (cardContent) {
      cardContent.current.scrollBy(-350, 0);
    }
  };

  const onScrollRight = () => {
    if (cardContent) {
      cardContent.current.scrollBy(350, 0);
    }
  };

  return (
    <>
      <div className="w-full px-1 mt-3 flex justify-between">
        <Button onClick={() => onScrollLeft()}>
          <span>
            <svg
              className="lg:w-8 lg:h-8"
              xmlns="http://www.w3.org/2000/svg"
              height="25px"
              viewBox="0 -960 960 960"
              width="25px"
              fill="#ffffff"
            >
              <path d="M440-240 200-480l240-240 56 56-183 184 183 184-56 56Zm264 0L464-480l240-240 56 56-183 184 183 184-56 56Z" />
            </svg>
          </span>
          Previos
        </Button>
        <Button onClick={() => onScrollRight()}>
          Next
          <span>
            <svg
              className="lg:w-8 lg:h-8"
              xmlns="http://www.w3.org/2000/svg"
              height="25px"
              viewBox="0 -960 960 960"
              width="25px"
              fill="#ffffff"
            >
              <path d="M401.67-480.67 208.67-674l46.66-46.67 240 240-240 240-46.66-46.66 193-193.34Zm256.66 0L465.33-674 512-720.67l240 240-240 240-46.67-46.66 193-193.34Z" />
            </svg>
          </span>
        </Button>
      </div>
    </>
  );
};

export default ToggleScrollX;
