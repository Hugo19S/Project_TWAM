import styleServicos from "./Servicos.module.css";
import { FcServices } from "react-icons/fc";

function Servicos() {
  return (
    <div className={styleServicos.Servicos}>
      <div className={styleServicos.header}>
        <FcServices />
        <h3>Serviços</h3>
      </div>

      <nav className={styleServicos.navegação}>
        <a href="#" className={styleServicos.reference}>
          Entregas
        </a>
        <a href="#" className={styleServicos.reference}>
          Devoluções
        </a>
        <a href="#" className={styleServicos.reference}>
          Cartão universo
        </a>
        <a href="#" className={styleServicos.reference}>
          Preço Mínimo Garantido
        </a>
        <a href="#" className={styleServicos.reference}>
          Política de Cookies
        </a>
        <a href="#" className={styleServicos.reference}>
          Ajuda
        </a>
      </nav>
    </div>
  );
}

export default Servicos;
