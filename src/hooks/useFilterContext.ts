import { useContext } from "react";
import { FilterContext } from "../context/FilterContext";

export default function useFilterContext() {
  const context = useContext(FilterContext);

  if (!context) {
    throw new Error("useFilterContext must be used within FilterProvider");
  }

  return context;
}
