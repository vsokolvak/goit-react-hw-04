import style from "./ImageModal.module.css";
import Modal from "react-modal";

Modal.setAppElement("#root");

function ImageModal({ openModal, modalData, closeModal }) {
  const { alt_description, likes, urls } = { ...modalData };
  return (
    <div>
      <Modal
        isOpen={openModal}
        onRequestClose={closeModal}
        overlayClassName={style.overlayModal}
        contentLabel={alt_description}
      >
        <h2 className={style.title}>{alt_description}</h2>
        <img src={urls.full} alt={alt_description} />
        <span className={style.likes}> likes: {likes} </span>
      </Modal>
    </div>
  );
}

export default ImageModal;