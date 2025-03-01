"use client"

import React, { useState } from "react"
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
import { Star } from "lucide-react"
import { auth } from "../../../firebase"
import { SignInModal } from "@/components/auth/sign-in-modal"

const formSchema = z.object({
  reviewTitle: z.string().min(3, {
    message: "Title must be at least 3 characters.",
  }),
  reviewContent: z.string().min(10, {
    message: "Review must be at least 10 characters.",
  }),
  stars: z.number().min(1).max(5),
  productId: z.number().optional(),
})

interface ReviewFormProps {
  productId: number
}

export function ReviewForm({ productId }: ReviewFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false)

  // Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      reviewTitle: "",
      reviewContent: "",
      stars: 5,
      productId,
    },
  })

  // Define a submit handler.
  function handleSubmit(values: z.infer<typeof formSchema>) {
    const user = auth.currentUser

    if (!user) {
      setIsSignInModalOpen(true)
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      console.log(values)
      setIsSubmitting(false)
      setIsSuccess(true)
      form.reset()

      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSuccess(false)
      }, 3000)
    }, 1000)
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
          {isSuccess ? (
            <div className="mb-4 rounded-md bg-green-50 p-4 text-green-700">
              Thank you! Your review has been submitted successfully.
            </div>
          ) : null}

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
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting
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
