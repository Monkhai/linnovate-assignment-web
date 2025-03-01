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
    <div className="py-12">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <h1 className="text-4xl font-bold tracking-tight">{title}</h1>
        {description && (
          <p className="text-muted-foreground mt-4 text-lg">{description}</p>
        )}
      </div>
      <ProductList products={products} />
    </div>
  )
}
