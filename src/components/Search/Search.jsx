import "./Search.scss";

function Search() {
    return (
        <section className="search">
            <div className="container">
                <div className="search-box">
                    <input
                        type="text"
                        className="search-box__input"
                        placeholder="Поиск по объявлениям"
                    />

                    <button className="search-btn btn btn-active">
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
