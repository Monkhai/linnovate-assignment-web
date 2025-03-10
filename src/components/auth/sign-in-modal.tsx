import React from "react"
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { auth } from "@/firebase"

interface SignInModalProps {
  isOpen: boolean
  onClose: () => void
}

export function SignInModal({ isOpen, onClose }: SignInModalProps) {
  const [isSigningIn, setIsSigningIn] = React.useState(false)

  const handleGoogleSignIn = async () => {
    try {
      setIsSigningIn(true)
      const provider = new GoogleAuthProvider()
      await signInWithPopup(auth, provider)
      onClose()
    } catch (error) {
      console.error("Error signing in with Google", error)
    } finally {
      setIsSigningIn(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl">Sign In</DialogTitle>
          <DialogDescription className="text-center">
            You need to sign in before submitting a review. It only takes a
            moment.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center justify-center py-6">
          <div className="rounded-full bg-gray-50 p-8">
            <svg
              className="h-12 w-12 text-gray-400"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>
        </div>
        <DialogFooter className="flex flex-col gap-2 sm:gap-0">
          <Button
            variant="outline"
            size="lg"
            className="relative gap-2"
            onClick={handleGoogleSignIn}
            disabled={isSigningIn}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              className="h-5 w-5"
            >
              <path
                fill="#FFC107"
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
              />
              <path
                fill="#FF3D00"
                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
              />
              <path
                fill="#4CAF50"
                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
              />
              <path
                fill="#1976D2"
                d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
              />
            </svg>
            {isSigningIn ? "Signing in..." : "Sign in with Google"}
          </Button>
          <p className="text-muted-foreground mt-4 text-center text-xs">
            We&apos;ll only use your information to associate your reviews with
            your profile.
          </p>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
