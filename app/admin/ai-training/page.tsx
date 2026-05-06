'use client'
import { useState } from 'react'
import { mockTrainingDocs, TrainingDoc } from '@/lib/mock-data'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Textarea } from '@/components/ui/textarea'
import {
  Brain, Upload, FileText, CheckCircle, Loader2, AlertCircle,
  Trash2, MessageSquare, Sparkles, RefreshCw
} from 'lucide-react'

const CHAT_RESPONSES: Record<string, string> = {
  default: 'Based on our training documents, Above & Beyond Pools offers a full range of services including custom inground construction, renovations, and maintenance plans. Is there something specific I can help clarify?',
  price: 'According to our Services & Pricing Guide, inground pools start at $45,000 and spa installations from $12,000. Monthly maintenance packages are available from $149/month.',
  maintenance: 'Our FAQ document covers this: we handle weekly chemical balancing, brushing, filter cleaning, and equipment inspections. Packages start at $149/month.',
  finish: 'Per our Finish Comparison Guide: Plaster (5-10 yr), Pebble Tec (15-25 yr), Fiberglass shells (25+ yr), and custom Tile. Each has different maintenance and cost profiles.',
}

function getTestResponse(q: string) {
  const lower = q.toLowerCase()
  if (lower.includes('price') || lower.includes('cost')) return CHAT_RESPONSES.price
  if (lower.includes('maintenance') || lower.includes('service')) return CHAT_RESPONSES.maintenance
  if (lower.includes('finish') || lower.includes('plaster') || lower.includes('pebble')) return CHAT_RESPONSES.finish
  return CHAT_RESPONSES.default
}

