import { products } from "../data";

export const findProductById = (id) => {
  return products.find((item) => item.id === Number(id));
};
