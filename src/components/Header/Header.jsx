import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-box">
          <a className="header-logo" href="/">
            <img src="/static/img/icons/box.svg" alt="box" />

            <span className="header-logo">Abito</span>
          </a>

          <div className="header-controls">
            <button className="btn btn-outline">Вход и регистрация</button>

            <button className="new-task btn btn-active">
              Подать объявление
            </button>
          </div>

          <div className="header-burger">
            <img
              className="burger__menu--icon"
              src="/static/img/icons/burger.svg"
              alt="burger"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
