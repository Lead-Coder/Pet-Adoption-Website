import Head from 'next/head'
import Image from "next/image"
import { useRouter } from 'next/router'
import { SiteHeader } from "@/components/header"
import { SiteFooter } from "@/components/footer"
import { Button } from "@/components/ui/button"

// This would typically come from a database or API
const dogs = [
  { id: "1", name: "Buddy", breed: "Labrador Retriever", age: 3, image: "/dogs.jpg", description: "Buddy is a friendly and energetic Labrador Retriever. He loves to play fetch and go for long walks. Buddy is great with children and other dogs, making him a perfect family pet." },
  { id: "2", name: "Max", breed: "German Shepherd", age: 2, image: "/dog1.jpg", description: "Max is an intelligent and loyal German Shepherd. He's quick to learn new commands and would excel in obedience training. Max is protective of his family and would make an excellent guard dog." },
  { id: "3", name: "Charlie", breed: "Golden Retriever", age: 4, image: "/blank.jpg"},
  { id: "4", name: "Lucy", breed: "Beagle", age: 1, image: "/blank.jpg" },
  { id: "5", name: "Cooper", breed: "Poodle", age: 5, image: "/dog2.jpg", description: "Cooper is an adorable, curly-haired poodle known for his playful and affectionate personality. He's the perfect blend of elegance and charm. Cooper loves chasing toys, learning new tricks, and snuggling with his favorite humans. His boundless energy and sweet nature make him an absolute joy to be around!" },
  { id: "6", name: "Bailey", breed: "Yorkshire Terrier", age: 2, image: "/dog3.jpg" },
]

export default function DogPage() {
  const router = useRouter()
  const { id } = router.query

  const dog = dogs.find(d => d.id === id)

  if (!dog) {
    return <div>Dog not found</div>
  }

  return (
    <div className="mx-12 flex min-h-screen flex-col">
      <Head>
        <title>{`${dog.name} | PawfectPartner`}</title>
        <meta name="description" content={`Learn more about ${dog.name}, a ${dog.breed} looking for a forever home.`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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

