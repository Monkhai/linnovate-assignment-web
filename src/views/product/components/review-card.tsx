import React from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Review } from "@/lib/types"
import { StarRating } from "@/components/shared/star-rating"
import { User } from "lucide-react"

interface ReviewCardProps {
  review: Review
}

export function ReviewCard({ review }: ReviewCardProps) {
  // Generate a random color for the user avatar based on the review ID
  const colors = [
    "bg-blue-500",
    "bg-green-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-indigo-500",
    "bg-orange-500",
  ]
  const colorIndex = review.id % colors.length
  const avatarColor = colors[colorIndex]

  return (
    <Card className="overflow-hidden p-0">
      <CardContent className="p-0">
        <CardHeader className="bg-muted/50 py-4">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full text-white ${avatarColor}`}
              >
                <User size={16} />
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="leading-none font-semibold">
                  {review.reviewTitle}
                </h4>
              </div>
            </div>
            <StarRating
              rating={review.stars}
              className="mt-1.5"
              size={14}
              showValue={false}
            />
          </div>
        </CardHeader>
        <div className="p-4">
          <p className="text-sm leading-relaxed">{review.reviewContent}</p>
        </div>
      </CardContent>
    </Card>
  )
}
