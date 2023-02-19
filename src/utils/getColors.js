import { products } from "../data";

export const getColors = () => {
  let allColors = products.map((product) => product.color[0]);
  let colors = [...new Set(allColors)];
  return colors;
};
