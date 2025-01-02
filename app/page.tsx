import { Navbar } from "@/components/navbar"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Website</h1>
        <p className="text-lg">This is a simple page demonstrating our mobile-friendly navbar.</p>
      </main>
    </div>
  )
}

