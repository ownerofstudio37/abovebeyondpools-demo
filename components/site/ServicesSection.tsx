import Image from 'next/image'
import { Waves, Thermometer, Sparkles, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const SERVICES = [
  {
    icon: Waves,
    title: 'Weekly Pool Cleaning',
    image: 'https://res.cloudinary.com/dmjxho2rl/image/upload/v1778298224/IMG_20240227_095855132_HDR-2-scaled_yba91o.jpg',
    desc: 'Maintain your pool effortlessly with weekly brushing, cleaner emptying, filter backwashing as needed, and chemical balancing.',
  },
  {
    icon: Thermometer,
    title: 'Hot Tub Drain & Refill',
    image: 'https://res.cloudinary.com/dmjxho2rl/image/upload/v1778299313/IMG_20240327_155955051-scaled-e1737003728212_drkzv0.jpg',
    desc: 'Keep your hot tub fresh with scheduled drain and refill service. We typically recommend this every 6-8 months.',
  },
  {
    icon: Sparkles,
    title: 'One Time Clean',
    image: 'https://res.cloudinary.com/dmjxho2rl/image/upload/v1778298700/IMG_20260204_145326_hvezkq.jpg',
    desc: 'Perfect when you need temporary help. We get your pool sparkling before guests arrive or while your schedule is packed.',
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-2">What We Do</p>
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Swimming Pool Facilities & Services</h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Whether you want us to take over your pool care completely or just help temporarily, we can help.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map(({ icon: Icon, title, desc, image }) => (
            <article key={title} className="rounded-3xl overflow-hidden bg-white shadow-sm border border-gray-200 hover:shadow-xl transition-all duration-300 group">
              <div className="relative h-52">
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                />
              </div>
              <div className="relative px-7 pb-8 pt-12">
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-500 text-white shadow-md ring-8 ring-white">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="text-3xl font-bold text-blue-900 mb-4 text-center">{title}</h3>
                <p className="text-gray-600 leading-relaxed text-center">{desc}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="https://abovebeyondpools.com/services/"
            target="_blank"
            className="inline-flex items-center justify-center rounded-full bg-yellow-400 px-8 py-4 text-gray-900 font-semibold hover:bg-yellow-300 transition-colors"
          >
            Explore all of our services and pricing <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
