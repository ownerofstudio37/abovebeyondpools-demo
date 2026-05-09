import Link from 'next/link'
import Image from 'next/image'

export function SiteFooter() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="rounded-md bg-white px-2 py-1">
                <Image
                  src="https://res.cloudinary.com/dmjxho2rl/image/upload/v1778062388/aboveandbeyond-logo_alqiyj.webp"
                  alt="Above & Beyond Pools logo"
                  width={240}
                  height={74}
                  className="h-12 w-auto"
                />
              </div>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              We keep your pool and spa looking beautiful and clear so all you have to do is relax.
            </p>
            <div className="mt-4">
              <p className="text-white font-semibold text-sm">(512) 415-0266</p>
              <p className="text-sm">info@abovebeyondpools.com</p>
              <p className="text-sm">Servicing the greater Austin area</p>
            </div>
          </div>
          <div>
            <p className="text-white font-semibold text-sm mb-4">Services</p>
            <ul className="space-y-2 text-sm">
              {['Weekly Pool Cleaning','Weekly Hot Tub Cleaning','Green-to-Clean','One-Time Clean','Repair Diagnostic','Filter Cleans'].map(s => (
                <li key={s}><Link href="#services" className="hover:text-blue-400 transition-colors">{s}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-white font-semibold text-sm mb-4">Company</p>
            <ul className="space-y-2 text-sm">
              {['About Us','Gallery','Blog','Contact','Privacy Policy'].map(s => (
                <li key={s}><Link href="#" className="hover:text-blue-400 transition-colors">{s}</Link></li>
              ))}
            </ul>
            <div className="mt-6">
              <Link href="/admin/dashboard" className="text-xs text-gray-600 hover:text-gray-400 transition-colors">
                Admin Login →
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>&copy; 2026 Above & Beyond Pools & Spas. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
