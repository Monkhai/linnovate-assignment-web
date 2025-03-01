import { Product, Review } from "@/lib/types"
import apiClient from "./axios-client"
import { queryKeyStore } from "../queries/queryKeyStore"
import { queryClient } from "@/components/providers/QueryProvider"

// Products API
export const productsApi = {
  getAll: async (): Promise<Product[]> => {
    const response = await apiClient.get("/products")
    return response.data
  },
  getProduct: async (productId: string): Promise<Product | undefined> => {
    const key = queryKeyStore.products()
    let products = queryClient.getQueryData<Product[] | undefined>(key)
    if (!products) {
      products = await productsApi.getAll()
    }
    const product = products.find((p) => p.id === Number(productId))
    return product
  },
}

// Reviews API
export const reviewsApi = {
  getByProduct: async (productId: string): Promise<Review[]> => {
    const response = await apiClient.get<Review[]>(
      `/products/${productId}/reviews`,
    )
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
