export const camelCategory = (category) => {
  let arr = category.split("");
  arr[0] = arr[0].toUpperCase();
  return arr.join("");
};
