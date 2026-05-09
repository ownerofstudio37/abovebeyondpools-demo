'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

const NAV = [
  { label: 'About Us', href: '/#team' },
  { label: 'Services', href: '/services' },
  { label: 'Blog', href: '/admin/content/blog' },
  { label: 'Gallery', href: '/#gallery' },
  { label: 'Contact Us', href: '/#contact' },
]

export function SiteNav() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/95 backdrop-blur-sm border-t-2 border-t-blue-900 border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="https://res.cloudinary.com/dmjxho2rl/image/upload/v1778062388/aboveandbeyond-logo_alqiyj.webp"
              alt="Above & Beyond Pools logo"
              width={260}
              height={80}
              priority
              className="h-14 w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV.map(n => (
              <Link key={n.href} href={n.href} className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
                {n.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center">
            <Button
              size="sm"
              className="rounded-full px-6 bg-yellow-400 text-gray-900 hover:bg-yellow-300 font-semibold"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              REQUEST A QUOTE
            </Button>
          </div>

          {/* Mobile menu toggle */}
          <button className="md:hidden p-2" onClick={() => setOpen(v => !v)}>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t bg-white px-4 py-4 space-y-3">
          {NAV.map(n => (
            <Link key={n.href} href={n.href} className="block text-sm font-medium text-gray-700 py-1" onClick={() => setOpen(false)}>
              {n.label}
            </Link>
          ))}
          <Button
            className="w-full mt-2 rounded-full bg-yellow-400 text-gray-900 hover:bg-yellow-300 font-semibold"
            onClick={() => {
              setOpen(false)
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            REQUEST A QUOTE
          </Button>
          <a href="tel:+15124150266" className="block text-sm text-gray-600 pt-1">(512) 415-0266</a>
        </div>
      )}
    </header>
  )
}
