import "./Aplicacao.css";
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
      <div className="firstDiv">
        <div className="aplication">
          <img src={imageLogo} alt="" className="imageLogo" />
          <div className="logo">
            <h2>APP ForSale</h2>
            <span>A loja nas suas mãos.</span>
          </div>
        </div>

        <div className="group">
          <div className="plataforms">
            <img src={imageApple} alt="" className="icons" />
            <div className="AppStory">
              <span>Descarregar na</span>
              <h3>App Story</h3>
            </div>
          </div>

          <div className="plataforms">
            <img src={imagePaly} alt="" className="icons" />
            <div className="AppStory">
              <span>Disponível no</span>
              <h3>Google Play</h3>
            </div>
          </div>

          <div className="plataforms">
            <img src={imageGallery} alt="" className="icons" />
            <div className="AppStory">
              <span>Descarregar na</span>
              <h3>App Story</h3>
            </div>
          </div>
        </div>

        <div>
          <h3 className="estamosEm">Estamos onde tu estás.</h3>
          <div className="iconSocial">
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
