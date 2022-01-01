const { getDb } = require("../db/connect");
const { getAllProducts } = require("../db/queries");
const { getAddedProductDetails } = require("./products");

const getTotalPrice = async (cookie) => {
  const db = await getDb();
  const allProducts = await getAllProducts;
  const filteredProducts = getAddedProductDetails(cookie, allProducts);
  let total = filteredProducts.reduce((total, curEl) => total + curEl.price);
  total = (total * 100).toFixed();
  return Number(total);
};

module.exports = { getTotalPrice };
