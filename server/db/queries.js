const ObjectId = require("mongodb");
const { getDb } = require("./connect");

const getAllProducts = async () => {
  const db = await getDb();
  return db.collection("products").find().toArray();
};

const getOneProduct = async (id) => {
  const db = await getDb();
  return db.collection("products").findOne({ _id: ObjectId(id) });
};
const getProductIdFromBarcode = async (barcode) => {
  const db = await getDb();

  db.collection("product_barcodes").findOne({ barcode: barcode });
};

module.exports = { getAllProducts, getOneProduct, getProductIdFromBarcode };
