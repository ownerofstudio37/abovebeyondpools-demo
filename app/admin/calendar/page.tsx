'use client'
import { useState } from 'react'
import { mockBookings, Booking } from '@/lib/mock-data'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Plus, ChevronLeft, ChevronRight, Clock, User, FileText } from 'lucide-react'
import { format, startOfWeek, addDays, isSameDay, parseISO, addWeeks, subWeeks } from 'date-fns'

const TYPE_COLORS = {
  consultation: 'bg-blue-100 border-blue-300 text-blue-800',
  maintenance: 'bg-green-100 border-green-300 text-green-800',
  inspection: 'bg-yellow-100 border-yellow-300 text-yellow-800',
  follow_up: 'bg-purple-100 border-purple-300 text-purple-800',
}

const HOURS = Array.from({ length: 12 }, (_, i) => i + 7) // 7am to 6pm

export default function CalendarPage() {
  const [weekStart, setWeekStart] = useState(() => startOfWeek(new Date('2026-05-06'), { weekStartsOn: 1 }))
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null)
  const weekDays = Array.from({ length: 7 }, (_, i) => addDays(weekStart, i))

  const getBookingsForDay = (day: Date) =>
    mockBookings.filter(b => isSameDay(parseISO(b.start_time), day))

  const getBookingStyle = (booking: Booking) => {
    const start = parseISO(booking.start_time)
    const end = parseISO(booking.end_time)
    const startHour = start.getHours() + start.getMinutes() / 60
    const duration = (end.getTime() - start.getTime()) / (1000 * 60 * 60)
    const top = (startHour - 7) * 64
    const height = Math.max(duration * 64, 40)
    return { top, height }
  }

  return (
    <div className="p-8 h-full flex flex-col">
      <div className="flex items-center justify-between mb-6 shrink-0">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Calendar & Bookings</h1>
          <p className="text-gray-500 text-sm mt-0.5">Schedule consultations, maintenance visits, and follow-ups</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <Button size="sm" variant="outline" onClick={() => setWeekStart(w => subWeeks(w, 1))}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <span className="text-sm font-medium px-3 min-w-36 text-center">
              {format(weekStart, 'MMM d')} – {format(addDays(weekStart, 6), 'MMM d, yyyy')}
            </span>
            <Button size="sm" variant="outline" onClick={() => setWeekStart(w => addWeeks(w, 1))}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700" size="sm">
            <Plus className="h-4 w-4 mr-1.5" /> Book Appointment
          </Button>
        </div>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-3 mb-4 shrink-0">
        {Object.entries(TYPE_COLORS).map(([type, cls]) => (
          <div key={type} className={`flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full border ${cls}`}>
            <div className={`h-2 w-2 rounded-full ${cls.split(' ')[0].replace('bg-', 'bg-').replace('-100', '-500')}`} />
            <span className="capitalize">{type.replace('_', ' ')}</span>
          </div>
        ))}
      </div>

      {/* Week grid */}
      <div className="flex-1 overflow-auto border rounded-xl bg-white shadow-sm">
        {/* Header row */}
        <div className="grid grid-cols-8 border-b sticky top-0 bg-white z-10">
          <div className="border-r p-3" />
          {weekDays.map(day => {
            const isToday = isSameDay(day, new Date('2026-05-06'))
            return (
              <div key={day.toISOString()} className={`border-r p-3 text-center ${isToday ? 'bg-blue-50' : ''}`}>
                <p className="text-xs text-gray-400 uppercase">{format(day, 'EEE')}</p>
                <p className={`text-lg font-bold mt-0.5 ${isToday ? 'text-blue-600' : 'text-gray-800'}`}>{format(day, 'd')}</p>
                <p className="text-[10px] text-gray-400">{getBookingsForDay(day).length} appt{getBookingsForDay(day).length !== 1 ? 's' : ''}</p>
              </div>
            )
          })}
        </div>

        {/* Time grid */}
        <div className="grid grid-cols-8">
          {/* Hour labels */}
          <div className="border-r">
            {HOURS.map(h => (
              <div key={h} className="h-16 border-b flex items-start p-1.5">
                <span className="text-[10px] text-gray-400">{format(new Date().setHours(h, 0), 'h a')}</span>
              </div>
            ))}
          </div>

          {/* Day columns */}
          {weekDays.map(day => {
            const dayBookings = getBookingsForDay(day)
            const isToday = isSameDay(day, new Date('2026-05-06'))
            return (
              <div key={day.toISOString()} className={`border-r relative ${isToday ? 'bg-blue-50/30' : ''}`}>
                {HOURS.map(h => <div key={h} className="h-16 border-b border-gray-100" />)}
                {dayBookings.map(booking => {
                  const { top, height } = getBookingStyle(booking)
                  const colorClass = TYPE_COLORS[booking.type]
                  return (
                    <button
                      key={booking.id}
                      title={booking.title}
                      onClick={() => setSelectedBooking(booking)}
                      className={`absolute left-1 right-1 rounded-lg border px-2 py-1 text-left overflow-hidden hover:opacity-90 transition-opacity ${colorClass}`}
                      style={{ top: `${top}px`, height: `${height}px` }}
                    >
                      <p className="text-[10px] font-semibold truncate leading-tight">{booking.title}</p>
                      <p className="text-[9px] opacity-70">{format(parseISO(booking.start_time), 'h:mm a')}</p>
                    </button>
                  )
                })}
              </div>
            )
          })}
        </div>
      </div>

      {/* Booking Detail Modal */}
      <Dialog open={!!selectedBooking} onOpenChange={() => setSelectedBooking(null)}>
        {selectedBooking && (
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle className="text-base">{selectedBooking.title}</DialogTitle>
            </DialogHeader>
            <div className="space-y-3">
              <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border ${TYPE_COLORS[selectedBooking.type]}`}>
                <span className="capitalize">{selectedBooking.type.replace('_', ' ')}</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-1"><Clock className="h-3.5 w-3.5" />Time</div>
                  <p className="text-sm font-medium">{format(parseISO(selectedBooking.start_time), 'MMM d, h:mm a')}</p>
                  <p className="text-xs text-gray-400">to {format(parseISO(selectedBooking.end_time), 'h:mm a')}</p>
                </div>
                {selectedBooking.lead_name && (
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-1"><User className="h-3.5 w-3.5" />Client</div>
                    <p className="text-sm font-medium">{selectedBooking.lead_name}</p>
                  </div>
                )}
              </div>
              {selectedBooking.notes && (
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-1"><FileText className="h-3.5 w-3.5" />Notes</div>
                  <p className="text-sm text-gray-700">{selectedBooking.notes}</p>
                </div>
              )}
              <Badge className={`${selectedBooking.status === 'confirmed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'} border-0 capitalize`}>
                {selectedBooking.status}
              </Badge>
              <div className="flex gap-2 pt-1">
                <Button className="flex-1 bg-blue-600 hover:bg-blue-700" size="sm">Edit Booking</Button>
                <Button variant="outline" size="sm" className="text-red-600 border-red-200 hover:bg-red-50">Cancel</Button>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </div>
  )
}
