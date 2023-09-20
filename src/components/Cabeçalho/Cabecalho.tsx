import styleCabecalho from "./Cabecalho.module.css";
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
    document
      .getElementById(styleCabecalho.menu_bar)
      ?.classList.toggle(styleCabecalho.change);
    document
      .getElementById(styleCabecalho.nav)
      ?.classList.toggle(styleCabecalho.change);
    document
      .getElementById(styleCabecalho.menu_bg)
      ?.classList.toggle(styleCabecalho.change_bg);

    const navElement = document.getElementById(styleCabecalho.nav);
    if (controler && navElement) {
      navElement.style.display = "block";
      controler = false;
    } else if (!controler && navElement) {
      navElement.style.display = "none";
      controler = true;
    }
  };

  return (
    <div className={styleCabecalho.header_fixed}>
      <div className={styleCabecalho.cabecalho}>
        <div id={styleCabecalho.menu}>
          <div id={styleCabecalho.menu_bar} onClick={menuOnClick}>
            <div id={styleCabecalho.bar1} className={styleCabecalho.bar}></div>
            <div id={styleCabecalho.bar2} className={styleCabecalho.bar}></div>
            <div id={styleCabecalho.bar3} className={styleCabecalho.bar}></div>
          </div>
          <nav className={styleCabecalho.nav} id={styleCabecalho.nav}>
            <ul className={styleCabecalho.menuOptions}>
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

        <div
          className={styleCabecalho.menu_bg}
          id={styleCabecalho.menu_bg}
        ></div>

        <nav id={styleCabecalho.forSaleLogo}>
          <a href="">
            {<img src={image} alt="buy" id={styleCabecalho.imageLogo} />}
          </a>
          <a href="" id={styleCabecalho.forSale}>
            ForSale
          </a>
        </nav>

        <SearchBar />

        <nav className={styleCabecalho.promocoes}>
          <ul>
            <a href="#">Promoções</a>
          </ul>
        </nav>

        <div className={styleCabecalho.loginDiv}>
          <img
            src={image1}
            alt="LogInIcon"
            className={styleCabecalho.iconLogin}
          />
          <div className={styleCabecalho.mensagem}>
            <span>Olá!</span>
            <span>menud</span>
          </div>
        </div>

        <CartButton />
      </div>
    </div>
  );
}
