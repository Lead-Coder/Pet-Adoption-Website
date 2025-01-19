import Head from 'next/head'
import Image from "next/image"
import Link from "next/link"
import { SiteHeader } from "@/components/header"
import { SiteFooter } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

const dogs = [
  { id: "1", name: "Buddy", breed: "Labrador Retriever", age: 3, image: "/dogs.jpg" },
  { id: "2", name: "Max", breed: "German Shepherd", age: 2, image: "/dog1.jpg" },
  { id: "3", name: "Charlie", breed: "Golden Retriever", age: 4, image: "/blank.jpg" },
  { id: "4", name: "Lucy", breed: "Beagle", age: 1, image: "/blank.jpg" },
  { id: "5", name: "Cooper", breed: "Poodle", age: 5, image: "/dog2.jpg" },
  { id: "6", name: "Bailey", breed: "Yorkshire Terrier", age: 2, image: "/dog3.jpg" },
]

export default function ExploreDogPage() {
  return (
    <div className="mx-12 flex min-h-screen flex-col">
      <Head>
        <title>Explore Dogs | PawfectPartner</title>
        <meta name="description" content="Find your perfect canine companion at PetPalace" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SiteHeader />
      <main className="flex-1">
        <section className="container py-12 md:py-24 lg:py-32">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl mb-6">
            Explore Dogs
          </h1>
          <p className="text-xl text-muted-foreground mb-12">
            Find your perfect canine companion. Browse our selection of lovable dogs looking for their forever homes.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {dogs.map((dog) => (
              <Card key={dog.id} className="overflow-hidden">
                <Image
                  src={dog.image}
                  alt={dog.name}
                  width={300}
                  height={200}
                  className="object-cover w-full h-48"
                />
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold">{dog.name}</h3>
                  <p className="text-sm text-muted-foreground">{dog.breed}</p>
                  <p className="text-sm text-muted-foreground">{dog.age} years old</p>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href={`/dogs/${dog.id}`}>View Details</Link>
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

