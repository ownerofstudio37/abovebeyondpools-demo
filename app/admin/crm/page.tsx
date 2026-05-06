'use client'
import { useState } from 'react'
import { mockLeads, Lead, LeadStatus } from '@/lib/mock-data'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Card, CardContent } from '@/components/ui/card'
import { Search, Plus, Phone, Mail, Brain, Waves, Calendar, DollarSign } from 'lucide-react'
import { format } from 'date-fns'

const STAGES: { key: LeadStatus; label: string; color: string; dot: string }[] = [
  { key: 'new', label: 'New', color: 'bg-blue-50 border-blue-100', dot: 'bg-blue-500' },
  { key: 'contacted', label: 'Contacted', color: 'bg-yellow-50 border-yellow-100', dot: 'bg-yellow-500' },
  { key: 'qualified', label: 'Qualified', color: 'bg-purple-50 border-purple-100', dot: 'bg-purple-500' },
  { key: 'proposal', label: 'Proposal', color: 'bg-orange-50 border-orange-100', dot: 'bg-orange-500' },
  { key: 'won', label: 'Won', color: 'bg-green-50 border-green-100', dot: 'bg-green-500' },
  { key: 'lost', label: 'Lost', color: 'bg-gray-50 border-gray-200', dot: 'bg-gray-400' },
]

function ScoreBadge({ score }: { score: number }) {
  const cls = score >= 70 ? 'bg-green-100 text-green-700' : score >= 40 ? 'bg-yellow-100 text-yellow-700' : 'bg-gray-100 text-gray-500'
  return <span className={`text-xs font-bold px-1.5 py-0.5 rounded-md ${cls}`}>{score}</span>
}

