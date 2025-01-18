import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface Dog {
  id: string
  name: string
  breed: string
  age: number
  image: string
}

interface DogGridProps {
  dogs: Dog[]
}

export function DogGrid({ dogs }: DogGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {dogs.map((dog) => (
        <Card key={dog.id} className="overflow-hidden">
          <CardHeader className="p-0">
            <Image
              src={dog.image}
              alt={dog.name}
              width={300}
              height={200}
              className="object-cover w-full h-48"
            />
          </CardHeader>
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
  )
}

