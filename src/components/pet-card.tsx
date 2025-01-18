import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface PetCategoryCardProps {
  name: string
  description: string
  image: string
  link: string
}

export function PetCategoryCard({ name, description, image, link }: PetCategoryCardProps) {
  return (
    <Card className="overflow-hidden">
      <Image
        src={image}
        alt={name}
        width={400}
        height={200}
        className="object-cover w-full h-64"
      />
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link href={link}>Explore {name}</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

