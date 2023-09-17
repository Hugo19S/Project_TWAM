import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import styleSearchBar from "./SearchBar.module.css";
import fetchProducts from "../../../api/fetchProducts";

const SearchBar = () => {
  const [valorDaBusca, setValorDaBusca] = useState("");

  const handleSearch = async (event: any) => {
    event.preventDefault();

    const products = await fetchProducts(valorDaBusca);
    console.log(products);
    setValorDaBusca("");
  };

  return (
    <form className={styleSearchBar.search_bar} onSubmit={handleSearch}>
      <input
        type="search"
        placeholder="Buscar..."
        className={styleSearchBar.inputSearch}
        value={valorDaBusca}
        onChange={({ target }) => setValorDaBusca(target.value)}
        required
      />
      <button id={styleSearchBar.buttonSearch} aria-label="Pesquisar Produtos">
        <BsSearch />
      </button>
    </form>
  );
};

export default SearchBar;
