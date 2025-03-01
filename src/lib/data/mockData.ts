import { Product, Review } from "../types"

export const mockProducts: Product[] = [
  {
    id: 1,
    name: "Minimalist Desk Lamp",
    price: 49.99,
    created_at: "2023-09-15T14:30:00Z",
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&auto=format&fit=crop&q=60",
    description:
      "A sleek, adjustable desk lamp with multiple brightness levels and a modern design.",
  },
  {
    id: 2,
    name: "Ergonomic Office Chair",
    price: 199.99,
    created_at: "2023-10-05T09:45:00Z",
    image:
      "https://images.unsplash.com/photo-1589384267710-7a170981ca78?w=500&auto=format&fit=crop&q=60",
    description:
      "High-back mesh chair with lumbar support and adjustable armrests for all-day comfort.",
  },
  {
    id: 3,
    name: "Wireless Keyboard",
    price: 79.99,
    created_at: "2023-08-20T11:15:00Z",
    image:
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&auto=format&fit=crop&q=60",
    description:
      "Compact wireless keyboard with responsive keys and multi-device Bluetooth connectivity.",
  },
  {
    id: 4,
    name: "Noise-Cancelling Headphones",
    price: 149.99,
    created_at: "2023-11-02T16:20:00Z",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60",
    description:
      "Premium over-ear headphones with active noise cancellation and 30-hour battery life.",
  },
  {
    id: 5,
    name: "Smart Home Speaker",
    price: 129.99,
    created_at: "2023-07-10T13:00:00Z",
    image:
      "https://images.unsplash.com/photo-1558203728-00f45181dd84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    description:
      "Voice-controlled smart speaker with rich sound and integrated virtual assistant.",
  },
  {
    id: 6,
    name: "Ultra-Thin Laptop Stand",
    price: 39.99,
    created_at: "2023-10-18T10:30:00Z",
    image:
      "https://images.unsplash.com/photo-1661961110218-35af7210f803?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    description:
      "Portable aluminum laptop stand with adjustable height and foldable design.",
  },
  {
    id: 7,
    name: "Premium Leather Notebook",
    price: 24.99,
    created_at: "2023-06-12T09:15:00Z",
    image:
      "https://images.unsplash.com/photo-1517842645767-c639042777db?w=500&auto=format&fit=crop&q=60",
    description:
      "Handcrafted leather journal with premium paper and an elegant bookmark.",
  },
  {
    id: 8,
    name: "Wireless Charging Pad",
    price: 35.99,
    created_at: "2023-09-28T14:20:00Z",
    image:
      "https://images.unsplash.com/photo-1608755728617-aefab37d2edd?w=500&auto=format&fit=crop&q=60",
    description:
      "Fast-charging Qi wireless charger compatible with all modern smartphones.",
  },
  {
    id: 9,
    name: "Minimalist Wall Clock",
    price: 42.5,
    created_at: "2023-08-05T16:45:00Z",
    image:
      "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=500&auto=format&fit=crop&q=60",
    description:
      "Silent quartz wall clock with a clean design and precise movement.",
  },
  {
    id: 10,
    name: "Portable Bluetooth Speaker",
    price: 59.99,
    created_at: "2023-11-15T11:30:00Z",
    image:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&auto=format&fit=crop&q=60",
    description:
      "Waterproof Bluetooth speaker with 360° sound and 12-hour playback.",
  },
  {
    id: 11,
    name: "Adjustable Standing Desk",
    price: 299.99,
    created_at: "2023-07-22T08:50:00Z",
    image:
      "https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=500&auto=format&fit=crop&q=60",
    description:
      "Electric height-adjustable desk with memory settings and cable management.",
  },
  {
    id: 12,
    name: "Artisan Coffee Mug",
    price: 19.99,
    created_at: "2023-10-10T13:15:00Z",
    image:
      "https://images.unsplash.com/photo-1497515114629-f71d768fd07c?w=500&auto=format&fit=crop&q=60",
    description:
      "Hand-thrown ceramic mug with natural glaze and comfortable handle.",
  },
  {
    id: 13,
    name: "Smart Fitness Tracker",
    price: 89.99,
    created_at: "2023-09-02T15:40:00Z",
    image:
      "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=500&auto=format&fit=crop&q=60",
    description:
      "Waterproof fitness tracker with heart rate monitoring and sleep analysis.",
  },
  {
    id: 14,
    name: "Modern Plant Pot",
    price: 32.5,
    created_at: "2023-11-08T10:20:00Z",
    image:
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500&auto=format&fit=crop&q=60",
    description:
      "Minimalist ceramic plant pot with drainage hole and bamboo tray.",
  },
  {
    id: 15,
    name: "Designer Ballpoint Pen",
    price: 15.99,
    created_at: "2023-08-30T09:10:00Z",
    image:
      "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=500&auto=format&fit=crop&q=60",
    description:
      "Precision-engineered ballpoint pen with smooth writing action and metal construction.",
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
