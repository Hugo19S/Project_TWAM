const formatCurrency = (value: number) => {
  const valueToString = value.toLocaleString("pt-pt", {
    style: "currency",
    currency: "EUR",
  });

  return valueToString
};

export default formatCurrency;
