import React from "react"
import { Product } from "@/lib/types"
import { ProductList } from "@/views/product/components/product-list"

interface ProductGridProps {
  products: Product[]
  title?: string
  description?: string
}

export function ProductGrid({
  products,
  title = "Product Catalog",
  description = "Browse our selection of high-quality products. Click on any product to view details and reviews.",
}: ProductGridProps) {
  return (
    <div className="py-8">
      <h1 className="mb-8 text-3xl font-bold">{title}</h1>
      {description && <p className="mb-8 text-gray-600">{description}</p>}
      <ProductList products={products} />
    </div>
  )
}