export default function AITrainingPage() {
  const [docs, setDocs] = useState<TrainingDoc[]>(mockTrainingDocs)
  const [uploading, setUploading] = useState(false)
  const [testQ, setTestQ] = useState('')
  const [testAnswer, setTestAnswer] = useState('')
  const [testing, setTesting] = useState(false)
  const [dragOver, setDragOver] = useState(false)

  const handleUpload = async (files: FileList | null) => {
    if (!files || files.length === 0) return
    setUploading(true)
    await new Promise(r => setTimeout(r, 2000))
    const newDoc: TrainingDoc = {
      id: String(docs.length + 1),
      created_at: new Date().toISOString(),
      name: files[0].name,
      file_type: files[0].type,
      status: 'active',
      chunks_count: Math.floor(Math.random() * 20) + 5,
      content_preview: 'Document processed and added to chatbot knowledge base.',
    }
    setDocs(prev => [...prev, newDoc])
    setUploading(false)
  }

  const handleTest = async () => {
    if (!testQ.trim()) return
    setTesting(true)
    setTestAnswer('')
    await new Promise(r => setTimeout(r, 1200))
    setTestAnswer(getTestResponse(testQ))
    setTesting(false)
  }

  const removeDoc = (id: string) => setDocs(prev => prev.filter(d => d.id !== id))

  const activeCount = docs.filter(d => d.status === 'active').length
  const totalChunks = docs.filter(d => d.status === 'active').reduce((sum, d) => sum + d.chunks_count, 0)

  return (
    <div className="p-8 max-w-5xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">AI Training Center</h1>
        <p className="text-gray-500 text-sm mt-0.5">Upload documents to train your Gemini-powered chatbot on Above & Beyond Pools&apos; services</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {[
          { label: 'Active Documents', value: activeCount, icon: FileText, color: 'text-blue-600', bg: 'bg-blue-50' },
          { label: 'Knowledge Chunks', value: totalChunks, icon: Brain, color: 'text-purple-600', bg: 'bg-purple-50' },
          { label: 'Model Status', value: 'Ready', icon: CheckCircle, color: 'text-green-600', bg: 'bg-green-50' },
        ].map(({ label, value, icon: Icon, color, bg }) => (
          <div key={label} className="bg-white rounded-xl border shadow-sm p-5">
            <div className={`inline-flex p-2.5 rounded-xl ${bg} mb-3`}>
              <Icon className={`h-5 w-5 ${color}`} />
            </div>
            <p className="text-2xl font-bold text-gray-900">{value}</p>
            <p className="text-sm text-gray-500 mt-0.5">{label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upload Zone */}
        <div className="bg-white rounded-xl border shadow-sm p-6">
          <h2 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Upload className="h-5 w-5 text-blue-600" />
            Upload Training Documents
          </h2>

          <div
            className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors ${dragOver ? 'border-blue-400 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}`}
            onDragOver={e => { e.preventDefault(); setDragOver(true) }}
            onDragLeave={() => setDragOver(false)}
            onDrop={e => { e.preventDefault(); setDragOver(false); handleUpload(e.dataTransfer.files) }}
          >
            {uploading ? (
              <div className="py-2">
                <Loader2 className="h-8 w-8 animate-spin text-blue-600 mx-auto mb-3" />
                <p className="text-sm text-gray-600">Processing document...</p>
                <Progress className="mt-3 h-2" value={66} />
              </div>
            ) : (
              <>
                <Brain className="h-10 w-10 text-gray-300 mx-auto mb-3" />
                <p className="text-sm font-medium text-gray-600 mb-1">Drop PDF or TXT files here</p>
                <p className="text-xs text-gray-400 mb-4">Service guides, FAQs, pricing sheets, product catalogs</p>
                <label className="cursor-pointer">
                  <input
                    type="file"
                    className="hidden"
                    accept=".pdf,.txt"
                    onChange={e => handleUpload(e.target.files)}
                  />
                  <span className="bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Browse Files
                  </span>
                </label>
              </>
            )}
          </div>

          {/* Document List */}
          <div className="mt-5 space-y-2">
            {docs.map(doc => (
              <div key={doc.id} className="flex items-start gap-3 p-3 rounded-lg border bg-gray-50">
                <div className={`h-8 w-8 rounded-lg flex items-center justify-center shrink-0 ${
                  doc.status === 'active' ? 'bg-green-100' : doc.status === 'processing' ? 'bg-yellow-100' : 'bg-red-100'
                }`}>
                  {doc.status === 'active' ? <CheckCircle className="h-4 w-4 text-green-600" /> :
                   doc.status === 'processing' ? <Loader2 className="h-4 w-4 text-yellow-600 animate-spin" /> :
                   <AlertCircle className="h-4 w-4 text-red-500" />}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-sm font-medium text-gray-800 truncate">{doc.name}</p>
                    <div className="flex items-center gap-1.5 shrink-0">
                      <Badge className={`text-[10px] border-0 ${
                        doc.status === 'active' ? 'bg-green-100 text-green-700' :
                        doc.status === 'processing' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-red-100 text-red-700'
                      }`}>{doc.status}</Badge>
                      <button
                        title="Remove document"
                        onClick={() => removeDoc(doc.id)}
                        className="p-1 rounded hover:bg-red-50 text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                  <p className="text-xs text-gray-400 mt-0.5 line-clamp-1">{doc.content_preview}</p>
                  {doc.chunks_count > 0 && (
                    <p className="text-[10px] text-gray-400 mt-0.5">{doc.chunks_count} knowledge chunks indexed</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Test the Chatbot */}
        <div className="bg-white rounded-xl border shadow-sm p-6">
          <h2 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <MessageSquare className="h-5 w-5 text-purple-600" />
            Test the AI Chatbot
          </h2>

          <div className="bg-purple-50 border border-purple-100 rounded-xl p-4 mb-4 text-sm text-purple-800">
            <Sparkles className="h-4 w-4 inline mr-1.5" />
            Ask questions to see how your chatbot responds using the uploaded training documents.
          </div>

          <div className="space-y-3">
            <Textarea
              placeholder="e.g. What are your pool finish options? How much does maintenance cost?"
              value={testQ}
              onChange={e => setTestQ(e.target.value)}
              rows={3}
              className="resize-none"
            />
            <Button
              onClick={handleTest}
              disabled={!testQ.trim() || testing}
              className="w-full bg-purple-600 hover:bg-purple-700"
            >
              {testing ? <><Loader2 className="h-4 w-4 mr-1.5 animate-spin" />Testing...</> : <><RefreshCw className="h-4 w-4 mr-1.5" />Test Response</>}
            </Button>

            {testAnswer && (
              <div className="bg-gray-50 border rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Brain className="h-4 w-4 text-purple-600" />
                  <span className="text-xs font-semibold text-purple-700">Chatbot Response</span>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">{testAnswer}</p>
              </div>
            )}
          </div>

          {/* Training tips */}
          <div className="mt-6">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Tips for Better Training</p>
            <ul className="space-y-2">
              {[
                'Upload a comprehensive FAQ document for common questions',
                'Include specific pricing ranges for accurate quotes',
                'Add product catalogs for equipment recommendations',
                'Include service area info so the bot knows your coverage',
              ].map((tip, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-gray-500">
                  <CheckCircle className="h-3.5 w-3.5 text-green-500 mt-0.5 shrink-0" />
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
