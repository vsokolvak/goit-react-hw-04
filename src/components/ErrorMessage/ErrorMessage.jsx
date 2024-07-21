import style from "./ErrorMessage.module.css";

function ErrorMessage() {
  return (
    <div className={style.wrapper}>
      <p className={style.text}>search failed, please try again</p>
    </div>
  );
}

export default ErrorMessage;