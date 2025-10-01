import { NavLink } from "react-router";

import "./Card.scss";

function Card({ title, address, price, date, image, id }) {
  return (
    <NavLink to={`/product/${id}`} className="card" end>
      <img src={image} alt="card" className="card--img" />

      <div className="card-info">
        <h5 className="title">{title}</h5>

        <span className="price">{price}</span>

        <div className="footer">
          <span className="card-address">{address}</span>

          <span className="card-time">{date}</span>
        </div>
      </div>
    </NavLink>
  );
}

export default Card;
