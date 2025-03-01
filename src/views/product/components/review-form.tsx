"use client"

import React from "react"
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
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      reviewTitle: "",
      reviewContent: "",
      stars: 5,
      productId,
    },
  })

  // 2. Define a submit handler.
  function handleSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <div className="my-8">
      <h3 className="mb-4 text-lg font-semibold">Write a Review</h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="reviewTitle"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Review Title</FormLabel>
                <FormControl>
                  <Input placeholder="Give your review a title" {...field} />
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
                <FormControl>
                  <select
                    className="w-full rounded-md border p-2"
                    value={field.value}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                  >
                    <option value="5">5 Stars</option>
                    <option value="4">4 Stars</option>
                    <option value="3">3 Stars</option>
                    <option value="2">2 Stars</option>
                    <option value="1">1 Star</option>
                  </select>
                </FormControl>
                <FormMessage />
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
                    className="resize-none"
                    rows={5}
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
          <Button type="submit" className="w-full">
            Submit Review
          </Button>
        </form>
      </Form>
    </div>
  )
}
