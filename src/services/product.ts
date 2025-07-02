export const productService = async () => {
  return await fetch(`https://dummyjson.com/products`)
    .then(async (res) => {
      if (!res.ok) throw new Error("Error en la peticion");

      return await res.json();
    })
    .then((res) => {
      return {
        products: res.products,
      };
    });
};
