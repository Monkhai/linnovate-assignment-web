import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ProductNotFound() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold">Product Not Found</h1>
      <p className="mt-4 text-lg text-gray-600">
        The product you&apos;re looking for doesn&apos;t exist or has been
        removed.
      </p>
      <Link href="/" className="mt-8">
        <Button>Return to Home</Button>
      </Link>
    </div>
  )
}
