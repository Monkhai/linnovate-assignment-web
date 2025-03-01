import { Separator } from "@/components/ui/separator"
import { Review } from "@/lib/types"
import { MessageSquare } from "lucide-react"
import { ReviewCard } from "./review-card"

interface ReviewListProps {
  reviews: Review[] | undefined
  reviewsLoading: boolean
}

export function ReviewList({ reviews, reviewsLoading }: ReviewListProps) {
  if (reviewsLoading) {
    return (
      <div className="my-8">
        <div className="mb-6 flex items-center justify-between">
          <div className="bg-muted h-7 w-48 animate-pulse rounded" />
          <div className="bg-muted h-5 w-32 animate-pulse rounded" />
        </div>
        <div className="bg-border mb-6 h-px" />
        <div className="flex flex-col gap-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="overflow-hidden rounded-lg border">
              <div className="bg-muted/50 p-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="bg-muted h-8 w-8 animate-pulse rounded-full" />
                    <div className="bg-muted h-5 w-32 animate-pulse rounded" />
                  </div>
                  <div className="bg-muted h-4 w-24 animate-pulse rounded" />
                </div>
              </div>
              <div className="p-4">
                <div className="space-y-2">
                  <div className="bg-muted h-4 w-full animate-pulse rounded" />
                  <div className="bg-muted h-4 w-3/4 animate-pulse rounded" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (!reviews || reviews.length === 0) {
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
      <div className="flex flex-col gap-4">
        {reviews.map((review, i) => (
          <ReviewCard key={i} review={review} />
        ))}
      </div>
    </div>
  )
}
