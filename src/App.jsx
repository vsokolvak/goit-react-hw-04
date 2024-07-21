import { useState } from "react";
import ImageGallery from "./components/ImageGallery/ImageGallery"
import SearchBar from "./components/SearchBar/SearchBar"
import { getImg } from "./axios/getImg";
import Loader from "./components/Loader/Loader";
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";


function App() {

  const [load, setLoad] = useState(false);
  const [page, setPage] = useState(1)
  const [galeryData, setGaleryData] = useState([])
  const [serchEror, setSerchEror] = useState(false)
  const [serchText, setSerchText] = useState('')
  const [openModal, setOpenModal] = useState(false)
  const [modalData, setmodalData] = useState({});

  const getImgGalery = async (serchText) => {
    try {
      setGaleryData([])
      setSerchText(serchText)
      setSerchEror(false)
      setLoad(true)
      const imgData = await getImg(serchText)
      if (imgData.length === 0) {
        setSerchEror(true);
        return
      }
      setGaleryData(imgData)
    }
    catch {
      setSerchEror(true)
    }
    finally {
      setLoad(false)
    }
  }
  const updateImgGalery = async () => {
    try {
      setSerchEror(false);
      setLoad(true);
      const imgData = await getImg(serchText, page + 1);
      if (imgData.length === 0) {
        // setSerchEror(true);
        return;
      }
      setPage(page + 1);
      setGaleryData(prev => [...prev, ...imgData]);
    } catch {
      // setSerchEror(true);
    } finally {
      setLoad(false);
    }
  }
  const openModalWindow = (alt_description, likes, urls) => {
    setOpenModal(true)
    setmodalData({ alt_description, likes, urls });
  };
  const closeModal = () => {
    setOpenModal(false)
  }

  return (
    <>
      <SearchBar load={load} getImgGalery={getImgGalery} />
      {galeryData.length > 0 && (
        <ImageGallery
          galeryData={galeryData}
          openModalWindow={openModalWindow}
        />
      )}
      {load && <Loader />}
      {serchEror && <ErrorMessage />}
      {galeryData.length > 0 && <LoadMoreBtn addImg={updateImgGalery} />}
      {openModal && (
        <ImageModal
          openModal={openModal}
          modalData={modalData}
          closeModal={closeModal}
        />
      )}
    </>
  );
}

export default App
