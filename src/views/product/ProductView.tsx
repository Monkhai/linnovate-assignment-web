import React from "react"
import { ProductDetail } from "./components/product-detail"
import { getProductWithReviews } from "@/lib/data/mockData"
import { notFound } from "next/navigation"

interface ProductViewProps {
  productId: number
}

export function ProductView({ productId }: ProductViewProps) {
  const product = getProductWithReviews(productId)

  if (!product) {
    notFound()
  }

  return <ProductDetail product={product} />
}
