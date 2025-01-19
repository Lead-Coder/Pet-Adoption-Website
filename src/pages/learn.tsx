import { Metadata } from "next"
import { SiteHeader } from "@/components/header"
import { SiteFooter } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Learn More | PawfectPartner",
  description: "Learn more about PawfectPartner and our mission to connect pets with loving homes",
}

export default function LearnMorePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="container py-12 md:py-24 lg:py-32">
          <div className="mx-auto max-w-[800px] space-y-8">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">About PawfectPartner</h1>
            <p className="text-xl text-muted-foreground">
            PawfectPartner is more than just a pet adoption platform. We're a community of animal lovers dedicated to connecting pets with their perfect forever homes.
            </p>
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold tracking-tight">Our Mission</h2>
              <p className="text-lg text-muted-foreground">
                At PetPalace, we believe every pet deserves a loving home. Our mission is to make the pet adoption process easy, enjoyable, and rewarding for both pets and their new families.
              </p>
              <h2 className="text-2xl font-semibold tracking-tight">What We Offer</h2>
              <ul className="list-disc pl-6 text-lg text-muted-foreground space-y-2">
                <li>A wide variety of pets from reputable shelters and breeders</li>
                <li>Comprehensive pet profiles with health information and personality traits</li>
                <li>Educational resources on pet care and responsible ownership</li>
                <li>A supportive community of pet lovers and experts</li>
              </ul>
              <h2 className="text-2xl font-semibold tracking-tight">How It Works</h2>
              <p className="text-lg text-muted-foreground">
                Browse our selection of pets, find your perfect match, and start the adoption process right from our platform. We'll guide you through every step, from initial contact to bringing your new friend home.
              </p>
            </div>
            <div className="flex justify-center pt-8">
              <Button asChild size="lg">
                <Link href="/">Start Your Pet Journey</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

