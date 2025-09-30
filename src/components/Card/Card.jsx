import "./Card.scss";

function Card({ title, address, price, date, image }) {
  return (
    <a href="single.html" className="card">
      <img src={image} alt="card" className="card--img" />

      <div className="card-info">
        <h5 className="title">{title}</h5>

        <span className="price">{price}</span>

        <div className="footer">
          <span className="card-address">{address}</span>

          <span className="card-time">{date}</span>
        </div>
      </div>
    </a>
  );
}

export default Card;
