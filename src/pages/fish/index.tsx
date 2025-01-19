import { useState, useEffect } from 'react'
import Head from 'next/head'
import Image from "next/image"
import Link from "next/link"
import { SiteHeader } from "@/components/header"
import { SiteFooter } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { getAllFish } from '../api/fish'

interface Fish {
  _id: string;
  name: string;
  breed: string;
  age: number;
  image: string;
}

export default function ExploreFishPage() {
  const [fish, setFish] = useState<Fish[]>([]);

  useEffect(() => {
    const fetchFish = async () => {
      try {
        const dogsData = await getAllFish();
        setFish(dogsData);
      } catch (error) {
        console.error('Error fetching dogs:', error);
      }
    };

    fetchFish();
  }, []);

  return (
    <div className="mx-12 flex min-h-screen flex-col">
      <Head>
        <title>Explore Fish | PawfectPartner</title>
        <meta name="description" content="Find your perfect canine companion at PetPalace" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SiteHeader />
      <main className="flex-1">
        <section className="container py-12 md:py-24 lg:py-32">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl mb-6">
            Explore Fish
          </h1>
          <p className="text-xl text-muted-foreground mb-12">
            Find your perfect aquatic companion. Browse our selection of lovable fish looking for their forever homes.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {fish.map((dog) => (
              <Card key={dog._id} className="overflow-hidden">
                <Image
                  src={dog.image || '/blank.jpg'}
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
                    <Link href={`/fish/${dog._id}`}>View Details</Link>
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

