'use client'
import { Button } from '@/components/ui/button'
import { ChevronDown, Star, Award, Shield } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=1800&q=85')] bg-cover bg-center bg-no-repeat"
      />
      {/* Gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-gray-900/85 via-gray-900/60 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-400/30 text-blue-300 rounded-full px-4 py-1.5 text-sm font-medium mb-6 backdrop-blur-sm">
            <Star className="h-3.5 w-3.5 fill-current" />
            Pool & Hot Tub Cleaning Services in Austin
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Relax — We&apos;ll Keep It{' '}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-300">
              Beautiful & Clear.
            </span>
          </h1>

          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            We keep your pool and spa clean, balanced, and swim-ready so all you have to do is enjoy it. Proudly servicing the greater Austin area.
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-4 mb-10">
            {[
              { icon: Award, label: '22+ Years Combined Experience' },
              { icon: Shield, label: 'Reliable Weekly Service' },
              { icon: Star, label: 'Pool & Hot Tub Specialists' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-gray-300 text-sm">
                <Icon className="h-4 w-4 text-blue-400" />
                {label}
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-500 text-white text-base px-8 py-6 rounded-xl shadow-lg shadow-blue-600/30"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Book Service
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 text-base px-8 py-6 rounded-xl backdrop-blur-sm"
              onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Our Work
            </Button>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="absolute bottom-0 inset-x-0 bg-blue-600/90 backdrop-blur-sm border-t border-blue-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-blue-500/30">
            {[
              { value: '22+', label: 'Years Combined Experience' },
              { value: 'Austin', label: 'Service Area' },
              { value: 'Pool + Spa', label: 'Specialized Care' },
              { value: 'Weekly', label: 'Service Available' },
            ].map(stat => (
              <div key={stat.label} className="text-center py-5 px-4">
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-xs text-blue-200 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-24 right-8 text-white/40 animate-bounce hidden lg:block">
        <ChevronDown className="h-6 w-6" />
      </div>
    </section>
  )
}
