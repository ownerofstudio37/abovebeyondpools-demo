'use client'

import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider'

const PROJECTS = [
  {
    title: 'Pool Recovery #1',
    before: 'https://res.cloudinary.com/dmjxho2rl/image/upload/v1778298704/IMG_20260204_145117_dcfvbr.jpg',
    after: 'https://res.cloudinary.com/dmjxho2rl/image/upload/v1778298700/IMG_20260204_145326_hvezkq.jpg',
  },
  {
    title: 'Pool Recovery #2',
    before: 'https://res.cloudinary.com/dmjxho2rl/image/upload/v1778299315/IMG_20240325_115253224_HDR-scaled-e1737003715504_tp8jtn.jpg',
    after: 'https://res.cloudinary.com/dmjxho2rl/image/upload/v1778299313/IMG_20240327_155955051-scaled-e1737003728212_drkzv0.jpg',
  },
  {
    title: 'Pool Recovery #3',
    before: 'https://res.cloudinary.com/dmjxho2rl/image/upload/v1778298224/IMG_20240227_095855132_HDR-2-scaled_yba91o.jpg',
    after: 'https://res.cloudinary.com/dmjxho2rl/image/upload/v1778298225/IMG_20240305_115502670_HDR-2-scaled_twvc1r.jpg',
  },
]

function BeforeAfterCard({ title, before, after }: { title: string; before: string; after: string }) {
  return (
    <article className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
      <div className="relative aspect-4/3 overflow-hidden rounded-xl">
        <ReactCompareSlider
          className="h-full w-full"
          itemOne={
            <ReactCompareSliderImage
              src={before}
              alt={`${title} before`}
            />
          }
          itemTwo={
            <ReactCompareSliderImage
              src={after}
              alt={`${title} after`}
            />
          }
        />
        <div className="pointer-events-none absolute top-3 left-3 bg-black/70 text-white text-[11px] font-semibold px-2 py-1 rounded-md">Before</div>
        <div className="pointer-events-none absolute top-3 right-3 bg-blue-600/90 text-white text-[11px] font-semibold px-2 py-1 rounded-md">After</div>
      </div>
      <p className="text-sm font-semibold text-gray-800 mt-4 px-1">{title}</p>
    </article>
  )
}

export function BeforeAfterShowcase() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-2">Before & After</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">See the Difference</h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">
            Drag each slider to compare real cleanup results from Above & Beyond Pools projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <BeforeAfterCard
              key={project.title}
              title={project.title}
              before={project.before}
              after={project.after}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
