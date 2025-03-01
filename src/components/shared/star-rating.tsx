import React from "react"
import { Star, StarHalf } from "lucide-react"
import { cn } from "@/lib/utils"

interface StarRatingProps {
  rating: number
  maxStars?: number
  size?: number
  className?: string
}

export function StarRating({
  rating,
  maxStars = 5,
  size = 16,
  className,
}: StarRatingProps) {
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 >= 0.5

  return (
    <div className={cn("flex items-center", className)}>
      {Array.from({ length: maxStars }).map((_, i) => {
        if (i < fullStars) {
          return (
            <Star
              key={i}
              size={size}
              className="fill-yellow-400 text-yellow-400"
            />
          )
        } else if (i === fullStars && hasHalfStar) {
          return (
            <StarHalf
              key={i}
              size={size}
              className="fill-yellow-400 text-yellow-400"
            />
          )
        } else {
          return <Star key={i} size={size} className="text-gray-300" />
        }
      })}
      <span className="ml-1 text-sm text-gray-600">{rating.toFixed(1)}</span>
    </div>
  )
}
