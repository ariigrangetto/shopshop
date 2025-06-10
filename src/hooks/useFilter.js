import { useState } from "react";

export default function useFilter() {
  const [filter, setFilter] = useState({
    initialPrice: 1,
    category: "all",
  });

  const filteredProducts = (products) => {
    return products.filter((product) => {
      const matchPrices = product.price >= filter.initialPrice;
      const matchesCategory =
        filter.category === "all" || product.category === filter.category;

      return matchPrices && matchesCategory;
    });
  };

  return { filteredProducts, filter, setFilter };
}
