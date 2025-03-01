import { Product, Review } from "@/lib/types"
import apiClient from "./axios-client"

// Products API
export const productsApi = {
  // Get all products
  getAll: async (): Promise<Product[]> => {
    const response = await apiClient.get("/products")
    return response.data
  },

  // Get a single product by ID
  getById: async (id: number): Promise<Product> => {
    const response = await apiClient.get(`/products/${id}`)
    return response.data
  },

  // Get a product with its reviews
  getWithReviews: async (
    id: number,
  ): Promise<Product & { reviews: Review[] }> => {
    const response = await apiClient.get(`/products/${id}?_embed=reviews`)
    return response.data
  },
}

// Reviews API
export const reviewsApi = {
  // Get reviews for a product
  getByProduct: async (productId: number): Promise<Review[]> => {
    const response = await apiClient.get(`/reviews?productId=${productId}`)
    return response.data
  },

  // Add a new review
  create: async (review: Omit<Review, "id">): Promise<Review> => {
    const response = await apiClient.post("/reviews", review)
    return response.data
  },

  // Update a review
  update: async (
    id: number,
    review: Partial<Omit<Review, "id">>,
  ): Promise<Review> => {
    const response = await apiClient.patch(`/reviews/${id}`, review)
    return response.data
  },

  // Delete a review
  delete: async (id: number): Promise<void> => {
    await apiClient.delete(`/reviews/${id}`)
  },
}
