import { FcMoneyTransfer } from "react-icons/fc";

function Money() {
  return (
    <div className="eventos">
      <div className="header">
        <FcMoneyTransfer />
        <h3>Ganhe dinheiro connosco</h3>
      </div>

      <nav className="navegação">
        <a href="" className="reference">
          Vender produtos na Amazon
        </a>
        <a href="" className="reference">
          Vender na Amazon Business
        </a>
        <a href="" className="reference">
          Vender aplicações na Amazon
        </a>
        <a href="" className="reference">
          Tornar-se um afiliado
        </a>
        <a href="" className="reference">
          Anuncie os seus produtos
        </a>
        <a href="" className="reference">
          Auto-publicar connosco
        </a>
        <a href="" className="reference">
          Alojar um Amazon Hub
        </a>
        <a href="" className="reference">
          Dia Internacional da Mulher
        </a>
      </nav>
    </div>
  );
}

export default Money;
