const { getAllProducts } = require("../db/queries");
const { getAddedProductDetails } = require("./products");

const getTotalPrice = async (cookie) => {
  const allProducts = await getAllProducts();
  const filteredProducts = getAddedProductDetails(cookie, allProducts);
  let total = filteredProducts.reduce((total, curEl) => total + curEl.price, 0);
  total = (total * 100).toFixed();
  return Number(total);
};

module.exports = { getTotalPrice };
