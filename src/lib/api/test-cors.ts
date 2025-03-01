// Simple function to test CORS with plain fetch API
export async function testCorsWithFetch() {
  try {
    console.log("Testing CORS with fetch...")
    const response = await fetch("http://localhost:8080/api/products", {
      method: "GET",
      credentials: "include", // Same as withCredentials: true in axios
    })

    if (response.ok) {
      const data = await response.json()
      console.log("CORS test successful! Data:", data)
      return { success: true, data }
    } else {
      console.error("CORS test failed with status:", response.status)
      return { success: false, error: `HTTP error: ${response.status}` }
    }
  } catch (error) {
    console.error("CORS test failed with exception:", error)
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error"
    return { success: false, error: errorMessage }
  }
}
