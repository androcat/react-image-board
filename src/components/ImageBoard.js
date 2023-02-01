import { useState } from "react";
import ImageForm from "./ImageForm";
import ImageList from "./ImageList";

const INITIAL_DATA = [
  {
    url: "https://i.kym-cdn.com/entries/icons/original/000/027/475/Screen_Shot_2018-10-25_at_11.02.15_AM.png",
    caption: "OMG :O",
  },
];

function ImageBoard() {
  const [imgs, setImgs] = useState(INITIAL_DATA);

  const addImg = (img) => {
    setImgs([...imgs, img]);
  };
  return (
    <div className="imageBoard">
      <ImageForm addImg={addImg} />
      <ImageList imgs={imgs} />
    </div>
  );
}

export default ImageBoard;
