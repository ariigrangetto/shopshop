import { useQuery } from "@tanstack/react-query";
import type { Product } from "../types.d";
import { productService } from "../services/product";

export default function useService() {
  const { isPending, isError, data } = useQuery<{ products: Product[] }>({
    queryKey: ["products"],
    queryFn: productService,
  });

  return { isPending, isError, products: data?.products ?? [] };
}
