"use client"
import useGetProduct from "@/lib/queries/useGetProduct"
import useGetProductReviews from "@/lib/queries/useGetProductReviews"
import { notFound, useParams } from "next/navigation"
import { ProductDetail } from "./components/product-detail"

export function ProductView() {
  const { id } = useParams<{ id: string }>()
  const { data: product, isLoading: productLoading } = useGetProduct(id)
  const { data: reviews, isLoading } = useGetProductReviews(id)

  if (productLoading) {
    return <div>Loading...</div>
  }

  if (!product) {
    notFound()
  }

  return (
    <ProductDetail
      product={product}
      reviews={reviews}
      reviewsLoading={isLoading}
    />
  )
}
