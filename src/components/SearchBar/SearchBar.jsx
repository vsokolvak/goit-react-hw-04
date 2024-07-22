import toast, { Toaster } from "react-hot-toast";
import style from "./SearchBar.module.css";

function SearchBar({ setSerchImg, load }) {
  const serchImg = (e) => {
    e.preventDefault();
    const serchText = e.target.elements.serchText.value;
    if (serchText.length < 3) {
      toast.error("minimum 3 letters to serch", {
        duration: 2000,
        position: "top-left",
      });
      return;
    }
    setSerchImg(serchText);
    e.target.reset();
  };

  return (
    <header className={style.header}>
      <form onSubmit={serchImg} className={style.headerForm}>
        <input
          className={style.headerInput}
          name="serchText"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button disabled={load} className={style.headerButton} type="submit">
          Search
        </button>
      </form>
      <Toaster />
    </header>
  );
}

export default SearchBar;