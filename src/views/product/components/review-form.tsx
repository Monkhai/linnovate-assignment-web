"use client"

import React, { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useForm } from "react-hook-form"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Star, CheckCircle2, XCircle } from "lucide-react"
import { auth } from "../../../firebase"
import { SignInModal } from "@/components/auth/sign-in-modal"
import usePostReview from "@/lib/queries/usePostReivew"
import { ClientReview } from "@/lib/types"

const formSchema = z.object({
  reviewTitle: z.string().min(3, {
    message: "Title must be at least 3 characters.",
  }),
  reviewContent: z.string().min(10, {
    message: "Review must be at least 10 characters.",
  }),
  stars: z.number().min(1).max(5),
})

interface ReviewFormProps {
  productId: number
}

export function ReviewForm({ productId }: ReviewFormProps) {
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const {
    mutate: postReivew,
    isPending,
    isSuccess,
    isError,
    error,
    reset,
  } = usePostReview()

  // Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      reviewTitle: "",
      reviewContent: "",
      stars: 5,
    },
  })

  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => {
        form.reset()
        reset()
        setErrorMessage(null)
      }, 3000)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess])

  useEffect(() => {
    if (isError) {
      // Set a user-friendly error message based on the error
      if (error instanceof Error) {
        // Check for specific error types and provide tailored messages
        if (error.message.includes("network")) {
          setErrorMessage(
            "Network error. Please check your internet connection and try again.",
          )
        } else if (error.message.includes("permission")) {
          setErrorMessage(
            "You don't have permission to post a review. Please sign in with a different account.",
          )
        } else if (error.message.includes("already reviewed")) {
          setErrorMessage("You have already reviewed this product.")
        } else {
          setErrorMessage(`Error submitting review: ${error.message}`)
        }
      } else {
        setErrorMessage("An unexpected error occurred. Please try again later.")
      }
    } else {
      setErrorMessage(null)
    }

    setTimeout(() => {
      setErrorMessage(null)
      reset()
    }, 3000)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isError, error])

  // Define a submit handler.
  function handleSubmit(values: z.infer<typeof formSchema>) {
    const user = auth.currentUser

    if (!user) {
      setIsSignInModalOpen(true)
      return
    }

    // Clear any previous errors
    setErrorMessage(null)

    try {
      const review: ClientReview = {
        ...values,
        productId: productId,
      }

      postReivew(review)
    } catch (err) {
      setErrorMessage("Failed to submit your review. Please try again.")
      console.error("Review submission error:", err)
    }
  }

  const isUserSignedIn = auth.currentUser !== null

  return (
    <>
      <Card className="my-12">
        <CardHeader>
          <CardTitle>Write a Review</CardTitle>
          {!isUserSignedIn && (
            <p className="text-muted-foreground mt-1 text-sm">
              Sign in required to submit a review
            </p>
          )}
        </CardHeader>
        <CardContent>
          {isSuccess && (
            <div className="mb-6 flex items-start gap-2 rounded-md border border-green-200 bg-green-50 p-3 dark:border-green-900 dark:bg-green-950">
              <CheckCircle2 className="h-5 w-5 shrink-0 text-green-600 dark:text-green-400" />
              <p className="text-sm text-green-800 dark:text-green-300">
                Thank you! Your review has been submitted successfully.
              </p>
            </div>
          )}

          {errorMessage && (
            <div className="mb-6 flex items-start gap-2 rounded-md border border-red-200 bg-red-50 p-3 dark:border-red-900 dark:bg-red-950">
              <XCircle className="h-5 w-5 shrink-0 text-red-600 dark:text-red-400" />
              <p className="text-sm text-red-800 dark:text-red-300">
                {errorMessage}
              </p>
            </div>
          )}

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className="space-y-6"
            >
              <FormField
                control={form.control}
                name="reviewTitle"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Review Title</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Summarize your experience"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="stars"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Rating</FormLabel>
                    <div className="flex flex-col gap-2">
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onClick={() => field.onChange(star)}
                            className="p-1"
                          >
                            <Star
                              size={24}
                              className={`${
                                field.value >= star
                                  ? "fill-yellow-400 text-yellow-400"
                                  : "text-gray-300"
                              } transition-colors`}
                            />
                          </button>
                        ))}
                      </div>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="reviewContent"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Review Content</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Share your thoughts about this product"
                        className="min-h-[120px] resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Your review helps other customers make better purchasing
                      decisions.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="w-full"
                disabled={isPending || !isUserSignedIn}
              >
                {isPending
                  ? "Submitting..."
                  : isUserSignedIn
                    ? "Submit Review"
                    : "Sign in to Submit"}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      <SignInModal
        isOpen={isSignInModalOpen}
        onClose={() => setIsSignInModalOpen(false)}
      />
    </>
  )
}
