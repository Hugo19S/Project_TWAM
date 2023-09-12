import "./css/App.css";
import Cabecalho from "./components/Cabeçalho/Cabecalho";
import Products from "./components/Products/Products";
import RodaPe from "./components/rodapé/RodaPe";

function App() {
  return (
    <div>
      <Cabecalho />
      <Products />
      <RodaPe />
    </div>
  );
}

export default App;
