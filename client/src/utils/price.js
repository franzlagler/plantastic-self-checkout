export const getTotalPrice = (productDetails) => {
  let total = productDetails.reduce((total, curVal) => {
    return total + curVal.price;
  }, 0);
  return total.toFixed(2);
};
