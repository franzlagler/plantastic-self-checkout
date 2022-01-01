const getAddedProductDetails = (cookie, allProducts) => {
  const filteredProducts = [];
  cookie.forEach((item) => {
    allProducts.forEach((product) => {
      if (item.id === String(product._id)) {
        filteredProducts.push({
          ...product,
          name: item.name,
          barcode: item.barcode,
        });
      }
    });
  });
  return filteredProducts;
};

module.exports = { getAddedProductDetails };
