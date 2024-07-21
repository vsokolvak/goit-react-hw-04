import ImageCard from "../ImageCard/ImageCard";
import style from "./ImageGallery.module.css";

function ImageGallery({ galeryData, openModalWindow }) {
  return (
    <ul className={style.list}>
      {galeryData.map((img) => {
        return (
          <li key={img.id} className={style.element}>
            <ImageCard imgData={img} openModalWindow={openModalWindow} />
          </li>
        );
      })}
    </ul>
  );
}

export default ImageGallery;