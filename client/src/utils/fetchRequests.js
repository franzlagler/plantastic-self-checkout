export const fetchProductDetails = async (cookie, setterFunction) => {
  const res = await fetch("http://localhost:4000/getProductDetails", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ cookie }),
  });
  const { filteredProducts } = await res.json();
  setterFunction(filteredProducts);
};
