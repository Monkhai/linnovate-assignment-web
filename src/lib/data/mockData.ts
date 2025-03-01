import { Product, Review } from "../types"

export const mockProducts: Product[] = [
  {
    id: 1,
    name: "Minimalist Desk Lamp",
    price: 49.99,
    created_at: "2023-09-15T14:30:00Z",
  },
  {
    id: 2,
    name: "Ergonomic Office Chair",
    price: 199.99,
    created_at: "2023-10-05T09:45:00Z",
  },
  {
    id: 3,
    name: "Wireless Keyboard",
    price: 79.99,
    created_at: "2023-08-20T11:15:00Z",
  },
  {
    id: 4,
    name: "Noise-Cancelling Headphones",
    price: 149.99,
    created_at: "2023-11-02T16:20:00Z",
  },
  {
    id: 5,
    name: "Smart Home Speaker",
    price: 129.99,
    created_at: "2023-07-10T13:00:00Z",
  },
  {
    id: 6,
    name: "Ultra-Thin Laptop Stand",
    price: 39.99,
    created_at: "2023-10-18T10:30:00Z",
  },
]

export const mockReviews: Review[] = [
  {
    id: 1,
    productId: 1,
    reviewTitle: "Excellent Design",
    reviewContent:
      "The lamp has a sleek design that fits perfectly with my modern desk setup. The adjustable brightness is a great feature.",
    stars: 5,
  },
  {
    id: 2,
    productId: 1,
    reviewTitle: "Good but could be better",
    reviewContent:
      "I like the minimalist design, but I wish the cord was a bit longer for more flexibility in placement.",
    stars: 4,
  },
  {
    id: 3,
    productId: 2,
    reviewTitle: "Best chair I've owned",
    reviewContent:
      "This chair has significantly improved my posture during long work hours. The lumbar support is outstanding!",
    stars: 5,
  },
  {
    id: 4,
    productId: 3,
    reviewTitle: "Great keyboard",
    reviewContent:
      "The keys have a nice tactile feel and the battery life is impressive. Connects easily to multiple devices.",
    stars: 4.5,
  },
  {
    id: 5,
    productId: 4,
    reviewTitle: "Amazing sound quality",
    reviewContent:
      "These headphones block out all external noise. Perfect for focusing on work or enjoying music.",
    stars: 5,
  },
  {
    id: 6,
    productId: 5,
    reviewTitle: "Decent smart speaker",
    reviewContent:
      "Sound quality is good but the voice recognition could be improved. Sometimes struggles with complex commands.",
    stars: 3.5,
  },
  {
    id: 7,
    productId: 6,
    reviewTitle: "Sturdy and portable",
    reviewContent:
      "This stand is lightweight yet sturdy. Folds easily for travel and provides good airflow for my laptop.",
    stars: 4,
  },
]

// Helper function to get reviews for a specific product
export const getProductReviews = (productId: number): Review[] => {
  return mockReviews.filter((review) => review.productId === productId)
}

// Helper function to get a product with its reviews
export const getProductWithReviews = (productId: number) => {
  const product = mockProducts.find((p) => p.id === productId)
  if (!product) return null

  return {
    ...product,
    reviews: getProductReviews(productId),
  }
}
