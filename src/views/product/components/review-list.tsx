import React from "react"
import { Review } from "@/lib/types"
import { ReviewCard } from "./review-card"
import { Separator } from "@/components/ui/separator"

interface ReviewListProps {
  reviews: Review[]
}

export function ReviewList({ reviews }: ReviewListProps) {
  if (reviews.length === 0) {
    return (
      <div className="my-6 text-center">
        <p className="text-gray-600">
          No reviews yet. Be the first to review this product!
        </p>
      </div>
    )
  }

  return (
    <div className="my-6">
      <h3 className="mb-4 text-lg font-semibold">Customer Reviews</h3>
      <Separator className="mb-4" />
      {reviews.map((review) => (
        <ReviewCard key={review.id} review={review} />
      ))}
    </div>
  )
}
