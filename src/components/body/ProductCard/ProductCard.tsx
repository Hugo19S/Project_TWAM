/*
Componente que contém os produtos
*/
import styleProductCard from "./ProductCard.module.css";
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
    <section className={styleProductCard.product_card}>
      <img
        src={data.thumbnail.replace(/\w\.jpg/gi, "W.jpg")}
        alt="product"
        className={styleProductCard.card__image}
      />
      <div className={styleProductCard.card__infos}>
        <h2 id={styleProductCard.h2} className={styleProductCard.card__price}>
          {formatCurrency(data.price)}
        </h2>
        <h2 id={styleProductCard.h2} className={styleProductCard.card__title}>
          {data.title}
        </h2>
      </div>

      <button
        className={styleProductCard.button__add_cart}
        aria-label="Adicionar ao carrinho"
      >
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
