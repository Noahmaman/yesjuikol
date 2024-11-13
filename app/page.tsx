"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, BarChart3, Lock, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/layout/navbar"
import { PricingSection } from "@/components/sections/pricing"
import { TestimonialsSection } from "@/components/sections/testimonials"
import { CTASection } from "@/components/sections/cta"
import { AnalyticsSection } from "@/components/sections/analytics"
import { Footer } from "@/components/layout/footer"

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const handleScroll = (elementId: string) => {
    const element = document.getElementById(elementId)
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <header className="container mx-auto px-6 py-8">
        <Navbar />
      </header>

      <main>
        <section ref={containerRef} className="relative min-h-screen flex items-center">
          <motion.div 
            className="absolute inset-0 z-0"
            style={{ y, opacity }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-white" />
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-white/50 bg-[length:40px_40px] bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
          </motion.div>

          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16 max-w-4xl mx-auto"
            >
              <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6">
                The Future of
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-400">
                  Technology Solutions
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Transform your digital experience with our cutting-edge platform.
                Built for the future, designed for you.
              </p>
              <div className="flex justify-center gap-4">
                <Button 
                  size="lg" 
                  className="bg-purple-600 hover:bg-purple-700"
                  onClick={() => handleScroll("pricing")}
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => handleScroll("features")}
                >
                  Explore Features
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid md:grid-cols-3 gap-8 mt-16"
            >
              {[
                {
                  title: "Advanced Analytics",
                  description: "Real-time insights and powerful data visualization tools",
                  icon: BarChart3,
                  delay: 0,
                },
                {
                  title: "Team Collaboration",
                  description: "Seamless communication and project management",
                  icon: Users,
                  delay: 0.1,
                },
                {
                  title: "Enterprise Security",
                  description: "Bank-grade encryption and advanced protection",
                  icon: Lock,
                  delay: 0.2,
                },
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + feature.delay }}
                  className="relative group"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-purple-400 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300" />
                  <Link href={`/features/${feature.title.toLowerCase().replace(" ", "-")}`}>
                    <div className="relative bg-white dark:bg-gray-900 rounded-xl p-6 hover:shadow-xl transition duration-300">
                      <div className="h-12 w-12 rounded-lg bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center mb-4">
                        <feature.icon className="h-6 w-6 text-purple-600" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {feature.description}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <AnalyticsSection />
        <TestimonialsSection />
        <PricingSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  )
}