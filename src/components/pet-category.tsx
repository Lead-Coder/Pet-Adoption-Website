import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const categories = [
  { name: "Dogs", image: "/dogs.jpg", link: "/dogs" },
  { name: "Cats", image: "/cat.jpg", link: "/cats" },
  { name: "Birds", image: "/bird.jpg", link: "/birds" },
  { name: "Fish", image: "/fish.jpg", link: "/fish" },
]

export function PetCategories() {
  return (
    <section className="container py-8">
      <h2 className="text-2xl font-bold tracking-tight mb-6">Explore Pet Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((category) => (
          <Card key={category.name} className="overflow-hidden">
            <Link href={category.link}>
              <CardHeader className="p-0">
                <Image
                  src={category.image}
                  alt={category.name}
                  width={300}
                  height={200}
                  className="object-cover w-full h-64"
                />
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle>{category.name}</CardTitle>
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>
    </section>
  )
}

