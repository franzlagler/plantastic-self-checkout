export const fetchProductDetails = async (cookie, setterFunction) => {
  const res = await fetch("http://localhost:4000/getProductDetails", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ cookie }),
  });
  const { filteredProducts } = await res.json();
  setterFunction(filteredProducts);
};

export const fetchClientSecret = async (basketCookie, setClientSecret) => {
  const res = await fetch("http://localhost:4000/create-payment-intent", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ basketCookie }),
  });

  const response = await res.json();
  setClientSecret(response.clientSecret);
};
