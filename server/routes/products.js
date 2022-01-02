const express = require("express");
const {
  getProductIdFromBarcode,
  getOneProduct,
  getAllProducts,
} = require("../db/queries");
const { getAddedProductDetails } = require("../utils/products");
const productRoutes = express.Router();

productRoutes.route("/findProduct").post(async (req, res) => {
  console.log(req.body.barcode);
  const productBarcodeEntry = await getProductIdFromBarcode(req.body.barcode);
  if (productBarcodeEntry) {
    const product = await getOneProduct(productBarcodeEntry.productId);
    product.barcode = req.body.barcode;
    res.status(200).json({ product });
    return;
  } else {
    res.status(404).json({ error: "Not found." });
  }
});

productRoutes.route("/getProductDetails").post(async (req, res) => {
  const basketCookie = req.body.cookie;
  const allProducts = await getAllProducts();

  const filteredProducts = getAddedProductDetails(basketCookie, allProducts);

  res.json({ filteredProducts });
});

module.exports = productRoutes;
