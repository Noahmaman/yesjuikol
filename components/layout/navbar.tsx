"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

const menuItems = [
  { href: "/features/analytics", label: "Analytics" },
  { href: "/features/collaboration", label: "Collaboration" },
  { href: "/features/security", label: "Security" },
  { href: "/pricing", label: "Pricing" },
]

export function Navbar({ className }: { className?: string }) {
  const pathname = usePathname()
  const isAuthPage = pathname?.includes("/login") || pathname?.includes("/signup")
  const isDashboard = pathname?.includes("/dashboard")

  return (
    <nav className={cn("flex items-center justify-between py-4", className)}>
      <Link href="/" className="text-2xl font-bold text-purple-600">Tehify</Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-6">
        {!isAuthPage && !isDashboard && menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors",
              pathname === item.href && "text-purple-600 dark:text-purple-400"
            )}
          >
            {item.label}
          </Link>
        ))}
        <ThemeToggle />
        {!isAuthPage && !isDashboard && (
          <>
            <Link href="/login">
              <Button variant="ghost" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400">
                Login
              </Button>
            </Link>
            <Link href="/signup">
              <Button className="bg-purple-600 text-white hover:bg-purple-700">
                Get Started
              </Button>
            </Link>
          </>
        )}
        {isDashboard && (
          <Link href="/dashboard">
            <Button variant="ghost" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400">
              Dashboard
            </Button>
          </Link>
        )}
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden flex items-center space-x-4">
        <ThemeToggle />
        {!isAuthPage && !isDashboard && (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col space-y-4 mt-8">
                {menuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "text-foreground hover:text-purple-600 transition-colors",
                      pathname === item.href && "text-purple-600"
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link href="/login">
                  <Button variant="ghost" className="w-full justify-start">
                    Login
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button className="w-full">Get Started</Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        )}
      </div>
    </nav>
  )
}