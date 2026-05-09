import Image from 'next/image'
import { Check, Sparkles, Waves, Thermometer, Droplets, HandHelping, GraduationCap } from 'lucide-react'
import { SiteNav } from '@/components/site/SiteNav'
import { LeadCaptureForm } from '@/components/site/LeadCaptureForm'
import { SiteFooter } from '@/components/site/SiteFooter'
import { AIChatWidget } from '@/components/site/AIChatWidget'

const PRIMARY_SERVICES = [
  {
    icon: Waves,
    title: 'Weekly Pool Cleaning',
    price: '$55+',
    note: '*Starting price is per visit plus chemicals and tax.',
    description:
      'In this package, we completely take over your pool care. Pools require weekly maintenance to ensure your pool is always clean, clear, and ready to swim.',
    items: [
      'Brushing of the Walls/Floor/Tile',
      'Skimming & Netting',
      'Vacuuming As Needed',
      'Emptying of Skimmer & Pump Baskets',
      'Emptying of Automatic Cleaner/Robots',
      'Backwashing Filter as Necessary',
      'Equipment Overview',
      'Chemical Test & Balancing',
      'Water Level Monitor',
    ],
  },
  {
    icon: Thermometer,
    title: 'Weekly Hot Tub Cleaning',
    price: '$45+',
    note: '*Starting price is per visit plus chemicals and tax.',
    description:
      'Much like pools, hot tubs also require weekly maintenance to make sure it is clean and safe for you to jump in anytime.',
    items: [
      'Skimming & Netting',
      'Vacuuming As Necessary',
      'Cartridge Filter Rinse',
      'Equipment Overview',
      'Chemical Test & Balancing',
      'Water Level Monitoring',
    ],
  },
]

const EXTRA_SERVICES = [
  {
    icon: Sparkles,
    title: 'Green-To Cleans',
    price: '$100',
    note: '*Pricing is per visit plus chemicals and tax.',
    description: 'Is your pool green and in need of rescue? Let us help!',
  },
  {
    icon: HandHelping,
    title: 'One Time Clean',
    price: '$100',
    note: '*Pricing is per visit plus chemicals and tax.',
    description: 'Do you normally DIY your pool care but need help for a week or two? We are happy to fill in!',
  },
  {
    icon: Droplets,
    title: 'Hot Tub Drain & Refill',
    price: '$325+',
    note: '*Starting price plus tax.',
    description: 'Hot tubs are typically drained every 6–8 months and once a year for swim spas. Ask about our add-on services.',
  },
  {
    icon: GraduationCap,
    title: 'Pool & Spa School',
    price: '$100',
    note: '*Pricing is per visit plus tax.',
    description:
      'Great option for owners who want to learn how to take care of their pool and spa with confidence.',
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <SiteNav />

      <section className="relative pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://res.cloudinary.com/dmjxho2rl/image/upload/v1778302419/SERVICES-BG_ewnofq.jpg"
            alt="Clean pool water"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-white/88" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-2">Our Services</p>
            <h1 className="text-5xl font-bold text-blue-900 mb-4">Cleaning Service</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you are looking for someone to completely take over your pool care or if you are just needing temporary service, we can help.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {PRIMARY_SERVICES.map((service) => {
              const Icon = service.icon
              return (
                <article key={service.title} className="rounded-2xl bg-white shadow-sm border border-blue-100 p-8">
                  <Icon className="h-8 w-8 text-blue-400 mb-4" />
                  <h2 className="text-2xl font-bold text-blue-900">{service.title}</h2>
                  <p className="text-5xl font-extrabold text-blue-500 mt-3">{service.price}</p>
                  <p className="text-sm text-gray-500 italic mt-1">{service.note}</p>
                  <p className="text-gray-700 mt-5 leading-relaxed">{service.description}</p>
                  <ul className="mt-5 space-y-2">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-blue-900">
                        <Check className="h-4 w-4 text-blue-500 mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              )
            })}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {EXTRA_SERVICES.map((service) => {
              const Icon = service.icon
              return (
                <article key={service.title} className="rounded-2xl bg-white shadow-sm border border-blue-100 p-6">
                  <Icon className="h-7 w-7 text-blue-400 mb-3" />
                  <h3 className="text-2xl font-bold text-blue-900 leading-tight">{service.title}</h3>
                  <p className="text-4xl font-extrabold text-blue-500 mt-3">{service.price}</p>
                  <p className="text-xs text-gray-500 italic mt-1">{service.note}</p>
                  <p className="text-sm text-gray-700 mt-4 leading-relaxed">{service.description}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <LeadCaptureForm />
      <SiteFooter />
      <AIChatWidget />
    </main>
  )
}
