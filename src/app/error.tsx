"use client"

import React from "react"
import { Button } from "@/components/ui/button"

interface ErrorProps {
  error: Error
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
  React.useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold">Something went wrong!</h1>
      <p className="mt-4 text-lg text-gray-600">
        We apologize for the inconvenience. Please try again later.
      </p>
      <Button onClick={reset} className="mt-8">
        Try again
      </Button>
    </div>
  )
}
