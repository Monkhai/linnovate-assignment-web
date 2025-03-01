import React from "react"
import { ProductGrid } from "./components/product-grid"
import { mockProducts } from "@/lib/data/mockData"

export function HomeView() {
  const products = mockProducts
  return <ProductGrid products={products} />
}
