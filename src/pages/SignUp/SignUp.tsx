import styleSignUp from "./SignUp.module.css";
import image1 from "../../image/login_icon.png";

function Signup() {
  return (
    <div id={styleSignUp.section}>
      <h1>Sign Up</h1>
      <div id={styleSignUp.myDiv}>
        <div>
          <img src={image1} alt="image de login" id={styleSignUp.imgSign} />
        </div>
        <div>
          <span id={styleSignUp.mySpan}>
            É gratuito e demora apenas um minuto!
          </span>
        </div>
        <form id={styleSignUp.formSign}>
          <span id={styleSignUp.spanSign}>Primeiro nome</span>
          <input
            type="text"
            name="Firrst"
            id={styleSignUp.inputSing}
            autoFocus
            required
          />
          <span id={styleSignUp.spanSign}>Último nome</span>
          <input
            type="text"
            name="Last"
            id={styleSignUp.inputSing}
            autoFocus
            required
          />
          <span id={styleSignUp.spanSign}>Email</span>
          <input
            type="email"
            name="email"
            id={styleSignUp.inputSing}
            autoFocus
            required
          />
          <span id={styleSignUp.spanSign}>Password</span>
          <input
            type="password"
            name="senha"
            id={styleSignUp.inputSing}
            required
          />
          <input
            type="submit"
            value="Submeter"
            id={styleSignUp.inputSubmitSign}
          />
        </form>
      </div>
    </div>
  );
}
export default Signup;
