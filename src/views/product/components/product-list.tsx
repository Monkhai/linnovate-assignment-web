import React from "react"
import { Product } from "@/lib/types"
import { PackageSearch } from "lucide-react"
import { ProductCard } from "./product-card"

interface ProductListProps {
  products: Product[]
}

export function ProductList({ products }: ProductListProps) {
  if (products.length === 0) {
    return (
      <div className="my-16 text-center">
        <div className="mb-4 flex justify-center">
          <PackageSearch size={48} className="text-muted-foreground" />
        </div>
        <h2 className="text-xl font-semibold">No products found</h2>
        <p className="text-muted-foreground mt-2">
          Try again later or contact support if this issue persists.
        </p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
