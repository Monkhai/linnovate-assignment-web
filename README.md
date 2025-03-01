# Product Catalog & Reviews Application

A minimalist product catalog application where users can browse products and add reviews. Built with Next.js and React, featuring a clean, responsive UI.

## Features

- **Homepage**: Displays a list of products with essential details
- **Product Detail Page**: Shows detailed product information and existing reviews
- **Review System**: Allows users to submit reviews with ratings
- **Responsive Design**: Ensures a good experience across devices

## Tech Stack

- **Frontend**: Next.js, React, TypeScript
- **Styling**: Tailwind CSS with Shadcn UI components
- **Form Handling**: React Hook Form with Zod validation

## Getting Started

### Prerequisites

- Node.js 18 or higher
- Bun (recommended) or npm

### Installation

1. Clone the repository
2. Install dependencies:

```bash
bun install
# or
npm install
```

3. Start the development server:

```bash
bun dev
# or
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `src/app`: Next.js pages and routes
- `src/components`: Reusable UI components
  - `product`: Product-related components
  - `review`: Review-related components
  - `ui`: Shadcn UI components
- `src/lib`: Utility functions and types
  - `data`: Mock data for development
  - `types`: TypeScript type definitions
  - `utils.ts`: Utility functions

## Backend Integration

Currently, the application uses mock data for development purposes. The data can be easily replaced with real API calls once the backend is ready.

## Deployment

This Next.js application can be deployed on platforms like Vercel, Netlify, or any other hosting service that supports Node.js.
