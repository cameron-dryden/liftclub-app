import { createIcon } from "native-base";

const Expand = (props) => {
  const CustomIcon = createIcon({
    viewBox: "0 0 48 48",
    d: "M20 25.042q-.292 0-.521-.084-.229-.083-.437-.291l-8.084-8.084q-.375-.375-.354-.979.021-.604.396-.979.417-.417.979-.375.563.042.979.417L20 21.708l7.083-7.083q.375-.375.979-.396.605-.021.98.438.416.375.375.958-.042.583-.417 1l-8.042 8.042q-.208.208-.437.291-.229.084-.521.084Z",
  });
  return <CustomIcon {...props} />;
};

export default Expand;