import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Link from "next/link"

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
    <html lang="en">
      <body className={inter.className}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <header className="py-6">
            <nav className="flex items-center justify-between">
              <Link href="/" className="text-xl font-bold">
                ProductCatalog
              </Link>
              <div className="flex items-center space-x-4">
                <Link
                  href="/"
                  className="text-sm font-medium text-gray-600 hover:text-gray-900"
                >
                  Home
                </Link>
              </div>
            </nav>
          </header>
          <main>{children}</main>
          <footer className="mt-12 border-t py-6 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Product Catalog. All rights reserved.
          </footer>
        </div>
      </body>
    </html>
  )
}
