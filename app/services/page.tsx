import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Check, Sparkles, Waves, Thermometer, Droplets, HandHelping, GraduationCap, Wrench, Filter, Settings2 } from 'lucide-react'
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

const REPAIR_SPECIALTY = [
  {
    icon: Wrench,
    title: 'Repair Diagnostic',
    price: '$125+',
    description:
      'With every pool repair, we perform a diagnostic visit to provide a personalized estimate. If approved, this fee is applied to the estimate total.',
  },
  {
    icon: Filter,
    title: 'Filter Cleans',
    price: '$150+',
    description:
      'If you have a cartridge or DE filter, it requires a deep cleaning every 6 months. We can get you on a schedule automatically.',
  },
  {
    icon: Settings2,
    title: 'Sand Filter Change',
    price: '$250+',
    description:
      'Sand filters usually need media replacement around every 2 years to maintain filtration performance and water clarity.',
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <SiteNav />

      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://res.cloudinary.com/dmjxho2rl/image/upload/v1778302428/High-Quality-Cleaning-bg-img_nuc791.jpg"
            alt="Pool service hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-blue-950/35" />
          <div className="absolute inset-0 bg-linear-to-r from-blue-950/55 via-blue-950/30 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-blue-200 font-semibold text-sm uppercase tracking-wider mb-3">Our Services</p>
            <h1 className="text-5xl sm:text-6xl font-extrabold text-white leading-tight mb-5">
              Professional Pool & Hot Tub
              <span className="text-yellow-400"> Service Plans</span>
            </h1>
            <p className="text-xl text-white/90 max-w-2xl leading-relaxed">
              Whether you need full weekly care or one-time help, we offer reliable service options tailored to your pool and spa.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="#service-pricing" className="inline-flex items-center justify-center rounded-full bg-yellow-400 px-7 py-3 text-gray-900 font-semibold hover:bg-yellow-300 transition-colors">
                View Service Pricing <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <a href="tel:+15124150266" className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/10 px-7 py-3 text-white font-medium backdrop-blur-sm hover:bg-white/15 transition-colors">
                (512) 415-0266
              </a>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-0 inset-x-0 z-10">
          <svg viewBox="0 0 1440 120" className="w-full h-auto text-gray-50" preserveAspectRatio="none">
            <path
              fill="currentColor"
              d="M0,72L60,82.7C120,93,240,115,360,112C480,109,600,83,720,82.7C840,83,960,109,1080,112C1200,115,1320,93,1380,82.7L1440,72L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"
            ></path>
          </svg>
        </div>
      </section>

      <section id="service-pricing" className="relative pt-20 pb-16 overflow-hidden">
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

      <section className="py-20 bg-blue-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-sky-400">Repair & Specialty</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REPAIR_SPECIALTY.map((service) => {
              const Icon = service.icon
              return (
                <article key={service.title} className="rounded-2xl bg-white/95 p-7 border border-blue-100 shadow-sm">
                  <Icon className="h-7 w-7 text-sky-400 mb-4" />
                  <h3 className="text-2xl font-bold text-blue-900">{service.title}</h3>
                  <p className="text-4xl font-extrabold text-blue-800 mt-2">{service.price}</p>
                  <p className="text-sm text-gray-700 mt-4 leading-relaxed">{service.description}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://res.cloudinary.com/dmjxho2rl/image/upload/v1778302409/pool_calvkd.jpg"
            alt="Pool water background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/40" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold text-white mb-5">Need a Custom Service? Contact Us Today!</h2>
          <p className="text-white/90 text-lg max-w-3xl mx-auto">
            If you are needing any other specialty service, please reach out to us. We offer such a wide range of services, we couldn&apos;t fit them all on this list.
          </p>
          <Link href="#contact" className="inline-flex mt-8 rounded-full bg-yellow-400 px-8 py-3 text-gray-900 font-semibold hover:bg-yellow-300 transition-colors">
            Get in touch with us!
          </Link>
        </div>
      </section>

      <LeadCaptureForm />
      <SiteFooter />
      <AIChatWidget />
    </main>
  )
}
