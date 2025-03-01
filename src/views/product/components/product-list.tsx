import React from "react"
import { Product } from "@/lib/types"
import { ProductCard } from "./product-card"

interface ProductListProps {
  products: Product[]
}

export function ProductList({ products }: ProductListProps) {
  if (products.length === 0) {
    return (
      <div className="my-12 text-center">
        <h2 className="text-xl font-semibold">No products found</h2>
        <p className="mt-2 text-gray-600">
          Try again later or contact support if this issue persists.
        </p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
