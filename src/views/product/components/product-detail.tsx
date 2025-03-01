import React from "react"
import Image from "next/image"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { ProductWithReviews } from "@/lib/types"
import { formatPrice } from "@/lib/utils"
import Link from "next/link"
import { ReviewList } from "./review-list"
import { ReviewForm } from "./review-form"
import { ArrowLeft, ShoppingCart } from "lucide-react"

interface ProductDetailProps {
  product: ProductWithReviews
}

export function ProductDetail({ product }: ProductDetailProps) {
  return (
    <div className="py-8">
      <Link
        href="/"
        className="text-muted-foreground hover:text-foreground mb-8 inline-flex items-center gap-2 text-sm font-medium transition-colors"
      >
        <ArrowLeft size={16} />
        Back to Products
      </Link>

      <div className="mt-6 grid grid-cols-1 gap-12 md:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-100">
          <Image
            src={product.image}
            alt={product.name}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-primary mt-4 text-2xl font-bold">
            {formatPrice(product.price)}
          </p>

          <p className="text-muted-foreground mt-4">{product.description}</p>

          <div className="text-muted-foreground mt-4 text-sm">
            Added on {new Date(product.created_at).toLocaleDateString()}
          </div>

          <Separator className="my-6" />

          <Button size="lg" className="w-full">
            <ShoppingCart size={18} className="mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>

      <Separator className="my-12" />

      <div className="mt-8">
        <ReviewList reviews={product.reviews} />
        <ReviewForm productId={product.id} />
      </div>
    </div>
  )
}
