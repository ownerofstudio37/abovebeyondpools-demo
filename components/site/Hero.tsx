'use client'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gray-900">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-[url('https://res.cloudinary.com/dmjxho2rl/image/upload/v1778298225/IMG_20240305_115502670_HDR-2-scaled_twvc1r.jpg')] bg-cover bg-center bg-no-repeat"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gray-900/50" />
      <div className="absolute inset-0 bg-linear-to-r from-gray-900/70 via-gray-900/45 to-transparent" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-28">
        <div className="max-w-3xl">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[0.95] mb-6 tracking-tight">
            Pool & Hot Tub
            <br />
            <span className="text-yellow-400">Cleaning</span>
            <br />
            Services in Austin
          </h1>

          <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl font-medium">
            We keep your pool and spa looking beautiful and clear so all you have to do is relax! Servicing the greater Austin area.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="rounded-full bg-yellow-400 hover:bg-yellow-300 text-gray-900 text-base px-8 py-6 font-semibold shadow-lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Book Service <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <a
              href="tel:+15124150266"
              className="inline-flex items-center justify-center rounded-full border border-white/35 bg-white/10 px-8 py-3 text-white font-medium backdrop-blur-sm hover:bg-white/15 transition-colors"
            >
              (512) 415-0266
            </a>
          </div>

          <p className="text-sm text-white/80 mt-6">
            Weekly cleaning • Green-to-clean • Hot tub drain & refill • Repair diagnostics
          </p>
        </div>
      </div>

      {/* Wave bottom */}
      <div className="pointer-events-none absolute bottom-0 inset-x-0">
        <svg viewBox="0 0 1440 120" className="w-full h-auto text-gray-50" preserveAspectRatio="none">
          <path
            fill="currentColor"
            d="M0,72L60,82.7C120,93,240,115,360,112C480,109,600,83,720,82.7C840,83,960,109,1080,112C1200,115,1320,93,1380,82.7L1440,72L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"
          ></path>
        </svg>
      </div>
    </section>
  )
}
