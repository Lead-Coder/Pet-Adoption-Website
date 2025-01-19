import Image from "next/image"
import Link from "next/link"
import { SiteHeader } from "@/components/header"
import { SiteFooter } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

const birds = [
  { id: "1", name: "Pika", breed: "Canary", age: 3, image: "/bird1.jpg" },
  { id: "2", name: "Parry", breed: "Parrot", age: 2, image: "/blank.jpg" },
  { id: "3", name: "Charlie", breed: "Scarlet Macaw", age: 4, image: "/bird.jpg" },
  { id: "4", name: "Miva", breed: "Budgie", age: 1, image: "/blank.jpg" },
  { id: "5", name: "Vester", breed: "Eagle", age: 5, image: "/bird2.jpg" },
  { id: "6", name: "Pookie", breed: "Cockatiel", age: 2, image: "/blank.jpg" },
]

export default function ExploreCatPage() {
  return (
    <div className="mx-12 flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="container py-12 md:py-24 lg:py-32">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl mb-6">
            Explore Birds
          </h1>
          <p className="text-xl text-muted-foreground mb-12">
            Find your perfect airborne companion. Browse our selection of lovable birds looking for their forever homes.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {birds.map((dog) => (
              <Card key={dog.id} className="overflow-hidden">
                <Image
                  src={dog.image}
                  alt={dog.name}
                  width={300}
                  height={200}
                  className="object-cover w-full h-64"
                />
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold">{dog.name}</h3>
                  <p className="text-sm text-muted-foreground">{dog.breed}</p>
                  <p className="text-sm text-muted-foreground">{dog.age} years old</p>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href={`/birds/${dog.id}`}>View Details</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}



