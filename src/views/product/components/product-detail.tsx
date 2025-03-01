import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ProductWithReviews } from "@/lib/types"
import { formatPrice } from "@/lib/utils"
import { ArrowLeft, ShoppingCart } from "lucide-react"
import Link from "next/link"
import { PopupImage } from "./PopupImage"
import { ReviewForm } from "./review-form"
import { ReviewList } from "./review-list"

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
        <PopupImage src={product.image} alt={product.name} />

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
