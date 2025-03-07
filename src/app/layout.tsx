import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Link from "next/link"
import { Package } from "lucide-react"
import QueryProvider from "@/components/providers/QueryProvider"
import { ThemeProvider } from "@/components/providers/ThemeProvider"
import { ThemeToggle } from "@/components/ui/theme-toggle"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Product Catalog & Reviews",
  description: "Browse products and add reviews",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <QueryProvider>
              <main className="flex-1">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                  {children}
                </div>
              </main>
            </QueryProvider>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

function Header() {
  return (
    <header className="bg-background/95 sticky top-0 z-50 border-b backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link
              href="/"
              className="flex items-center gap-2 text-xl font-bold"
            >
              <Package />
              ProductCatalog
            </Link>
            <nav className="hidden md:flex">
              <Link
                href="/"
                className="text-muted-foreground hover:text-foreground px-3 py-2 text-sm font-medium transition-colors"
              >
                Products
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}
function Footer() {
  return (
    <footer className="mt-auto border-t py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} ProductCatalog. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href="/"
              className="text-muted-foreground hover:text-foreground text-sm transition-colors"
            >
              Terms
            </Link>
            <Link
              href="/"
              className="text-muted-foreground hover:text-foreground text-sm transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/"
              className="text-muted-foreground hover:text-foreground text-sm transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
