const IMAGES = [
  { src: 'https://res.cloudinary.com/dmjxho2rl/image/upload/v1778302419/SERVICES-BG_ewnofq.jpg', alt: 'Clear blue resort-style pool water', span: 'col-span-2 row-span-2' },
  { src: 'https://res.cloudinary.com/dmjxho2rl/image/upload/v1778302428/High-Quality-Cleaning-bg-img_nuc791.jpg', alt: 'Sparkling clean swimming pool', span: '' },
  { src: 'https://res.cloudinary.com/dmjxho2rl/image/upload/v1778302444/stair-swimming-pool-beautiful-luxury-hotel-pool-resort_1339-5455_py3saj.jpg', alt: 'Luxury pool stair entry view', span: '' },
  { src: 'https://res.cloudinary.com/dmjxho2rl/image/upload/v1778302440/rain-drops-on-the-swimming-pool-_rw1qmm.jpg', alt: 'Water texture close-up', span: '' },
  { src: 'https://res.cloudinary.com/dmjxho2rl/image/upload/v1778302414/relaxing-in-the-pool_mophdw.jpg', alt: 'Relaxing in a clean pool', span: '' },
  { src: 'https://res.cloudinary.com/dmjxho2rl/image/upload/v1778302415/smiling-family-with-mature-parents-and-adult-offspring-on-summer-holiday-in-swimming-pool-on-airbed_jn3fhp.jpg', alt: 'Family enjoying pool day', span: '' },
]

export function GallerySection() {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-2">Before & After</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Witness the Stunning Results</h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Check out these examples to see how we revitalize pools and hot tubs, making them clean, clear, and swim-ready.
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
