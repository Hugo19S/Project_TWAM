import { AiOutlineShoppingCart } from "react-icons/ai";
import "../../../css/CartButton.css";

function CartButton() {
  return (
    <button className="cart_button">
      <AiOutlineShoppingCart />
      <span className="cart-status">1</span>
    </button>
  );
}

export default CartButton;
