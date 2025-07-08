import { useQuery } from "@tanstack/react-query";
import { productService } from "../services/products";
import type { Product } from "../types";

export default function useServices() {
  const { isPending, isError, data } = useQuery<{ products: Product[] }>({
    queryKey: ["products"],
    queryFn: productService,
  });

  return { isPending, isError, products: data ?? [] };
}
