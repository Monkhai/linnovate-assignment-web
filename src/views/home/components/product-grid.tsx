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

  if (!products)
    return (
      <div className="py-12">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight">{title}</h1>
          {description && (
            <p className="text-muted-foreground mt-4 text-lg">{description}</p>
          )}
        </div>
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-6 gap-y-10 px-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
          {[...Array(8)].map((_, index) => (
            <div key={index} className="group relative animate-pulse">
              <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200"></div>
              <div className="mt-4 space-y-2">
                <div className="h-4 w-3/4 rounded bg-gray-200"></div>
                <div className="h-4 w-1/2 rounded bg-gray-200"></div>
                <div className="h-4 w-1/4 rounded bg-gray-200"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )

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
