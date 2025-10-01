import Sidebar from "../../components/Sidebar/Sidebar";
import "./ProductPage.scss";

import { useParams } from "react-router";

import { cardArray } from "../../constants";
import { Link } from "react-router";

function ProductPage() {
  const params = useParams();

  const product = cardArray.find(
    (card) => card.id === Number(params.productId)
  );

  return (
    <>
      {product ? (
        <div className="content-box">
          <div className="content-product">
            <div className="content-product__left">
              <h2 className="content-product__title">{product.title}</h2>

              <div className="content-product__content">
                <img
                  className="content-product__img"
                  src={product.image}
                  alt="product"
                />

                <p className="content-product__text">{product.description}</p>
              </div>
            </div>

            <div className="content-product__right">
              <span className="content-product__title">{product.price}</span>

              <button className="btn btn-active btn-large">
                Показать телефон
              </button>
            </div>
          </div>

          <Sidebar />
        </div>
      ) : (
        <>
          <h2>404 - Такого товара не существует.</h2>

          <Link to="/">
            <button className="btn btn-active">Вернуться на главную</button>
          </Link>
        </>
      )}
    </>
  );
}

export default ProductPage;
