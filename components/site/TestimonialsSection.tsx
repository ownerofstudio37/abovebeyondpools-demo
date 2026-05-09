import Image from 'next/image'
import { Star } from 'lucide-react'

const TESTIMONIALS = [
  {
    name: 'Megan R.',
    location: 'North Austin, TX',
    rating: 5,
    text: 'Our pool went from cloudy to crystal clear and has stayed that way. Communication is great and they show up consistently every week.',
    project: 'Weekly Pool Cleaning',
    avatar: 'MR',
  },
  {
    name: 'Chris & Dana P.',
    location: 'Cedar Park, TX',
    rating: 5,
    text: 'Reliable, easy way to keep our hot tub cleaned and maintained. Highly recommend this service to save time and hassle.',
    project: 'Weekly Hot Tub Cleaning',
    avatar: 'CP',
  },
  {
    name: 'Jordan T.',
    location: 'Round Rock, TX',
    rating: 5,
    text: 'After a storm our pool turned green fast. Their green-to-clean service brought it back quickly and explained exactly what happened.',
    project: 'Green-to-Clean',
    avatar: 'JT',
  },
  {
    name: 'Alicia M.',
    location: 'South Austin, TX',
    rating: 5,
    text: 'We usually do our own pool care, but their one-time clean helped us get back on track before hosting family. Super professional team.',
    project: 'One-Time Clean',
    avatar: 'AM',
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-2">Reviews</p>
          <h2 className="text-5xl font-bold text-blue-900 mb-4">What Our Clients are Saying</h2>
          <div className="mx-auto max-w-xs rounded-3xl bg-white border border-gray-200 shadow-sm p-6">
            <div className="relative h-48 w-full mb-4">
              <Image
                src="https://res.cloudinary.com/dmjxho2rl/image/upload/v1778298224/CC25_Austin_Winner_vrmieo.jpg"
                alt="2025 Community's Choice Award Winner badge"
                fill
                className="object-contain"
                sizes="320px"
              />
            </div>
            <p className="text-3xl font-black text-gray-900">EXCELLENT</p>
            <div className="flex items-center justify-center gap-1 mt-2">
              {[1,2,3,4,5].map(i => <Star key={i} className="h-6 w-6 text-yellow-500 fill-yellow-500" />)}
            </div>
            <p className="text-sm text-gray-600 mt-2">Based on 34 reviews</p>
            <p className="text-4xl font-semibold tracking-tight mt-2">
              <span className="text-blue-500">G</span>
              <span className="text-red-500">o</span>
              <span className="text-yellow-500">o</span>
              <span className="text-blue-500">g</span>
              <span className="text-green-500">l</span>
              <span className="text-red-500">e</span>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          {TESTIMONIALS.map(t => (
            <article key={t.name} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <div className="flex gap-1 mb-4">
                {Array(t.rating).fill(0).map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mb-6 text-sm">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-gray-900 font-semibold text-sm">{t.name}</p>
                  <p className="text-gray-500 text-xs">{t.location} &middot; {t.project}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
