import style from "./Loader.module.css";
import { BallTriangle } from "react-loader-spinner";


function Loader() {
  return (
    <div className={style.wrapper}>
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#4fa94d"
        ariaLabel="ball-triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}

export default Loader;