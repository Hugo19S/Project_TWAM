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
        <a href="" className="reference">
          Devoluções
        </a>
        <a href="" className="reference">
          Cartão universo
        </a>
        <a href="" className="reference">
          Preço Mínimo Garantido
        </a>
        <a href="" className="reference">
          Política de Cookies
        </a>
        <a href="" className="reference">
          Ajuda
        </a>
      </nav>
    </div>
  );
}

export default Servicos;
