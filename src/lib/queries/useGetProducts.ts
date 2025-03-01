import { useQuery } from "@tanstack/react-query"
import { queryKeyStore } from "./queryKeyStore"
import { productsApi } from "../api"

export default function useGetProducts() {
  return useQuery({
    queryKey: queryKeyStore.products(),
    queryFn: () => productsApi.getAll(),
  })
}
