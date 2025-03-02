import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Separator } from "@/components/ui/separator"
import { Product, Review } from "@/lib/types"
import { formatPrice } from "@/lib/utils"
import { ArrowLeft, Info, AlertCircle } from "lucide-react"
import Link from "next/link"
import { PopupImage } from "./PopupImage"
import { ReviewForm } from "./review-form"
import { ReviewList } from "./review-list"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { useState, useEffect } from "react"

interface ProductDetailProps {
  product: Product
  reviews: Review[] | undefined
  reviewsLoading: boolean
}

export function ProductDetail({
  product,
  reviews,
  reviewsLoading,
}: ProductDetailProps) {
  const [error, setError] = useState<string | null>(null)
  const [isImageError, setIsImageError] = useState(false)

  useEffect(() => {
    // Simulating possible error checking for product data
    if (!product) {
      setError("Product information could not be loaded")
    } else {
      setError(null)
    }
  }, [product])

  // If there's a critical error, show an error message
  if (error) {
    return (
      <div className="py-8">
        <Link
          href="/"
          className="text-muted-foreground hover:text-foreground mb-8 inline-flex items-center gap-2 text-sm font-medium transition-colors"
        >
          <ArrowLeft size={16} />
          Back to Products
        </Link>

        <Alert variant="destructive" className="my-8">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      </div>
    )
  }

  return (
    <div className="py-8">
      <Link
        href="/"
        className="text-muted-foreground hover:text-foreground mb-8 inline-flex items-center gap-2 text-sm font-medium transition-colors"
      >
        <ArrowLeft size={16} />
        Back to Products
      </Link>

      {isImageError && (
        <Alert variant="destructive" className="mb-6">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Image Error</AlertTitle>
          <AlertDescription>
            The product image could not be loaded.
          </AlertDescription>
        </Alert>
      )}

      <div className="mt-6 grid grid-cols-1 gap-12 md:grid-cols-2">
        <PopupImage
          src={product.image}
          alt={product.name}
          onError={() => setIsImageError(true)}
        />

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

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="specifications">
              <AccordionTrigger className="text-md font-medium">
                <div className="flex items-center">
                  <Info size={18} className="mr-2" />
                  Product Specifications
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="text-muted-foreground space-y-2 pt-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Material</span>
                    <span>Premium Quality</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Dimensions</span>
                    <span>Varies by model</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Warranty</span>
                    <span>1 Year</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Origin</span>
                    <span>Designed in USA</span>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      <Separator className="my-12" />

      <div className="mt-8">
        {reviewsLoading ? (
          <div className="py-8 text-center">
            <p className="text-muted-foreground">Loading reviews...</p>
          </div>
        ) : reviews && reviews.length > 0 ? (
          <ReviewList reviews={reviews} reviewsLoading={reviewsLoading} />
        ) : (
          <Alert className="mb-6">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>No Reviews</AlertTitle>
            <AlertDescription>
              Be the first to review this product!
            </AlertDescription>
          </Alert>
        )}
        <ReviewForm productId={product.id} />
      </div>
    </div>
  )
}
