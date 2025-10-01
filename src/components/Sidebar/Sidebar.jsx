import "./Sidebar.scss";

function Sidebar() {
  return (
    <div className="content-side">
      <div className="services">
        <h3 className="services-title">Сервисы и услуги</h3>

        <div className="services-box">
          <div className="services-box__service">
            <img
              src="/static/img/icons/icon-delivery.svg"
              alt="delivery"
              className="service-img"
            />

            <p className="service-title">Доставка</p>

            <p className="service-description">
              Проверка при получении и возможность бесплатно вернуть товар
            </p>
          </div>

          <div className="services-box__service">
            <img
              src="/static/img/icons/icon-avtoteka.svg"
              alt="delivery"
              className="service-img"
            />

            <p className="service-title">Автотека</p>

            <p className="service-description">
              Отчёт с историей авто: пробег, владельцы, сведения о залоге, ДТП и
              ремонтах
            </p>
          </div>

          <div className="services-box__service">
            <img
              src="/static/img/icons/icon-home.svg"
              alt="delivery"
              className="service-img"
            />

            <p className="service-title">Онлайн-бронирование жилья</p>

            <p className="service-description">
              Посуточная аренда квартир и домов: большой выбор вариантов для
              поездок по России
            </p>
          </div>
        </div>
      </div>

      <div className="content-side__footer">
        <p>© ООО «Абито», 2011–2021</p>

        <a href="politics.html">Политика конфидециальности</a>

        <a href="policy.html">Обработка данных</a>
      </div>
    </div>
  );
}

export default Sidebar;
