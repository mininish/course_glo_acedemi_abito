import "./Search.scss";

function Search({ onSearchClick, searchText, searchChange }) {
  return (
    <section className="search">
      <div className="container">
        <div className="search-box">
          <input
            value={searchText}
            type="text"
            className="search-box__input"
            placeholder="Поиск по объявлениям"
            onChange={(e) => searchChange(e.target.value)}
          />

          <button className="search-btn btn btn-active" onClick={onSearchClick}>
            <img
              className="search-btn__icon"
              src="/static/img/icons/search.svg"
              alt="search"
            />

            <span className="search-btn__text">Найти</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Search;
