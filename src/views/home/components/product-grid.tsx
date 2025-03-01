"use client"
import useGetProducts from "@/lib/queries/useGetProducts"
import { ProductList } from "@/views/product/components/product-list"

interface ProductGridProps {
  title?: string
  description?: string
}

export function ProductGrid({
  title = "Product Catalog",
  description = "Browse our selection of high-quality products. Click on any product to view details and reviews.",
}: ProductGridProps) {
  const { data: products } = useGetProducts()
  console.log(products)
  if (!products) return <div>Loading...</div>
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
