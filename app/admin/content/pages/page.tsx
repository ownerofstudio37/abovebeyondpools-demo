'use client'
import { useState } from 'react'
import { mockPages, SitePage, PageBlock } from '@/lib/mock-data'
import { Button } from '@/components/ui/button'
// import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Plus, Trash2, GripVertical, Eye, Globe, PlusCircle, Type, Image, MousePointerClick, Star, AlignLeft } from 'lucide-react'

const BLOCK_TYPES = [
  { type: 'hero', label: 'Hero Banner', icon: Image, desc: 'Full-width header with CTA' },
  { type: 'text', label: 'Text Block', icon: Type, desc: 'Rich text paragraph' },
  { type: 'features', label: 'Features List', icon: Star, desc: 'Icon + text grid' },
  { type: 'cta', label: 'Call to Action', icon: MousePointerClick, desc: 'Button with headline' },
  { type: 'testimonial', label: 'Testimonial', icon: AlignLeft, desc: 'Customer quote' },
  { type: 'image', label: 'Image Block', icon: Image, desc: 'Full-width image' },
] as const

function BlockPreview({ block }: { block: PageBlock }) {
  if (block.type === 'hero') return (
    <div className="bg-linear-to-r from-blue-600 to-blue-800 text-white rounded-lg p-6">
      <p className="text-lg font-bold mb-1">{block.content.heading || 'Hero Heading'}</p>
      <p className="text-blue-200 text-sm mb-3">{block.content.subheading || 'Subheading text'}</p>
      <button className="bg-white text-blue-600 text-xs font-semibold px-4 py-2 rounded-lg">{block.content.cta || 'Call to Action'}</button>
    </div>
  )
  if (block.type === 'features') return (
    <div className="bg-gray-50 rounded-lg p-4">
      <p className="font-semibold text-gray-800 mb-3 text-sm">{block.content.title || 'Features Title'}</p>
      <div className="grid grid-cols-2 gap-2">
        {[block.content.feature1, block.content.feature2, block.content.feature3, block.content.feature4]
          .filter(Boolean).map((f, i) => <p key={i} className="text-xs text-gray-600">{f}</p>)}
      </div>
    </div>
  )
  if (block.type === 'cta') return (
    <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 text-center">
      <p className="font-semibold text-gray-800 mb-1 text-sm">{block.content.heading || 'CTA Heading'}</p>
      <p className="text-xs text-gray-500 mb-3">{block.content.subheading}</p>
      <button className="bg-blue-600 text-white text-xs font-semibold px-4 py-2 rounded-lg">{block.content.buttonText || 'Click Here'}</button>
    </div>
  )
  if (block.type === 'text') return (
    <div className="bg-white border rounded-lg p-4">
      <p className="text-sm text-gray-600 line-clamp-3">{block.content.body || 'Text content block...'}</p>
    </div>
  )
  return <div className="bg-gray-100 rounded-lg p-4 text-center text-sm text-gray-500">[{block.type} block]</div>
}

