export const queryKeyStore = {
  products: () => ["products"],
  productReviews: (id: string) => ["product", id, "reviews"],
}
