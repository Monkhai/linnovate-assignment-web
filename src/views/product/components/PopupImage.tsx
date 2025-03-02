import {
  MorphingDialog,
  MorphingDialogClose,
  MorphingDialogContainer,
  MorphingDialogContent,
  MorphingDialogTrigger,
} from "@/components/ui/morphing-dialog"
import { XIcon } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

interface PopupImageProps {
  src: string
  alt: string
  onError?: () => void
}

export function PopupImage({ src, alt, onError }: PopupImageProps) {
  const [hasError, setHasError] = useState(false)

  const handleImageError = () => {
    setHasError(true)
    if (onError) {
      onError()
    }
  }

  // Fallback for image error
  if (hasError) {
    return (
      <div className="bg-muted/20 flex aspect-square h-full w-full items-center justify-center rounded-xl">
        <p className="text-muted-foreground text-center">
          Image could not be loaded
        </p>
      </div>
    )
  }

  return (
    <MorphingDialog
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
    >
      <MorphingDialogTrigger>
        <div className="relative aspect-square w-full overflow-hidden rounded-xl">
          <Image
            src={src}
            alt={alt}
            className="h-full w-full rounded-xl object-cover"
            onError={handleImageError}
          />
        </div>
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent className="relative">
          <div className="relative h-auto w-full max-w-[90vw] rounded-xl lg:h-[90vh]">
            <Image
              src={src}
              alt={alt}
              className="h-full w-full rounded-xl object-cover"
              onError={handleImageError}
            />
          </div>
        </MorphingDialogContent>
        <MorphingDialogClose
          className="fixed top-6 right-6 h-fit w-fit rounded-full bg-white p-1"
          variants={{
            initial: { opacity: 0 },
            animate: {
              opacity: 1,
              transition: { delay: 0.3, duration: 0.1 },
            },
            exit: { opacity: 0, transition: { duration: 0 } },
          }}
        >
          <XIcon className="h-5 w-5 text-zinc-500" />
        </MorphingDialogClose>
      </MorphingDialogContainer>
    </MorphingDialog>
  )
}
