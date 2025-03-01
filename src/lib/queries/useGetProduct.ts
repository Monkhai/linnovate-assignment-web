import { useQuery } from "@tanstack/react-query"
import { productsApi } from "../api"
import { queryKeyStore } from "./queryKeyStore"

export default function useGetProduct(productId: string) {
  return useQuery({
    queryKey: queryKeyStore.product(productId),
    queryFn: () => productsApi.getProduct(productId),
  })
}
