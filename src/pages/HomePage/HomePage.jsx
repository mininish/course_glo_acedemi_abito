import { useOutletContext } from "react-router";
import Card from "../../components/Card/Card";
import Sidebar from "../../components/Sidebar/Sidebar";

import "./HomePage.scss";

function HomePage() {
  const { products } = useOutletContext();

  return (
    <div className="content-box">
      <div className="content-main">
        <h2 className="content-main__title">Рекомендации для вас</h2>

        <div className="card-list">
          {products.map((card) => (
            <Card
              key={card.id}
              price={card.price}
              title={card.title}
              address={card.address}
              date={card.date}
              image={card.image}
              id={card.id}
            />
          ))}
        </div>
      </div>

      <Sidebar />
    </div>
  );
}

export default HomePage;
