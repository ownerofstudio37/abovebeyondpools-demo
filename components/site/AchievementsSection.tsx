import Image from 'next/image'

export function AchievementsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-2">Achievements</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Recognized for Excellence in Austin</h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">
            Above & Beyond Pools continues to stand out for reliable service and customer care.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <article className="rounded-2xl border border-gray-100 bg-gray-50 p-6 shadow-sm">
            <p className="text-sm font-semibold text-blue-600 mb-3">Award Badge</p>
            <div className="relative w-full aspect-4/3 overflow-hidden rounded-xl bg-white">
              <Image
                src="https://res.cloudinary.com/dmjxho2rl/image/upload/v1778298224/CC25_Austin_Winner_vrmieo.jpg"
                alt="Award badge for Above & Beyond Pools"
                fill
                className="object-contain p-4"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </article>

          <article className="rounded-2xl border border-gray-100 bg-gray-50 p-6 shadow-sm">
            <p className="text-sm font-semibold text-blue-600 mb-3">At the Awards Gala</p>
            <div className="relative w-full aspect-4/3 overflow-hidden rounded-xl">
              <Image
                src="https://res.cloudinary.com/dmjxho2rl/image/upload/v1778299587/Gala_Photos_2025_Austin-140_yf0ygp.jpg"
                alt="Above & Beyond Pools team at the awards gala"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
