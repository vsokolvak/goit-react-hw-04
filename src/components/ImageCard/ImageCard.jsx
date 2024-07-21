import style from "./ImageCard.module.css";

function ImageCard({ imgData, openModalWindow }) {

  const openModal = () => {
    openModalWindow(imgData.alt_description, imgData.likes, imgData.urls);
  }

  return (
    <div onClick={openModal}>
      <img src={imgData.urls.small} alt={imgData.alt_description} />
    </div>
  );
}

export default ImageCard;