import styleAplicacao from "./Aplicacao.module.css";
import imageLogo from "../../../image/ForSaleLogo.png";
import imageApple from "../../../image/apple_icon.png";
import imagePaly from "../../../image/playstore_icon.png";
import imageGallery from "../../../image/huawei_gallery.png";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsLinkedin,
  BsTwitch,
  BsYoutube,
} from "react-icons/bs";

function Aplicacao() {
  return (
    <div>
      <div className={styleAplicacao.firstDiv}>
        <div className={styleAplicacao.aplication}>
          <img
            src={imageLogo}
            alt="imageLogo"
            className={styleAplicacao.imageLogo}
          />
          <div className={styleAplicacao.logo}>
            <h2>APP ForSale</h2>
            <span>A loja nas suas mãos.</span>
          </div>
        </div>

        <div className={styleAplicacao.group}>
          <div className={styleAplicacao.plataforms}>
            <img
              src={imageApple}
              alt="appleIcon"
              className={styleAplicacao.icons}
            />
            <div className={styleAplicacao.AppStory}>
              <span>Descarregar na</span>
              <h3>App Story</h3>
            </div>
          </div>

          <div className={styleAplicacao.plataforms}>
            <img
              src={imagePaly}
              alt="GooglePalyIcon"
              className={styleAplicacao.icons}
            />
            <div className={styleAplicacao.AppStory}>
              <span>Disponível no</span>
              <h3>Google Play</h3>
            </div>
          </div>

          <div className={styleAplicacao.plataforms}>
            <img
              src={imageGallery}
              alt="GalleryIcon"
              className={styleAplicacao.icons}
            />
            <div className={styleAplicacao.AppStory}>
              <span>Descarregar na</span>
              <h3>App Story</h3>
            </div>
          </div>
        </div>

        <div>
          <h3 className={styleAplicacao.estamosEm}>Estamos onde tu estás.</h3>
          <div className={styleAplicacao.iconSocial}>
            <BsFacebook />
            <BsTwitter />
            <BsInstagram />
            <BsLinkedin />
            <BsTwitch />
            <BsYoutube />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aplicacao;
