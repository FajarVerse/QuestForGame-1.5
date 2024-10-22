import Button from "../../elements/Button";

const ScreenShootDetail = (props) => {
  const { publisher = [], image, titleImage, ImageContentRef } = props;
  const publish = publisher.length > 0 ? publisher.slice(0, 1) : [];

  return (
    <>
      <div className="w-full pt-5 mb-1 flex gap-2">
        {publish.length > 0 &&
          publish.map((dev) => (
            <Button key={dev.id} className="w-auto text-nowrap">
              Publisher: {dev.name}
            </Button>
          ))}
      </div>
      <div
        className="relative w-full py-3.5 flex overflow-x-scroll gap-3 mb-2 scroll-smooth card-scroll-bar lg:gap-4 xl:gap-5"
        ref={ImageContentRef}
      >
        <div className="w-4/5 h-44 bg-sunset box-shadow border-4 border-lightSunset flex-shrink-0 overflow-hidden mr-2 md:w-3/5 md:h-56 lg:w-1/2 lg:h-64 xl:w-2/5 xl:h-72">
          <img
            src={image}
            alt={titleImage}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default ScreenShootDetail;
