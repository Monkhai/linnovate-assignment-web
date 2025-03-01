import React from "react"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Product } from "@/lib/types"
import { formatPrice } from "@/lib/utils"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/product/${product.id}`}>
      <Card className="h-full overflow-hidden transition-all hover:shadow-md">
        <div className="aspect-square w-full overflow-hidden bg-gray-100 p-4">
          {/* Placeholder for product image - would use next/image in a real app */}
          <div className="flex h-full items-center justify-center bg-gray-200 text-gray-500">
            {product.name.charAt(0)}
          </div>
        </div>
        <CardContent className="p-4">
          <h3 className="font-medium">{product.name}</h3>
          <p className="mt-2 text-lg font-bold">{formatPrice(product.price)}</p>
        </CardContent>
        <CardFooter className="p-4 pt-0 text-xs text-gray-500">
          Added {new Date(product.created_at).toLocaleDateString()}
        </CardFooter>
      </Card>
    </Link>
  )
}
