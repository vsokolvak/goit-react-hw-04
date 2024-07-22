import style from "./LoadMoreBtn.module.css";

function LoadMoreBtn({ updatePage }) {
  return (
    <div className={style.wrapper}>
      <button onClick={updatePage} className={style.btn}>
        Load More
      </button>
    </div>
  );
}

export default LoadMoreBtn;