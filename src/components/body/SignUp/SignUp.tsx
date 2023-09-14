import style from "../../../css/SignUp.module.css";
import image1 from "../../../image/login_icon.png";

function Signup() {
  return (
    <div id={style.section}>
      <h1>Sign Up</h1>
      <div id={style.myDiv}>
        <div>
          <img src={image1} alt="image de login" id={style.imgSign} />
        </div>
        <div>
          <span id={style.mySpan}>É gratuito e demora apenas um minuto!</span>
        </div>
        <form id={style.formSign}>
          <span id={style.spanSign}>Primeiro nome</span>
          <input
            type="text"
            name="Firrst"
            id={style.inputSing}
            autoFocus
            required
          />
          <span id={style.spanSign}>Último nome</span>
          <input
            type="text"
            name="Last"
            id={style.inputSing}
            autoFocus
            required
          />
          <span id={style.spanSign}>Email</span>
          <input
            type="email"
            name="email"
            id={style.inputSing}
            autoFocus
            required
          />
          <span id={style.spanSign}>Password</span>
          <input type="password" name="senha" id={style.inputSing} required />
          <input type="submit" value="Submeter" id={style.inputSubmitSign} />
        </form>
      </div>
    </div>
  );
}
export default Signup;
