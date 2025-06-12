import { createContext, useState } from "react";
import React from "react";

export const FilterContext = createContext();

export default function FilterProvider({children}){
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

  return(
    <FilterContext.Provider value={{filteredProducts, filter, setFilter}}>
      {children}
    </FilterContext.Provider>
  )
}