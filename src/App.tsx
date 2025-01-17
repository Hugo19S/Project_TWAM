import "./css/App.css";
import Cabecalho from "./components/Cabeçalho/Cabecalho";
import Products from "./components/body/Products/Products";
import RodaPe from "./components/rodapé/RodaPe";

function App() {
  return (
    <div className="app">
      <Cabecalho />
      <Products />
      <RodaPe />
    </div>
  );
}

export default App;