function PageBuilderModal({ page, onClose }: { page: SitePage; onClose: () => void }) {
  const [blocks, setBlocks] = useState<PageBlock[]>(page.blocks)
  const [saved, setSaved] = useState(false)

  const addBlock = (type: PageBlock['type']) => {
    const newBlock: PageBlock = {
      id: crypto.randomUUID(),
      type,
      content: {},
    }
    setBlocks(prev => [...prev, newBlock])
  }

  const removeBlock = (id: string) => setBlocks(prev => prev.filter(b => b.id !== id))

  const save = async () => {
    await new Promise(r => setTimeout(r, 500))
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <DialogContent className="max-w-5xl h-[90vh] flex flex-col">
      <DialogHeader className="shrink-0">
        <DialogTitle>Page Builder — {page.title}</DialogTitle>
      </DialogHeader>

      <div className="flex-1 flex gap-4 overflow-hidden">
        {/* Block Palette */}
        <div className="w-56 shrink-0 overflow-y-auto">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Add Blocks</p>
          <div className="space-y-1.5">
            {BLOCK_TYPES.map(({ type, label, icon: Icon, desc }) => (
              <button
                key={type}
                onClick={() => addBlock(type as PageBlock['type'])}
                className="w-full flex items-start gap-2.5 p-2.5 rounded-lg border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition-all text-left group"
              >
                <div className="bg-gray-100 group-hover:bg-blue-100 rounded-lg p-1.5 shrink-0 mt-0.5">
                  <Icon className="h-3.5 w-3.5 text-gray-500 group-hover:text-blue-600" />
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-700 group-hover:text-blue-700">{label}</p>
                  <p className="text-[10px] text-gray-400">{desc}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Canvas */}
        <div className="flex-1 overflow-y-auto border rounded-xl bg-gray-50 p-4 space-y-3">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Canvas — /{page.slug}</p>
            <Badge className={page.status === 'published' ? 'bg-green-100 text-green-700 border-0' : 'bg-yellow-100 text-yellow-700 border-0'}>
              {page.status}
            </Badge>
          </div>

          {blocks.length === 0 && (
            <div className="text-center py-16 border-2 border-dashed border-gray-200 rounded-xl">
              <PlusCircle className="h-8 w-8 text-gray-300 mx-auto mb-2" />
              <p className="text-sm text-gray-400">Add blocks from the palette →</p>
            </div>
          )}

          {blocks.map((block, idx) => (
            <div key={block.id} className="group relative bg-white rounded-xl border shadow-sm overflow-hidden hover:border-blue-200 transition-colors">
              <div className="absolute left-0 top-0 bottom-0 w-8 bg-gray-50 border-r flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-grab">
                <GripVertical className="h-4 w-4 text-gray-400" />
              </div>
              <div className="pl-10 pr-10 py-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-semibold text-blue-600 uppercase tracking-wider">{block.type}</span>
                  <span className="text-[10px] text-gray-400">Block {idx + 1}</span>
                </div>
                <BlockPreview block={block} />
              </div>
              <button
                onClick={() => removeBlock(block.id)}
                className="absolute right-2 top-2 p-1.5 rounded-lg bg-white border shadow-sm opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-50 hover:border-red-200"
              >
                <Trash2 className="h-3.5 w-3.5 text-red-400" />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-2 pt-3 border-t shrink-0">
        <Button onClick={save} className="bg-blue-600 hover:bg-blue-700">
          {saved ? '✓ Saved!' : 'Save Changes'}
        </Button>
        <Button variant="outline"><Eye className="h-4 w-4 mr-1.5" />Preview</Button>
        <Button variant="outline" className="text-green-700 border-green-200 hover:bg-green-50">
          <Globe className="h-4 w-4 mr-1.5" />Publish
        </Button>
        <Button variant="ghost" onClick={onClose} className="ml-auto">Close</Button>
      </div>
    </DialogContent>
  )
}

export default function PageBuilderPage() {
  const [pages] = useState<SitePage[]>(mockPages)
  const [editPage, setEditPage] = useState<SitePage | null>(null)

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Visual Page Builder</h1>
          <p className="text-gray-500 text-sm mt-0.5">Drag-and-drop landing pages — no code needed</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="h-4 w-4 mr-1.5" /> New Page
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {pages.map(page => (
          <div key={page.id} className="bg-white rounded-xl border shadow-sm overflow-hidden hover:shadow-md transition-shadow group">
            {/* Preview thumbnail */}
            <div className="h-40 bg-linear-to-br from-blue-500 to-blue-700 relative overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                {page.blocks.slice(0, 1).map(b => (
                  <div key={b.id} className="m-4 bg-white/30 rounded-lg h-16" />
                ))}
                <div className="mx-4 bg-white/20 rounded h-6 mb-2" />
                <div className="mx-4 bg-white/20 rounded h-4 mb-2 w-3/4" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <p className="font-bold text-sm">{page.title}</p>
                  <p className="text-xs text-blue-200 mt-1">/{page.slug}</p>
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <p className="font-semibold text-gray-800 text-sm">{page.title}</p>
                <Badge className={`text-[10px] border-0 ${page.status === 'published' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                  {page.status}
                </Badge>
              </div>
              <p className="text-xs text-gray-400 mb-4">{page.blocks.length} blocks · /{page.slug}</p>
              <Button size="sm" className="w-full" variant="outline" onClick={() => setEditPage(page)}>
                Open Editor
              </Button>
            </div>
          </div>
        ))}

        {/* New page card */}
        <button
          onClick={() => setEditPage({ id: 'new', title: 'New Page', slug: 'new-page', blocks: [], status: 'draft' })}
          className="border-2 border-dashed border-gray-200 rounded-xl h-72 flex flex-col items-center justify-center gap-2 text-gray-400 hover:border-blue-300 hover:text-blue-500 transition-colors"
        >
          <PlusCircle className="h-8 w-8" />
          <p className="text-sm font-medium">Create New Page</p>
        </button>
      </div>

      <Dialog open={!!editPage} onOpenChange={() => setEditPage(null)}>
        {editPage && <PageBuilderModal page={editPage} onClose={() => setEditPage(null)} />}
      </Dialog>
    </div>
  )
}
