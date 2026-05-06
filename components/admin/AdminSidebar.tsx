'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  LayoutDashboard, Users, FileText, Calendar, Brain,
  Waves, Settings, Globe, ChevronRight, BarChart3
} from 'lucide-react'

const NAV = [
  { label: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
  { label: 'CRM / Leads', href: '/admin/crm', icon: Users },
  { label: 'Blog Manager', href: '/admin/content/blog', icon: FileText },
  { label: 'Page Builder', href: '/admin/content/pages', icon: Globe },
  { label: 'Calendar', href: '/admin/calendar', icon: Calendar },
  { label: 'AI Training', href: '/admin/ai-training', icon: Brain },
  { label: 'Analytics', href: '/admin/dashboard', icon: BarChart3 },
  { label: 'Settings', href: '/admin/dashboard', icon: Settings },
]

export function AdminSidebar() {
  const pathname = usePathname()
  return (
    <aside className="w-64 bg-gray-900 text-white flex flex-col h-full shrink-0">
      {/* Logo */}
      <div className="p-5 border-b border-gray-800">
        <div className="flex items-center gap-2.5">
          <div className="bg-blue-600 rounded-lg p-1.5">
            <Waves className="h-5 w-5" />
          </div>
          <div>
            <p className="font-bold text-sm leading-tight">Above & Beyond</p>
            <p className="text-[10px] text-blue-400 uppercase tracking-wide">Business OS</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {NAV.map(({ label, href, icon: Icon }) => {
          const active = pathname === href || (href !== '/admin/dashboard' && pathname.startsWith(href))
          return (
            <Link
              key={label}
              href={href}
              className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-all group ${
                active
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-400 hover:bg-gray-800 hover:text-white'
              }`}
            >
              <div className="flex items-center gap-3">
                <Icon className="h-4 w-4" />
                {label}
              </div>
              {active && <ChevronRight className="h-3.5 w-3.5 opacity-60" />}
            </Link>
          )
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-800">
        <div className="flex items-center gap-3 px-3 py-2">
          <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold">
            JD
          </div>
          <div className="min-w-0">
            <p className="text-sm font-medium text-white truncate">John Doe</p>
            <p className="text-xs text-gray-400 truncate">Admin</p>
          </div>
        </div>
        <Link href="/" className="mt-2 flex items-center gap-2 px-3 py-2 text-xs text-gray-500 hover:text-gray-300 transition-colors rounded-lg hover:bg-gray-800">
          <Globe className="h-3.5 w-3.5" />
          View Public Site
        </Link>
      </div>
    </aside>
  )
}
