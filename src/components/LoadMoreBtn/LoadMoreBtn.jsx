import style from "./LoadMoreBtn.module.css";

function LoadMoreBtn({ addImg }) {
  return (
    <div className={style.wrapper}>
      <button onClick={addImg} className={style.btn}>Load More</button>
    </div>
  );
}

export default LoadMoreBtn;