import React from "react"
import { ProductView } from "@/views/product/ProductView"

interface ProductDetailPageProps {
  params: {
    id: string
  }
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const productId = parseInt(params.id, 10)
  return <ProductView productId={productId} />
}
