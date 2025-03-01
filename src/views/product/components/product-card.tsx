import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Product } from "@/lib/types"
import { formatPrice } from "@/lib/utils"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/product/${product.id}`} className="group block">
      <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg">
        <div className="relative aspect-square w-full overflow-hidden bg-gray-100">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <CardContent className="p-4">
          <h3 className="truncate font-medium">{product.name}</h3>
          <p className="text-primary mt-2 text-lg font-bold">
            {formatPrice(product.price)}
          </p>
        </CardContent>
        <CardFooter className="text-muted-foreground p-4 pt-0 text-xs">
          Added {new Date(product.created_at).toLocaleDateString()}
        </CardFooter>
      </Card>
    </Link>
  )
}
