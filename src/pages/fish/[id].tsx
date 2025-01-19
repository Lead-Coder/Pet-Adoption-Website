import { useState, useEffect } from 'react'
import Image from "next/image"
import { useRouter } from 'next/router'
import { SiteHeader } from "@/components/header"
import { SiteFooter } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { getFishById } from '../api/fish'

interface Fish {
  _id: string;
  name: string;
  breed: string;
  age: number;
  image: string;
  description: string;
}

export default function FishPage() {
  const router = useRouter()
  const { id } = router.query
  const [fish, setFish] = useState<Fish | null>(null)

  useEffect(() => {
    if (id) {
      const fetchFish = async () => {
        try {
          const fishData = await getFishById(id as string);
          setFish(fishData);
        } catch (error) {
          console.error('Error fetching fish:', error);
        }
      };

      fetchFish();
    }
  }, [id]);

  if (!fish) {
    return <div>Loading...</div>
  }

  return (
    <div className="mx-12 flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="container py-12 md:py-24 lg:py-32">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <Image
              src={fish.image || "/blank.jpg"}
              alt={fish.name}
              width={600}
              height={400}
              className="rounded-lg object-cover"
            />
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                {fish.name}
              </h1>
              <p className="text-xl text-muted-foreground">
                {fish.breed} • {fish.age} years old
              </p>
              <p className="text-lg">{fish.description}</p>
              <Button size="lg">Adopt {fish.name}</Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}



