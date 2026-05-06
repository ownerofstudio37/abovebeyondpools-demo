import { Waves, Thermometer, Sparkles, Wrench, GraduationCap, Filter } from 'lucide-react'

const SERVICES = [
  {
    icon: Waves,
    title: 'Weekly Pool Cleaning',
    desc: 'Consistent weekly care including brushing walls/floor/tile, emptying cleaners, backwashing filters as needed, and chemical testing/balancing.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: Thermometer,
    title: 'Weekly Hot Tub Cleaning',
    desc: 'Professional weekly hot tub care with cartridge filter rinse and water chemistry balancing to keep your spa clear and ready.',
    color: 'bg-cyan-50 text-cyan-600',
  },
  {
    icon: Sparkles,
    title: 'Green-to-Clean Service',
    desc: 'If your pool has turned green, we can help rescue it with a targeted recovery process that restores clean, usable water.',
    color: 'bg-indigo-50 text-indigo-600',
  },
  {
    icon: Wrench,
    title: 'Repair & Specialty',
    desc: 'Repair diagnostics, filter cleans, and sand filter changes performed by experienced techs who know pools and hot tubs.',
    color: 'bg-violet-50 text-violet-600',
  },
  {
    icon: Filter,
    title: 'One-Time & Add-On Services',
    desc: 'Need temporary help? Book one-time cleanings, hot tub drain & refill, or add-on services when your schedule gets busy.',
    color: 'bg-amber-50 text-amber-600',
  },
  {
    icon: GraduationCap,
    title: 'Pool & Spa School',
    desc: 'Hands-on guidance for owners who want to understand proper care routines, chemistry basics, and equipment best practices.',
    color: 'bg-teal-50 text-teal-600',
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-2">What We Do</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Pool & Hot Tub Services</h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Whether you need full-service care or temporary help, we provide popular services for pools and spas across Austin.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map(({ icon: Icon, title, desc, color }) => (
            <div key={title} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
              <div className={`inline-flex p-3 rounded-xl ${color} mb-5`}>
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{title}</h3>
              <p className="text-gray-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
