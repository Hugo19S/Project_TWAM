import styleEventos from "../Serviços/Servicos.module.css";
import imageEvent from "../../../image/event_1458512.png";

function Eventos() {
  return (
    <div className={styleEventos.Servicos}>
      <div className={styleEventos.header}>
        <img
          src={imageEvent}
          alt="imageEvent"
          className={styleEventos.imageEvent}
        />
        <h3>Eventos</h3>
      </div>

      <nav className={styleEventos.navegação}>
        <a href="" className={styleEventos.reference}>
          Ação de Graças
        </a>
        <a href="" className={styleEventos.reference}>
          Ano Novo
        </a>
        <a href="" className={styleEventos.reference}>
          Carnaval
        </a>
        <a href="" className={styleEventos.reference}>
          Dia da Amizade
        </a>
        <a href="" className={styleEventos.reference}>
          Dia das Mães
        </a>
        <a href="" className={styleEventos.reference}>
          Dia do Trabalhador
        </a>
        <a href="" className={styleEventos.reference}>
          Dia dos Pais
        </a>
        <a href="" className={styleEventos.reference}>
          Dia Internacional da Mulher
        </a>
        <a href="" className={styleEventos.reference}>
          Valentine's Day
        </a>
        <a href="" className={styleEventos.reference}>
          Halloween
        </a>
      </nav>
    </div>
  );
}

export default Eventos;
