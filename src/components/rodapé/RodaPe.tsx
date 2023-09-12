import "./RodaPe.css";
import Aplicacao from "./Aplicação/Aplicacao";
import Servicos from "./Serviços/Servicos";
import Eventos from "./Eventos/Eventos";

function RodaPe() {
  return (
    <div className="geral">
      <Aplicacao />
      <Servicos />
      <Eventos />
    </div>
  );
}

export default RodaPe;
