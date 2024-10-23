import Button from "../../elements/Button";
import Description from "../../elements/Description";

const DescriptionDetail = (props) => {
  const { tags = [], description } = props;
  const tagSlice = tags.length > 0 ? tags.slice(0, 5) : [];

  return (
    <>
      <div className="w-ful">
        <div className="w-full py-3 mb-2 flex flex-wrap gap-3">
          {tagSlice.length > 0 &&
            tagSlice.map((tag) => <Button key={tag.id} className="text-nowrap">{tag.name}</Button>)}
        </div>
        <Description>{description}</Description>
      </div>
    </>
  );
};

export default DescriptionDetail;
