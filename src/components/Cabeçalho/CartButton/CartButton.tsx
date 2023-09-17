import { AiOutlineShoppingCart } from "react-icons/ai";
import styleCartButton from "./CartButton.module.css";

function CartButton() {
  return (
    <button className={styleCartButton.cart_button}>
      <AiOutlineShoppingCart />
      <span className={styleCartButton.cart_status}>1</span>
    </button>
  );
}

export default CartButton;
