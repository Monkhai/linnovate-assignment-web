export const queryKeyStore = {
  products: () => ["products"],
  product: (id: string) => ["products", id],
  productReviews: (id: string) => ["product", id, "reviews"],
}
