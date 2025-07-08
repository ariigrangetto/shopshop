export const productService = () => {
  return fetch(`https://dummyjson.com/products`)
    .then((res) => res.json())
    .then((res) => res.products);
};
