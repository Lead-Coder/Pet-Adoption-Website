import { Metadata } from "next"
import { SiteHeader } from "@/components/header"
import { SiteFooter } from "@/components/footer"
import { PetCategoryCard } from "@/components/pet-card"

export const metadata: Metadata = {
  title: "Explore Pets | PawfectPartner",
  description: "Discover a variety of pets looking for their forever homes at PawfectPartner",
}

const petCategories = [
  {
    name: "Dogs",
    description: "Loyal companions for active lifestyles and families.",
    image: "/dogs.jpg",
    link: "/dogs",
  },
  {
    name: "Cats",
    description: "Independent and affectionate feline friends for sophisticated people.",
    image: "/cat.jpg",
    link: "/cats",
  },
  {
    name: "Birds",
    description: "Colorful and cheerful avian friends and companions.",
    image: "/bird.jpg",
    link: "/birds",
  },
  {
    name: "Fish",
    description: "Peaceful aquatic pets for a tranquil home.",
    image: "/fish.jpg",
    link: "/fish",
  },
//   {
//     name: "Small Animals",
//     description: "Cute and low-maintenance pets for cozy spaces.",
//     image: "/placeholder.svg?height=200&width=400",
//     link: "/small-animals",
//   },
//   {
//     name: "Reptiles",
//     description: "Fascinating and unique cold-blooded companions.",
//     image: "/placeholder.svg?height=200&width=400",
//     link: "/reptiles",
//   },
]

export default function ExplorePetsPage() {
  return (
    <div className="mx-12 flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="container py-12 md:py-24 lg:py-32">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl mb-6">
            Explore Our Pet Categories
          </h1>
          <p className="text-xl text-muted-foreground mb-12">
            Discover the perfect pet for your lifestyle and home. Browse through our diverse categories of lovable animals waiting for their forever homes.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {petCategories.map((category) => (
              <PetCategoryCard key={category.name} {...category} />
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

