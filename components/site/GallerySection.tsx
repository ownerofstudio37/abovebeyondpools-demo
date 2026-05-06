const IMAGES = [
  { src: 'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=600&q=80', alt: 'Resort inground pool with waterfall', span: 'col-span-2 row-span-2' },
  { src: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80', alt: 'Luxury backyard pool', span: '' },
  { src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80', alt: 'Pool at sunset', span: '' },
  { src: 'https://images.unsplash.com/photo-1519315901367-f34ff9154487?w=600&q=80', alt: 'Modern geometric pool', span: '' },
  { src: 'https://images.unsplash.com/photo-1566024349612-89f5fce6a10d?w=600&q=80', alt: 'Spa and pool combo', span: '' },
  { src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80', alt: 'Freeform lagoon pool', span: '' },
]

export function GallerySection() {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-2">Our Portfolio</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Pools We&apos;re Proud Of</h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Every pool tells a story. Here are a few of our recent projects across the Phoenix metro area.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 auto-rows-48">
          {IMAGES.map((img, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-2xl group cursor-pointer ${img.span}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gray-900/0 group-hover:bg-gray-900/30 transition-colors duration-300" />
              <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="bg-white/90 text-gray-900 text-xs font-medium px-3 py-1.5 rounded-full backdrop-blur-sm">
                  {img.alt}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-gray-500 text-sm">Want to see more? <a href="#contact" className="text-blue-600 font-medium hover:underline">Contact us for our full portfolio →</a></p>
        </div>
      </div>
    </section>
  )
}
