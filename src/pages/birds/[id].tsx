import { Metadata } from "next"
import Image from "next/image"
import { useRouter } from 'next/router'
import { SiteHeader } from "@/components/header"
import { SiteFooter } from "@/components/footer"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Bird Details | PawfectPartner",
  description: "Learn more about your potential new furry friend",
}

const birds = [
    { id: "1", name: "Pika", breed: "Canary", age: 3, image: "/bird1.jpg", description: "Pika is a small vibrant canary, its cheerful songs and bright yellow plumage, making it a delightful companion for bird enthusiasts."},
    { id: "2", name: "Parry", breed: "Parrot", age: 2, image: "/blank.jpg", description: "Parry is an intelligent, colorful parrot, it is wonderful due to its ability to mimic sounds and form close bonds with its owner." },
    { id: "3", name: "Charlie", breed: "Scarlet Macaw", age: 4, image: "/bird.jpg" },
    { id: "4", name: "Miva", breed: "Budgie", age: 1, image: "/blank.jpg" },
    { id: "5", name: "Vester", breed: "Eagle", age: 5, image: "/bird2.jpg" },
    { id: "6", name: "Pookie", breed: "Cockatiel", age: 2, image: "/blank.jpg" },
]

export default function CatPage() {
    const router = useRouter()
    const { id } = router.query
  
    const dog = birds.find(d => d.id === id)
  
    if (!dog) {
      return <div>Dog not found</div>
    }
  
    return (
      <div className="mx-12 flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1">
          <section className="container py-12 md:py-24 lg:py-32">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <Image
                src={dog.image}
                alt={dog.name}
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  {dog.name}
                </h1>
                <p className="text-xl text-muted-foreground">
                  {dog.breed} • {dog.age} years old
                </p>
                <p className="text-lg">{dog.description}</p>
                <Button size="lg">Adopt {dog.name}</Button>
              </div>
            </div>
          </section>
        </main>
        <SiteFooter />
      </div>
    )
  }