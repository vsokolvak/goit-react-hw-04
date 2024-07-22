import { useEffect, useState } from "react";
import ImageGallery from "./components/ImageGallery/ImageGallery"
import SearchBar from "./components/SearchBar/SearchBar"
import { getImg } from "./axios/getImg";
import Loader from "./components/Loader/Loader";
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";


function App() {

  const [load, setLoad] = useState(false);
  const [page, setPage] = useState(0)
  const [galeryData, setGaleryData] = useState([])
  const [serchEror, setSerchEror] = useState(false)
  const [serchText, setSerchText] = useState('')
  const [openModal, setOpenModal] = useState(false)
  const [modalData, setmodalData] = useState({});

  const getImgGalery = async () => {

    if (serchText.length < 3) return

    try {
      setSerchEror(false)
      setLoad(true)
      const imgData = await getImg(serchText, page)
      if (imgData.length === 0) {
        setSerchEror(true);
        return
      }
      setGaleryData((prev) => [...prev, ...imgData]);
    }
    catch {
      setSerchEror(true)
    }
    finally {
      setLoad(false)
    }
  }
  const loadMore = () => {
    setPage(page + 1);
  }
  const setSerchImg = (serchText) => {
    setGaleryData([]);
    setPage(1);
    setSerchText(serchText);
  }
  const openModalWindow = (alt_description, likes, urls) => {
    setOpenModal(true)
    setmodalData({ alt_description, likes, urls });
  };
  const closeModal = () => {
    setOpenModal(false)
  }

  useEffect(() => {
    getImgGalery();
  }, [serchText, page]);

  return (
    <>
      <SearchBar load={load} setSerchImg={setSerchImg} />
      {galeryData.length > 0 && (
        <ImageGallery
          galeryData={galeryData}
          openModalWindow={openModalWindow}
        />
      )}
      {load && <Loader />}
      {serchEror && <ErrorMessage />}
      {galeryData.length > 0 && <LoadMoreBtn updatePage={loadMore} />}
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
