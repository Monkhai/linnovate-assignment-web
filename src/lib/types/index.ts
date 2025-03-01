export interface Product {
  id: number
  name: string
  price: number
  created_at: string
  image: string
  description: string
}

export interface Review {
  id: number
  productId: number
  reviewTitle: string
  reviewContent: string
  stars: number
}

export type ProductWithReviews = Product & {
  reviews: Review[]
}
