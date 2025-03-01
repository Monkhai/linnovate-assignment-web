import { useMutation } from "@tanstack/react-query"
import { reviewsApi } from "../api/api-utils"
import { queryClient } from "@/components/providers/QueryProvider"
import { queryKeyStore } from "./queryKeyStore"

export default function usePostReview() {
  return useMutation({
    mutationFn: reviewsApi.post,
    onSuccess: (_, review) => {
      queryClient.invalidateQueries({
        queryKey: queryKeyStore.productReviews(String(review.productId)),
      })
    },
  })
}
