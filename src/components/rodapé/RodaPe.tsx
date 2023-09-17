import "./RodaPe.css";
import Aplicacao from "./Aplicação/Aplicacao";
import Servicos from "./Serviços/Servicos";
import Eventos from "./Eventos/Eventos";
import Money from "./Money/Money";

function RodaPe() {
  return (
    <div className="rodaPe">
      <Aplicacao />
      <Servicos />
      <Eventos />
      <Money />
    </div>
  );
}

export default RodaPe;
