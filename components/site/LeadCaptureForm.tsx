'use client'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { CheckCircle, Loader2 } from 'lucide-react'

export function LeadCaptureForm() {
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '', email: '', phone: '', pool_type: '', budget_range: '', timeline: '', notes: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simulate API call for demo
    await new Promise(r => setTimeout(r, 1500))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left copy */}
          <div className="text-white">
            <p className="font-semibold text-blue-200 text-sm uppercase tracking-wider mb-2">Get Started Today</p>
            <h2 className="text-4xl font-bold mb-4">Need Pool or Hot Tub Service?</h2>
            <p className="text-blue-100 text-lg mb-8 leading-relaxed">
              Tell us what you need and our team will follow up to schedule service in the Austin area.
            </p>
            <ul className="space-y-3 text-blue-100">
              {['Weekly or one-time options', 'Pool & hot tub specialists', 'Friendly, dependable technicians', 'Quick response from our team'].map(item => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-300 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            {submitted ? (
              <div className="text-center py-8">
                <div className="bg-green-100 text-green-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Thanks, {form.name.split(' ')[0]}!</h3>
                <p className="text-gray-500">We&apos;ve received your request and will reach out within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-lg font-bold text-gray-900 mb-1">Request Service</h3>

                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2 sm:col-span-1">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input id="name" required placeholder="John Smith" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="(512) 555-0100" value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input id="email" type="email" required placeholder="john@example.com" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Service Needed</Label>
                            <Select onValueChange={(v) => setForm(f => ({ ...f, pool_type: String(v || '') }))}>
                      <SelectTrigger><SelectValue placeholder="Select service" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="weekly_pool">Weekly Pool Cleaning</SelectItem>
                        <SelectItem value="weekly_hot_tub">Weekly Hot Tub Cleaning</SelectItem>
                        <SelectItem value="green_to_clean">Green-to-Clean</SelectItem>
                        <SelectItem value="one_time_clean">One-Time Clean</SelectItem>
                        <SelectItem value="repair_diagnostic">Repair Diagnostic</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Preferred Schedule</Label>
                          <Select onValueChange={(v) => setForm(f => ({ ...f, budget_range: String(v || '') }))}>
                      <SelectTrigger><SelectValue placeholder="Select timing" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="asap">As soon as possible</SelectItem>
                        <SelectItem value="this_week">This week</SelectItem>
                        <SelectItem value="next_week">Next week</SelectItem>
                        <SelectItem value="exploring">Just exploring options</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="notes">Tell Us About Your Pool/Spa</Label>
                  <Textarea id="notes" rows={3} placeholder="Share a quick description of what you need help with..." value={form.notes} onChange={e => setForm(f => ({ ...f, notes: e.target.value }))} />
                </div>

                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 py-5 text-base" disabled={loading}>
                  {loading ? <><Loader2 className="h-4 w-4 mr-2 animate-spin" /> Sending...</> : 'Request Service →'}
                </Button>

                <p className="text-xs text-gray-400 text-center">We respect your privacy. No spam, ever.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
