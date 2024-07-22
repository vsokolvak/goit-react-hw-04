
import { getImg } from "./axios/getImg";


const getImgGalery = async (serchText, page) => {
  try {
    const imgData = await getImg(serchText, page);
    if (imgData.length === 0) {
      setSerchEror(true);
      return;
    }
    setGaleryData(imgData);
  } catch {
    setSerchEror(true);
  } finally {
    setLoad(false);
  }
};
