import React from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Review } from "@/lib/types"
import { StarRating } from "@/components/shared/star-rating"

interface ReviewCardProps {
  review: Review
}

export function ReviewCard({ review }: ReviewCardProps) {
  return (
    <Card className="mb-4">
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <div>
            <h4 className="font-semibold">{review.reviewTitle}</h4>
            <StarRating rating={review.stars} className="mt-1" />
          </div>
          <div className="text-xs text-gray-500">Review #{review.id}</div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700">{review.reviewContent}</p>
      </CardContent>
    </Card>
  )
}
