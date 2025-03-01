import { useQuery } from "@tanstack/react-query"
import { queryKeyStore } from "./queryKeyStore"
import { reviewsApi } from "../api"

export default function useGetProductReviews(productId: string) {
  return useQuery({
    queryKey: queryKeyStore.productReviews(productId),
    queryFn: () => reviewsApi.getByProduct(productId),
    enabled: !!productId,
  })
}
