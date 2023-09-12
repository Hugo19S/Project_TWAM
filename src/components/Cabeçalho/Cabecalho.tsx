import "../../css/Cabecalho.css";
import image from "../../image/ForSaleLogo.png";
import image1 from "../../image/login_icon.png";
import CartButton from "./CartButton/CartButton";
import SearchBar from "./SearchBar/SearchBar";

export default function Cabecalho() {
  var controler = true;

  /**
   * Abre o menu e mostra as opções
   */
  const menuOnClick = () => {
    document.getElementById("menu-bar")?.classList.toggle("change");
    document.getElementById("nav")?.classList.toggle("change");
    document.getElementById("menu-bg")?.classList.toggle("change-bg");

    const navElement = document.getElementById("nav");
    if (controler && navElement) {
      navElement.style.display = "block";
      controler = false;
    } else if (!controler && navElement) {
      navElement.style.display = "none";
      controler = true;
    }
  };

  return (
    <div className="geral">
      <div id="menu">
        <div id="menu-bar" onClick={menuOnClick}>
          <div id="bar1" className="bar"></div>
          <div id="bar2" className="bar"></div>
          <div id="bar3" className="bar"></div>
        </div>
        <nav className="nav" id="nav">
          <ul className="menuOptions">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Resume</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="menu-bg" id="menu-bg"></div>

      <nav id="forSaleLogo">
        <a href="">{<img src={image} alt="buy" id="imageLogo" />}</a>
        <a href="" id="forSale">
          ForSale
        </a>
      </nav>

      <SearchBar />

      <nav className="promocoes">
        <ul>
          <a href="#">Promoções</a>
        </ul>
      </nav>

      <div className="loginDiv">
        <img src={image1} alt="LogInIcon" className="iconLogin" />
        <div className="mensagem">
          <span>Olá!</span>
          <span>menud</span>
        </div>
      </div>

      <CartButton />
    </div>
  );
}
