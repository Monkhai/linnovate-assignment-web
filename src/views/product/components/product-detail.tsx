import React from "react"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { ProductWithReviews } from "@/lib/types"
import { formatPrice } from "@/lib/utils"
import Link from "next/link"
import { ReviewList } from "./review-list"
import { ReviewForm } from "./review-form"

interface ProductDetailProps {
  product: ProductWithReviews
}

export function ProductDetail({ product }: ProductDetailProps) {
  return (
    <div className="py-8">
      <Link
        href="/"
        className="mb-8 inline-flex items-center text-sm font-medium text-gray-600 hover:text-gray-900"
      >
        ← Back to Products
      </Link>

      <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="aspect-square overflow-hidden rounded-lg bg-gray-100 p-6">
          {/* Placeholder for product image */}
          <div className="flex h-full items-center justify-center bg-gray-200 text-3xl text-gray-500">
            {product.name.charAt(0)}
          </div>
        </div>

        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="mt-4 text-2xl font-bold">
            {formatPrice(product.price)}
          </p>

          <div className="mt-4 text-sm text-gray-500">
            Added on {new Date(product.created_at).toLocaleDateString()}
          </div>

          <Separator className="my-6" />

          <Button className="w-full">Add to Cart</Button>
        </div>
      </div>

      <Separator className="my-8" />

      <div className="mt-8">
        <ReviewList reviews={product.reviews} />
        <ReviewForm productId={product.id} />
      </div>
    </div>
  )
}
