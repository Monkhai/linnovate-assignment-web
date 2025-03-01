import { ClientReview, Product, Review } from "@/lib/types"
import apiClient from "./axios-client"
import { queryKeyStore } from "../queries/queryKeyStore"
import { queryClient } from "@/components/providers/QueryProvider"
import { auth } from "@/firebase"

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

  post: async (review: ClientReview): Promise<Review> => {
    const curUser = auth.currentUser
    if (!curUser) {
      throw Error("User not found")
    }
    const tokenId = await curUser.getIdToken()
    if (!tokenId) {
      throw Error("Token not found")
    }
    const response = await apiClient.post("/reviews", review, {
      headers: {
        Authorization: `${tokenId}`,
      },
    })
    return response.data
  },
}
