const fetchProducts = async (quere: String) => {
  const response = await fetch(
    `https://api.mercadolibre.com/sites/MLB/search?q=${quere}`
  );

  const data = await response.json();
  return data.results;
};

export default fetchProducts;
