import { mockStats, mockLeads, mockBookings } from '@/lib/mock-data'
import { Users, TrendingUp, Calendar, DollarSign, FileText, Star, Brain, BarChart3 } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { format } from 'date-fns'

const STAT_CARDS = [
  { label: 'Total Leads', value: mockStats.totalLeads, sub: `+${mockStats.newLeadsThisWeek} this week`, icon: Users, color: 'text-blue-600', bg: 'bg-blue-50' },
  { label: 'Won This Month', value: `$${(mockStats.wonRevenueThisMonth / 1000).toFixed(0)}K`, sub: `${mockStats.wonDealsThisMonth} deals closed`, icon: DollarSign, color: 'text-green-600', bg: 'bg-green-50' },
  { label: 'Open Proposals', value: mockStats.openProposals, sub: 'Awaiting decision', icon: TrendingUp, color: 'text-orange-600', bg: 'bg-orange-50' },
  { label: 'Avg Lead Score', value: `${mockStats.avgLeadScore}/100`, sub: 'AI-powered scoring', icon: Brain, color: 'text-purple-600', bg: 'bg-purple-50' },
  { label: 'Appointments', value: mockStats.scheduledAppointments, sub: 'Next 7 days', icon: Calendar, color: 'text-cyan-600', bg: 'bg-cyan-50' },
  { label: 'Conversion Rate', value: `${mockStats.conversionRate}%`, sub: 'Lead → Won', icon: BarChart3, color: 'text-indigo-600', bg: 'bg-indigo-50' },
  { label: 'Published Posts', value: mockStats.publishedPosts, sub: '1 draft pending', icon: FileText, color: 'text-pink-600', bg: 'bg-pink-50' },
  { label: 'AI Docs Active', value: mockStats.activeTrainingDocs, sub: 'Training chatbot', icon: Star, color: 'text-amber-600', bg: 'bg-amber-50' },
]

export default function DashboardPage() {
  const recentLeads = mockLeads.slice(0, 5)
  const upcomingBookings = mockBookings.slice(0, 4)

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-500 mt-1">Welcome back — here&apos;s what&apos;s happening at Above & Beyond Pools.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {STAT_CARDS.map(({ label, value, sub, icon: Icon, color, bg }) => (
          <Card key={label} className="border-0 shadow-sm">
            <CardContent className="p-5">
              <div className="flex items-start justify-between mb-3">
                <div className={`p-2.5 rounded-xl ${bg}`}>
                  <Icon className={`h-5 w-5 ${color}`} />
                </div>
              </div>
              <p className="text-2xl font-bold text-gray-900">{value}</p>
              <p className="text-sm font-medium text-gray-600 mt-0.5">{label}</p>
              <p className="text-xs text-gray-400 mt-0.5">{sub}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Leads */}
        <Card className="border-0 shadow-sm">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base font-semibold">Recent Leads</CardTitle>
              <Link href="/admin/crm" className="text-xs text-blue-600 hover:underline">View all →</Link>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y">
              {recentLeads.map(lead => (
                <div key={lead.id} className="flex items-center gap-3 px-6 py-3.5">
                  <div className="h-9 w-9 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-bold shrink-0">
                    {lead.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">{lead.name}</p>
                    <p className="text-xs text-gray-400 truncate">{lead.pool_type?.replace('_', ' ') || 'Not specified'} · {lead.budget_range || 'Budget TBD'}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                      lead.ai_score >= 70 ? 'bg-green-100 text-green-700' :
                      lead.ai_score >= 40 ? 'bg-yellow-100 text-yellow-700' :
                      'bg-gray-100 text-gray-500'
                    }`}>{lead.ai_score}</span>
                    <Badge variant="outline" className={`ml-1.5 text-[10px] capitalize ${
                      lead.status === 'new' ? 'border-blue-200 text-blue-600' :
                      lead.status === 'won' ? 'border-green-200 text-green-600' :
                      'border-gray-200 text-gray-500'
                    }`}>{lead.status}</Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Bookings */}
        <Card className="border-0 shadow-sm">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base font-semibold">Upcoming Appointments</CardTitle>
              <Link href="/admin/calendar" className="text-xs text-blue-600 hover:underline">View calendar →</Link>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y">
              {upcomingBookings.map(booking => (
                <div key={booking.id} className="flex items-start gap-3 px-6 py-3.5">
                  <div className="shrink-0 text-center bg-gray-50 border rounded-lg px-2.5 py-1.5 min-w-[48px]">
                    <p className="text-xs text-gray-500">{format(new Date(booking.start_time), 'MMM')}</p>
                    <p className="text-lg font-bold text-gray-900 leading-tight">{format(new Date(booking.start_time), 'd')}</p>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">{booking.title}</p>
                    <p className="text-xs text-gray-400">{format(new Date(booking.start_time), 'h:mm a')} · {booking.lead_name}</p>
                  </div>
                  <Badge className={`text-[10px] shrink-0 ${
                    booking.status === 'confirmed' ? 'bg-green-100 text-green-700 border-0' :
                    'bg-yellow-100 text-yellow-700 border-0'
                  }`}>{booking.status}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
