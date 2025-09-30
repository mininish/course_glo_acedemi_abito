import Card from "../components/Card/Card";
import Header from "../components/Header/Header";
import Search from "../components/Search/Search";
import Sidebar from "../components/Sidebar/Sidebar";

import { cardArray } from "../constants";

function Home() {
  return (
    <>
      <Header />

      <main>
        <Search />

        <section className="content">
          <div className="container">
            <div className="content-box">
              <div className="content-main">
                <h2 className="content-main__title">Рекомендации для вас</h2>

                <div className="card-list">
                  {cardArray.map((card) => (
                    <Card
                      key={card.id}
                      price={card.price}
                      title={card.title}
                      address={card.address}
                      date={card.date}
                      image={card.image}
                    />
                  ))}
                </div>
              </div>

              <Sidebar />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
