import style from "../../../css/LoginPage.module.css";
import image1 from "../../../image/login_icon.png";

function LoginPage() {
  return (
    <div id={style.section}>
      <label htmlFor="nome">ForSale</label>
      <div id={style.myDiv}>
        <div>
          <img src={image1} alt="image de login" />
        </div>
        <form>
          <input
            type="text"
            name="nome"
            placeholder="Username"
            id={style.inputtext}
            autoFocus
            required
          />
          <input
            type="password"
            name="senha"
            placeholder="Password"
            id={style.inputPassword}
            required
          />
          <input type="submit" value="Entrar" id={style.inputSubmit} />
        </form>

        <p>
          Ainda não tem conta? <a href="">Criar conta</a>{" "}
        </p>
      </div>
    </div>
  );
}
export default LoginPage;
