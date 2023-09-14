/*
Componente que contém os produtos
*/
import "./ProductCard.css";
import { BsFillCartPlusFill } from "react-icons/bs";
import propTypes from "prop-types";
import formatCurrency from "../formatCurrency/formatCurrency";

interface ProductCardProps {
  data: {
    title: string;
    price: number;
    thumbnail: string;
  };
}

function ProductCard({ data }: ProductCardProps) {
  return (
    <section className="product-card">
      <img
        src={data.thumbnail.replace(/\w\.jpg/gi, "W.jpg")}
        alt="product"
        className="card__image"
      />
      <div className="card__infos">
        <h2 className="card__price">{formatCurrency(data.price)}</h2>
        <h2 className="card__title">{data.title}</h2>
      </div>

      <button className="button__add-cart" aria-label="Adicionar ao carrinho">
        <BsFillCartPlusFill />
      </button>
    </section>
  );
}

export default ProductCard;

/**
 * validar o data no propTypes
 */
ProductCard.propTypes = {
  data: propTypes.shape({
    title: propTypes.string.isRequired,
    price: propTypes.number.isRequired,
    thumbnail: propTypes.string.isRequired,
  }),
};
