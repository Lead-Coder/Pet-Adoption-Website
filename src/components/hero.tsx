import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="container flex flex-col items-center justify-center gap-6 pb-8 pt-6 md:py-10">
      <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
        Find Your Perfect Pet Companion
      </h1>
      <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
        Discover a wide variety of adorable pets looking for their forever homes. From playful pups to cuddly kittens, we have the perfect companion for you.
      </p>
      <div className="flex gap-4">
        <Button size="lg" asChild>
          <Link href="/explore">Explore Pets</Link>
        </Button>
        <Button size="lg" variant="outline" asChild>
          <Link href="/learn">Learn More</Link>
        </Button>
      </div>
    </section>
  )
}

