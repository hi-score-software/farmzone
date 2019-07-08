function formatPrice(val) {
  if (val >= 1000000) {
    return parseFloat(val / 1000000).toFixed(2) + "M";
  }
  if (val >= 1000) {
    return parseFloat(val / 1000).toFixed(0) + "K";
  }
  return "" + parseFloat(val);
}


export default formatPrice;