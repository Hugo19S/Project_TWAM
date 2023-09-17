import { FcMoneyTransfer } from "react-icons/fc";
import styleMoney from "../Serviços/Servicos.module.css";

function Money() {
  return (
    <div className={styleMoney.Servicos}>
      <div className={styleMoney.navegação}>
        <FcMoneyTransfer />
        <h3>Ganhe dinheiro connosco</h3>
      </div>

      <nav className={styleMoney.navegação}>
        <a href="" className={styleMoney.reference}>
          Vender produtos na Amazon
        </a>
        <a href="" className={styleMoney.reference}>
          Vender na Amazon Business
        </a>
        <a href="" className={styleMoney.reference}>
          Vender aplicações na Amazon
        </a>
        <a href="" className={styleMoney.reference}>
          Tornar-se um afiliado
        </a>
        <a href="" className={styleMoney.reference}>
          Anuncie os seus produtos
        </a>
        <a href="" className={styleMoney.reference}>
          Auto-publicar connosco
        </a>
        <a href="" className={styleMoney.reference}>
          Alojar um Amazon Hub
        </a>
        <a href="" className={styleMoney.reference}>
          Dia Internacional da Mulher
        </a>
      </nav>
    </div>
  );
}

export default Money;
