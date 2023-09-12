import "./Eventos.css";
import imageEvent from "../../../image/event_1458512.png";

function Eventos() {
  return (
    <div>
      <div className="header">
        <img src={imageEvent} alt="imageEvent" className="imageEvent" />
        <h3>Eventos</h3>
      </div>

      <nav>
        <ul>
          <li>
            <a href="">Ação de Graças</a>
          </li>
          <li>
            <a href="">Ano Novo</a>
          </li>
          <li>
            <a href="">Carnaval</a>
          </li>
          <li>
            <a href="">Dia da Amizade</a>
          </li>
          <li>
            <a href="">Dia das Mães</a>
          </li>
          <li>
            <a href="">Dia do Trabalhador</a>
          </li>
          <li>
            <a href="">Dia dos Pais</a>
          </li>
          <li>
            <a href="">Dia Internacional da Mulher</a>
          </li>
          <li>
            <a href="">Valentine's Day</a>
          </li>
          <li>
            <a href="">Halloween</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Eventos;
