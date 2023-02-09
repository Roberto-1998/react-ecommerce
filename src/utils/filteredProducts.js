import { products } from "../data";

export const filteredProducts = (filters, cat) => {
  let color = filters?.color;
  let size = filters?.size;
  let filteredProducts = [];

  if (color && size) {
    console.log("Color y Size");
    filteredProducts = products.filter(
      (product) =>
        product.cat.includes(cat) &&
        product.color.includes(color) &&
        product.size.includes(size)
    );
  } else if ((color === undefined || "") && size) {
    console.log("Size");

    filteredProducts = products.filter(
      (product) => product.cat.includes(cat) && product.size.includes(size)
    );
  } else if ((size === undefined || "") && color) {
    console.log("Color");

    filteredProducts = products.filter(
      (product) => product.cat.includes(cat) && product.color.includes(color)
    );
  } else if ((size === undefined || "") && (color === undefined || "")) {
    console.log("Solo CAT");

    filteredProducts = products.filter((product) => product.cat.includes(cat));
  }

  console.log(filteredProducts);

  return filteredProducts;
};
