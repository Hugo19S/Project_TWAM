import "./Servicos.css";
import { FcServices } from "react-icons/fc";

function Servicos() {
  return (
    <div className="Servicos">
      <div className="header">
        <FcServices />
        <h3>Serviços</h3>
      </div>

      <nav className="navegação">
        <a href="" className="reference">
          Entregas
        </a>
        <br />
        <a href="" className="reference">
          Devoluções
        </a>
        <br />
        <a href="" className="reference">
          Cartão universo
        </a>
        <br />
        <a href="" className="reference">
          Preço Mínimo Garantido
        </a>
        <br />
        <a href="" className="reference">
          Política de Cookies
        </a>
        <br />
        <a href="" className="reference">
          Ajuda
        </a>
        <br />
      </nav>
    </div>
  );
}

export default Servicos;
