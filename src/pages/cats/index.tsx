import Head from 'next/head'
import Image from "next/image"
import Link from "next/link"
import { SiteHeader } from "@/components/header"
import { SiteFooter } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

const cats = [
  { id: "1", name: "Ferry", breed: "Siamese Cat", age: 3, image: "/cat1.jpg" },
  { id: "2", name: "Paws", breed: "Maine Coon", age: 2, image: "/cat.jpg" },
  { id: "3", name: "Poodle", breed: "Ragdoll", age: 4, image: "/cat2.jpg" },
  { id: "4", name: "Verine", breed: "Abyssinian", age: 1, image: "/blank.jpg" },
  { id: "5", name: "Cynthia", breed: "Persian Cat", age: 5, image: "/blank.jpg" },
  { id: "6", name: "Maya", breed: "Indian Cat", age: 2, image: "/blank.jpg" },
]

export default function ExploreCatPage() {
  return (
    <div className="mx-12 flex min-h-screen flex-col">
      <Head>
        <title>Explore Cats | PawfectPartner</title>
        <meta name="description" content="Find your perfect canine companion at PetPalace" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SiteHeader />
      <main className="flex-1">
        <section className="container py-12 md:py-24 lg:py-32">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl mb-6">
            Explore Cats
          </h1>
          <p className="text-xl text-muted-foreground mb-12">
            Find your perfect furry companion. Browse our selection of lovable dogs looking for their forever homes.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cats.map((cat) => (
              <Card key={cat.id} className="overflow-hidden">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  width={300}
                  height={200}
                  className="object-cover w-full h-48"
                />
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold">{cat.name}</h3>
                  <p className="text-sm text-muted-foreground">{cat.breed}</p>
                  <p className="text-sm text-muted-foreground">{cat.age} years old</p>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href={`/cats/${cat.id}`}>View Details</Link>
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



