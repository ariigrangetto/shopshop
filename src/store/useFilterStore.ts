import { create } from "zustand";
import { type FilterType, type Product } from "../types.d";

interface FilterStore {
  filter: FilterType;
  filterProducts: (product: Product[]) => Product[];
  updateFilter: (partial: Partial<FilterType>) => void;
}

export const useFilterStore = create<FilterStore>((set, get) => ({
  filter: {
    initialPrice: 1,
    category: "all",
  },
  filterProducts: (products) => {
    const { filter } = get();
    return products.filter((product) => {
      const matchPrice = product.price >= filter.initialPrice;
      const mathCategory =
        filter.category === "all" || filter.category === product.category;
      return matchPrice && mathCategory;
    });
  },
  updateFilter: (partial) => {
    set((state) => ({
      filter: { ...state.filter, ...partial },
    }));
  },
}));
