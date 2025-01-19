import { SiteHeader } from "@/components/header"
import { HeroSection } from "@/components/hero"
import { PetCategories } from "@/components/pet-category"
import { SiteFooter } from "@/components/footer"

export default function Home() {
  return (
    <div className="mx-12 flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 ml-8">
        <HeroSection />
        <PetCategories />
      </main>
      <SiteFooter />
    </div>
  )
}

