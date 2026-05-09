import Image from 'next/image'

const TEAM = [
  {
    name: 'DOMINICK & IRELEND CAPUTO',
    role: 'Owners',
    photo: 'https://res.cloudinary.com/dmjxho2rl/image/upload/v1778298226/rsw_365h_365cg_truem_odsykd.webp',
    bio: 'Have been in the industry collectively for 22+ years. Irelend comes from a service, retail, and management background specializing in above ground pools while Dominick comes from a service, repair, and management background specializing in all things pools and hot tubs.',
  },
  {
    name: 'ALEX TEMPLIN',
    role: 'Lead Service Tech',
    photo: 'https://res.cloudinary.com/dmjxho2rl/image/upload/v1778298224/rsw_365h_365cg_truem-1_ggrm9e.webp',
    bio: 'Has 8+ years experience in providing service and repair in the pool and spa industry and also in management. He is a wealth of knowledge when it comes to pools and hot tubs.',
  },
  {
    name: 'MO MONTOYA',
    role: 'Service Tech',
    photo: 'https://res.cloudinary.com/dmjxho2rl/image/upload/v1778298225/rsw_365h_365cg_true_frpwi1.webp',
    bio: 'Started working with pools in 2024. He loves to ride dirt bikes and to be outdoors. He also loves the opportunity to keep pools and hot tubs beautiful and swim ready.',
  },
]

export function TeamSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-2">Our Team</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet the Professionals Behind the Work</h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">
            Local Austin pool and hot tub experts with deep service, repair, and operations experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TEAM.map((member) => (
            <article key={member.name} className="bg-gray-50 border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative aspect-square">
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                <p className="text-blue-600 font-semibold text-sm mt-1 mb-3">{member.role}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{member.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
