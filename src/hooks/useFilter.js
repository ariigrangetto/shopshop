import { useContext } from "react";
import { FilterContext } from "../Context/FilterContext";

export default function useFilter() {
  const context = useContext(FilterContext);

  if (!context) "useFilter must be in FilterContext";

  return context;
}
