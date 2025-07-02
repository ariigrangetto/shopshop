import { createContext, useState } from "react";
import React from "react";
import type { Product } from "../types.d";

type FilterState = {
  initialPrice: number;
  category: "all" | "beauty" | "fragrances" | "furniture" | "groceries";
};

interface FilterProviderProp {
  children: React.ReactNode;
}

type FilterContextType = {
  filter: FilterState;
  setFilter: React.Dispatch<React.SetStateAction<FilterState>>;
  filterProducts: (products: Product[]) => Product[];
};

export const FilterContext = createContext<FilterContextType | undefined>(
  undefined
);

export default function FilterProvider({ children }: FilterProviderProp) {
  const [filter, setFilter] = useState<FilterState>({
    initialPrice: 1,
    category: "all",
  });

  const filterProducts = (products: Product[]): Product[] => {
    return products.filter((product) => {
      const matchPrices = product.price >= filter.initialPrice;
      const matchCategory =
        product.category === filter.category || filter.category === "all";

      return matchPrices && matchCategory;
    });
  };

  return (
    <FilterContext.Provider value={{ filterProducts, filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  );
}
