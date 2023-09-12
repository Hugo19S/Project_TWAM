import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import "./SearchBar.css";

const SearchBar = () => {
  const [valorDaBusca, setValorDaBusca] = useState("");

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Buscar..."
        className="inputSearch"
        value={valorDaBusca}
        onChange={(event) => setValorDaBusca(event.target.value)}
      />
      <button id="buttonSearch">
        <BsSearch />
      </button>
    </div>
  );
};

export default SearchBar;
