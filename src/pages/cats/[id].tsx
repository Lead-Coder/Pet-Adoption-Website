import { Metadata } from "next"
import Image from "next/image"
import Head from 'next/head'
import { useRouter } from 'next/router'
import { SiteHeader } from "@/components/header"
import { SiteFooter } from "@/components/footer"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Cat Details | PawfectPartner",
  description: "Learn more about your potential new furry friend",
}

const cats = [
    { id: "1", name: "Ferry", breed: "Siamese Cat", age: 6, image: "/cat1.jpg", description: "Ferry is a friendly and energetic Siamese cat. He loves to play fetch and go for long walks. Ferry is great with children and other dogs, making him a perfect family pet." },
    { id: "2", name: "Paws", breed: "Maine Coon", age: 3, image: "/cat.jpg", description: "Paws is an intelligent and loyal Maine Coon. She's quick to learn new commands and would excel in obedience training. Paws is protective of his family and would make an excellent pet." },
    { id: "3", name: "Poodle", breed: "Ragdoll", age: 4, image: "/cat2.jpg" },
    { id: "4", name: "Verine", breed: "Abyssinian", age: 6, image: "/blank.jpg" },
    { id: "5", name: "Cynthia", breed: "Persian Cat", age: 5, image: "/blank.jpg" },
    { id: "6", name: "Maya", breed: "Indian Cat", age: 2, image: "/blank.jpg" },
]

export default function CatPage() {
    const router = useRouter()
    const { id } = router.query
  
    const cat = cats.find(d => d.id === id)
  
    if (!cat) {
      return <div>Cat not found</div>
    }
  
    return (
      <div className="mx-12 flex min-h-screen flex-col">
        <Head>
          <title>{`${cat.name} | PawfectPartner`}</title>
          <meta name="description" content={`Learn more about ${cat.name}, a ${cat.breed} looking for a forever home.`} />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <SiteHeader />
        <main className="flex-1">
          <section className="container py-12 md:py-24 lg:py-32">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <Image
                src={cat.image}
                alt={cat.name}
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  {cat.name}
                </h1>
                <p className="text-xl text-muted-foreground">
                  {cat.breed} • {cat.age} years old
                </p>
                <p className="text-lg">{cat.description}</p>
                <Button size="lg">Adopt {cat.name}</Button>
              </div>
            </div>
          </section>
        </main>
        <SiteFooter />
      </div>
    )
  }