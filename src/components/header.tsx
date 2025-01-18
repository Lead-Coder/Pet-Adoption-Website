import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useAuth } from '../contexts/AuthContext'

export function SiteHeader() {
  const { user, logout } = useAuth()

  return (
    <header className="ml-3 sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block">PawfectPartner</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="/dogs">Dogs</Link>
            <Link href="/cats">Cats</Link>
            <Link href="/birds">Birds</Link>
            <Link href="/fish">Fish</Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            {/*For search functionality*/}
          </div>
          <nav className="flex items-center space-x-2">
            {user ? (
              <>
                <span className="text-sm">{user.email}</span>
                <Button onClick={logout}>Logout</Button>
              </>
            ) : (
              <>
                <Button variant="ghost" asChild>
                  <Link href="/login">Login</Link>
                </Button>
                <Button asChild>
                  <Link href="/signup">Sign Up</Link>
                </Button>
              </>
            )}
          </nav>
        </div>
      </div>
    </header>
  )
}

