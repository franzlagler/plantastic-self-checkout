const { ObjectID } = require("bson");
const { getDb } = require("./connect");

const getAllProducts = async () => {
  const db = await getDb();
  return db.collection("products").find().toArray();
};

const getOneProduct = async (id) => {
  console.log(id);
  const db = await getDb();
  return db.collection("products").findOne({ _id: ObjectID(id) });
};
const getProductIdFromBarcode = async (barcode) => {
  const db = await getDb();

  return await db.collection("products_barcodes").findOne({ barcode: barcode });
};

module.exports = { getAllProducts, getOneProduct, getProductIdFromBarcode };
