import "./Eventos.css";
import imageEvent from "../../../image/event_1458512.png";

function Eventos() {
  return (
    <div className="eventos">
      <div className="header">
        <img src={imageEvent} alt="imageEvent" className="imageEvent" />
        <h3>Eventos</h3>
      </div>

      <nav className="navegação">
        <a href="" className="reference">
          Ação de Graças
        </a>
        <a href="" className="reference">
          Ano Novo
        </a>
        <a href="" className="reference">
          Carnaval
        </a>
        <a href="" className="reference">
          Dia da Amizade
        </a>
        <a href="" className="reference">
          Dia das Mães
        </a>
        <a href="" className="reference">
          Dia do Trabalhador
        </a>
        <a href="" className="reference">
          Dia dos Pais
        </a>
        <a href="" className="reference">
          Dia Internacional da Mulher
        </a>
        <a href="" className="reference">
          Valentine's Day
        </a>
        <a href="" className="reference">
          Halloween
        </a>
      </nav>
    </div>
  );
}

export default Eventos;
