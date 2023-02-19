import { products } from "../data";

export const getSizes = () => {
  let array = [];
  let allSizes = products.map((product) => product.size);

  console.log("All Sizes", allSizes);

  for (let i = 0; i < allSizes.length; i++) {
    array = [...array, ...allSizes[i]];
  }

  let sizes = [...new Set(array)];

  return sizes;
};
