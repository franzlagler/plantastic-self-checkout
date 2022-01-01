export const getTotalPrice = (productDetails) => {
  return productDetails.reduce((total, curVal) => {
    return total + curVal.price;
  }, 0);
};
