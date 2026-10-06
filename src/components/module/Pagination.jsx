
import style from "../../assets/css/pagination.module.css";
export default function Pagination({prevHandler, nextHandler, page}) {
  
  return (
    <div className={style.pagination}>
      <button onClick={prevHandler} className={page == 1 ? style.disabled : ''}>Prev</button>
      <p className={page == 1 ? style.selected : ''}>1</p>
      <p className={page == 2 ? style.selected : ''}>2</p>
      {page > 2 && page < 9 && (
        <>
          <span>...</span>

          <p className={style.selected}>{page}</p>
        </>
      )}
      <span>...</span>
      <p className={page == 9 ? style.selected : ''}>9</p>
      <p className={page == 10 ? style.selected : ''}>10</p>
      <button onClick={nextHandler} className={page == 10 ? style.disabled : ''}>Next</button>
    </div>
  );
}
