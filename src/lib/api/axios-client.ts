import axios from "axios"

// Default base URLs for different environments
const BASE_URLS = {
  development: "http://localhost:8080/api", // Direct to backend on port 8080
  production: `${process.env.NEXT_PUBLIC_API_URL || "https://api.productcatalog.com"}/api`,
  test: "http://localhost:8080/api",
}

const environment = process.env.NODE_ENV || "development"

// Create axios instance with environment-specific config
const apiClient = axios.create({
  baseURL: BASE_URLS[environment as keyof typeof BASE_URLS],
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000, // 10 seconds
  withCredentials: true,
})

export default apiClient
