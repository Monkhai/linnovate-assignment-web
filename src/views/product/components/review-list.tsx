import React from "react"
import { Review } from "@/lib/types"
import { ReviewCard } from "./review-card"
import { Separator } from "@/components/ui/separator"
import { MessageSquare } from "lucide-react"

interface ReviewListProps {
  reviews: Review[]
}

export function ReviewList({ reviews }: ReviewListProps) {
  if (reviews.length === 0) {
    return (
      <div className="bg-muted/30 my-8 rounded-lg p-8 text-center">
        <div className="mb-4 flex justify-center">
          <MessageSquare size={32} className="text-muted-foreground" />
        </div>
        <p className="text-muted-foreground">
          No reviews yet. Be the first to review this product!
        </p>
      </div>
    )
  }

  const avgRating =
    reviews.reduce((acc, review) => acc + review.stars, 0) / reviews.length

  return (
    <div className="my-8">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-xl font-semibold">Customer Reviews</h3>
        <div className="text-muted-foreground text-sm">
          <span className="font-medium">{reviews.length}</span>
          {reviews.length === 1 ? " review" : " reviews"}
          {avgRating > 0 && (
            <span>
              {" "}
              • Average rating:{" "}
              <span className="font-medium">{avgRating.toFixed(1)}</span>
            </span>
          )}
        </div>
      </div>
      <Separator className="mb-6" />
      {reviews.map((review) => (
        <ReviewCard key={review.id} review={review} />
      ))}
    </div>
  )
}