function LeadCard({ lead, onClick }: { lead: Lead; onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-xl border shadow-sm p-3.5 cursor-pointer hover:shadow-md hover:-translate-y-0.5 transition-all"
    >
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-center gap-2 min-w-0">
          <div className="h-8 w-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-bold shrink-0">
            {lead.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
          </div>
          <div className="min-w-0">
            <p className="text-sm font-semibold text-gray-900 truncate">{lead.name}</p>
            <p className="text-xs text-gray-400 truncate">{lead.email}</p>
          </div>
        </div>
        <ScoreBadge score={lead.ai_score} />
      </div>

      <div className="flex flex-wrap gap-1 mt-2">
        {lead.pool_type && (
          <Badge variant="outline" className="text-[10px] capitalize py-0 h-5">
            {lead.pool_type.replace('_', ' ')}
          </Badge>
        )}
        {lead.budget_range && (
          <Badge variant="outline" className="text-[10px] py-0 h-5 text-green-700 border-green-200">
            {lead.budget_range}
          </Badge>
        )}
      </div>

      {lead.timeline && (
        <p className="text-[11px] text-gray-400 mt-1.5">⏱ {lead.timeline}</p>
      )}
    </div>
  )
}

function LeadDetailModal({ lead, onClose }: { lead: Lead; onClose: () => void }) {
  return (
    <DialogContent className="max-w-lg">
      <DialogHeader>
        <DialogTitle className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-sm font-bold">
            {lead.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
          </div>
          {lead.name}
        </DialogTitle>
      </DialogHeader>

      <div className="space-y-4">
        {/* Contact */}
        <div className="flex flex-wrap gap-3">
          <a href={`mailto:${lead.email}`} className="flex items-center gap-1.5 text-sm text-blue-600 hover:underline">
            <Mail className="h-4 w-4" /> {lead.email}
          </a>
          {lead.phone && (
            <a href={`tel:${lead.phone}`} className="flex items-center gap-1.5 text-sm text-blue-600 hover:underline">
              <Phone className="h-4 w-4" /> {lead.phone}
            </a>
          )}
        </div>

        {/* AI Score */}
        <Card className="border-purple-100 bg-purple-50">
          <CardContent className="p-4">
            <div className="flex items-center gap-2 mb-1">
              <Brain className="h-4 w-4 text-purple-600" />
              <span className="text-sm font-semibold text-purple-900">AI Lead Score</span>
              <span className={`ml-auto text-lg font-bold ${lead.ai_score >= 70 ? 'text-green-600' : lead.ai_score >= 40 ? 'text-yellow-600' : 'text-gray-500'}`}>
                {lead.ai_score}/100
              </span>
            </div>
            <p className="text-xs text-purple-700">{lead.ai_reasoning}</p>
          </CardContent>
        </Card>

        {/* Pool Details */}
        <div className="grid grid-cols-2 gap-3">
          {[
            { label: 'Pool Type', value: lead.pool_type?.replace('_', ' '), icon: Waves },
            { label: 'Budget', value: lead.budget_range, icon: DollarSign },
            { label: 'Timeline', value: lead.timeline, icon: Calendar },
            { label: 'Finish', value: lead.finish_type, icon: null },
          ].filter(i => i.value).map(({ label, value, icon: Icon }) => (
            <div key={label} className="bg-gray-50 rounded-lg p-3">
              <p className="text-xs text-gray-400 mb-0.5">{label}</p>
              <div className="flex items-center gap-1.5">
                {Icon && <Icon className="h-3.5 w-3.5 text-gray-400" />}
                <p className="text-sm font-medium text-gray-800 capitalize">{value}</p>
              </div>
            </div>
          ))}
        </div>

        {lead.pool_length && (
          <div className="bg-gray-50 rounded-lg p-3">
            <p className="text-xs text-gray-400 mb-1">Pool Dimensions</p>
            <p className="text-sm font-medium text-gray-800">
              {lead.pool_length}&apos; × {lead.pool_width}&apos;
              {lead.pool_depth && ` × ${lead.pool_depth}&apos; deep`}
            </p>
          </div>
        )}

        {lead.notes && (
          <div>
            <p className="text-xs text-gray-400 mb-1">Notes</p>
            <p className="text-sm text-gray-700 leading-relaxed">{lead.notes}</p>
          </div>
        )}

        <div className="flex gap-2 pt-2">
          <Button className="flex-1 bg-blue-600 hover:bg-blue-700" size="sm">
            <Phone className="h-4 w-4 mr-1.5" /> Call
          </Button>
          <Button variant="outline" className="flex-1" size="sm">
            <Mail className="h-4 w-4 mr-1.5" /> Email
          </Button>
          <Button variant="outline" className="flex-1" size="sm">
            <Calendar className="h-4 w-4 mr-1.5" /> Book
          </Button>
        </div>

        <p className="text-xs text-gray-400 text-center">Lead added {format(new Date(lead.created_at), 'MMM d, yyyy')} via {lead.source}</p>
      </div>
    </DialogContent>
  )
}

export default function CRMPage() {
  const [leads, setLeads] = useState<Lead[]>(mockLeads)
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null)
  const [search, setSearch] = useState('')

  const filtered = leads.filter(l =>
    l.name.toLowerCase().includes(search.toLowerCase()) ||
    l.email.toLowerCase().includes(search.toLowerCase())
  )

  const moveCard = (leadId: string, newStatus: LeadStatus) => {
    setLeads(prev => prev.map(l => l.id === leadId ? { ...l, status: newStatus } : l))
  }

  return (
    <div className="p-8 h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">CRM — Lead Pipeline</h1>
          <p className="text-gray-500 text-sm mt-0.5">{leads.length} leads · AI-scored and tracked</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search leads..."
              className="pl-9 w-56 bg-white"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700" size="sm">
            <Plus className="h-4 w-4 mr-1.5" /> Add Lead
          </Button>
        </div>
      </div>

      {/* Kanban */}
      <div className="flex gap-4 overflow-x-auto pb-4 flex-1">
        {STAGES.map(stage => {
          const stageLeads = filtered.filter(l => l.status === stage.key)
          return (
            <div key={stage.key} className="shrink-0 w-64 flex flex-col">
              <div className="flex items-center gap-2 mb-3 px-1">
                <div className={`h-2 w-2 rounded-full ${stage.dot}`} />
                <h3 className="font-semibold text-sm text-gray-700">{stage.label}</h3>
                <span className="ml-auto bg-gray-100 text-gray-600 text-xs font-medium px-2 py-0.5 rounded-full">{stageLeads.length}</span>
              </div>

              <div className={`flex-1 rounded-xl border-2 p-2 space-y-2 min-h-32 ${stage.color}`}>
                {stageLeads.map(lead => (
                  <div key={lead.id}>
                    <LeadCard lead={lead} onClick={() => setSelectedLead(lead)} />
                    <select
                      className="mt-1 w-full text-[11px] border border-gray-200 rounded-lg px-2 py-1 bg-white text-gray-500 cursor-pointer"
                      value={lead.status}
                      onChange={e => moveCard(lead.id, e.target.value as LeadStatus)}
                      onClick={e => e.stopPropagation()}
                    >
                      {STAGES.map(s => <option key={s.key} value={s.key}>{s.label}</option>)}
                    </select>
                  </div>
                ))}
                {stageLeads.length === 0 && (
                  <div className="text-center py-6 text-xs text-gray-400">No leads in this stage</div>
                )}
              </div>
            </div>
          )
        })}
      </div>

      {/* Lead Detail Modal */}
      <Dialog open={!!selectedLead} onOpenChange={() => setSelectedLead(null)}>
        {selectedLead && <LeadDetailModal lead={selectedLead} onClose={() => setSelectedLead(null)} />}
      </Dialog>
    </div>
  )
}
