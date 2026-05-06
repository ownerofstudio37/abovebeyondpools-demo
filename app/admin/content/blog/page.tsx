'use client'
import { useState } from 'react'
import { mockPosts, Post } from '@/lib/mock-data'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Plus, Edit, Eye, Bot, Loader2, Sparkles, FileText, CheckCircle, Clock } from 'lucide-react'
import { format } from 'date-fns'

const AI_DEMO_POSTS: Record<string, Partial<Post>> = {
  'pool maintenance tips': {
    title: '7 Essential Pool Maintenance Tips Every Arizona Homeowner Needs',
    excerpt: 'Arizona\'s extreme heat and UV intensity create unique challenges for pool owners. These expert tips will keep your water crystal clear all year long.',
    content: `# 7 Essential Pool Maintenance Tips Every Arizona Homeowner Needs\n\nArizona's desert climate is tough on pools. With temperatures regularly hitting 115°F and intense UV radiation, your pool chemistry and equipment work overtime. Here's how to stay ahead of it.\n\n## 1. Test Water Chemistry 3x Per Week in Summer\nHigh heat accelerates chemical breakdown. pH should stay between 7.2–7.6, and chlorine between 1–3 ppm. In peak summer, test every other day.\n\n## 2. Run Your Pump During Off-Peak Hours\nArizona utilities charge more during peak hours (3–8 PM). Schedule your pump for overnight or early morning. Your pool stays clean and your bill drops.\n\n## 3. Shock Weekly During June–September\nUV rays destroy free chlorine rapidly. Weekly shocking keeps algae from taking hold even in 110°F weather.\n\n## 4. Keep the Filter Backwashed\nA clogged filter strains your pump and returns dirty water. Check pressure gauges and backwash when pressure rises 8–10 psi above baseline.\n\n## 5. Maintain Cyanuric Acid (Stabilizer) Levels\nCyanuric acid protects chlorine from UV degradation. Target 30–50 ppm for outdoor pools. Without it, you'll burn through chlorine in hours.\n\n## 6. Brush Walls Weekly to Prevent Calcium Scale\nHard water + heat = calcium buildup on your pool surfaces. Weekly brushing keeps it from staining and damaging your finish.\n\n## 7. Schedule a Pro Service Monthly\nEven diligent homeowners miss things. A professional technician will catch equipment issues, balance chemistry precisely, and extend the life of your investment.\n\n**Above & Beyond Pools** offers maintenance packages from $149/month. Contact us today!`,
    tags: ['maintenance', 'arizona', 'tips', 'summer', 'AI Generated'],
  },
}

function AIGenerateModal({ onClose, onInsert }: { onClose: () => void; onInsert: (post: Partial<Post>) => void }) {
  const [topic, setTopic] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<Partial<Post> | null>(null)

  const generate = async () => {
    if (!topic.trim()) return
    setLoading(true)
    await new Promise(r => setTimeout(r, 2200))
    const key = Object.keys(AI_DEMO_POSTS).find(k => topic.toLowerCase().includes(k.split(' ')[0]))
    setResult(AI_DEMO_POSTS[key || 'pool maintenance tips'])
    setLoading(false)
  }

  return (
    <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
      <DialogHeader>
        <DialogTitle className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-purple-600" />
          AI Blog Draft Generator
        </DialogTitle>
      </DialogHeader>

      <div className="space-y-4">
        <div className="bg-purple-50 border border-purple-100 rounded-xl p-4 text-sm text-purple-800">
          <strong>Powered by Gemini AI</strong> — Enter a topic and our AI will write a full, SEO-optimized blog post based on Above & Beyond Pools&apos; service offerings and expertise.
        </div>

        <div className="flex gap-2">
          <Input
            placeholder="e.g. pool maintenance tips for arizona summers..."
            value={topic}
            onChange={e => setTopic(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && generate()}
            className="flex-1"
          />
          <Button onClick={generate} disabled={loading || !topic} className="bg-purple-600 hover:bg-purple-700 shrink-0">
            {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <><Bot className="h-4 w-4 mr-1.5" />Generate</>}
          </Button>
        </div>

        {loading && (
          <div className="text-center py-8">
            <Loader2 className="h-8 w-8 animate-spin text-purple-600 mx-auto mb-3" />
            <p className="text-sm text-gray-600">Gemini AI is writing your blog post...</p>
            <p className="text-xs text-gray-400 mt-1">Analyzing your training documents and crafting SEO-optimized content</p>
          </div>
        )}

        {result && !loading && (
          <div className="border rounded-xl overflow-hidden">
            <div className="bg-green-50 border-b border-green-100 px-4 py-2.5 flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <span className="text-sm font-medium text-green-800">Draft generated successfully!</span>
            </div>
            <div className="p-4 space-y-3">
              <div>
                <p className="text-xs text-gray-400 mb-1">Title</p>
                <p className="font-semibold text-gray-900">{result.title}</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 mb-1">Excerpt</p>
                <p className="text-sm text-gray-600">{result.excerpt}</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 mb-1">Tags</p>
                <div className="flex flex-wrap gap-1">
                  {result.tags?.map(t => <Badge key={t} variant="secondary" className="text-xs">{t}</Badge>)}
                </div>
              </div>
              <div>
                <p className="text-xs text-gray-400 mb-1">Content Preview</p>
                <div className="bg-gray-50 rounded-lg p-3 max-h-32 overflow-y-auto">
                  <pre className="text-xs text-gray-600 whitespace-pre-wrap font-sans">{result.content?.slice(0, 400)}...</pre>
                </div>
              </div>
              <Button onClick={() => { onInsert(result); onClose() }} className="w-full bg-blue-600 hover:bg-blue-700">
                <FileText className="h-4 w-4 mr-1.5" /> Open in Editor
              </Button>
            </div>
          </div>
        )}
      </div>
    </DialogContent>
  )
}

function PostEditor({ post, onClose }: { post: Partial<Post>; onClose: () => void }) {
  const [title, setTitle] = useState(post.title || '')
  const [content, setContent] = useState(post.content || '')
  const [saved, setSaved] = useState(false)

  const save = async () => {
    await new Promise(r => setTimeout(r, 600))
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <DialogContent className="max-w-4xl h-[90vh] flex flex-col">
      <DialogHeader className="shrink-0">
        <DialogTitle>Blog Editor</DialogTitle>
      </DialogHeader>
      <div className="flex-1 flex flex-col gap-3 overflow-hidden">
        <Input
          value={title}
          onChange={e => setTitle(e.target.value)}
          className="text-lg font-semibold border-0 border-b rounded-none px-0 focus-visible:ring-0"
          placeholder="Post title..."
        />
        <Textarea
          value={content}
          onChange={e => setContent(e.target.value)}
          className="flex-1 resize-none font-mono text-sm border rounded-xl"
          placeholder="Write your content in Markdown..."
        />
        <div className="flex gap-2 shrink-0">
          <Button onClick={save} className="bg-blue-600 hover:bg-blue-700">
            {saved ? <><CheckCircle className="h-4 w-4 mr-1.5" />Saved!</> : 'Save Draft'}
          </Button>
          <Button variant="outline" onClick={save}>Publish Post</Button>
          <Button variant="ghost" onClick={onClose} className="ml-auto">Cancel</Button>
        </div>
      </div>
    </DialogContent>
  )
}

export default function BlogManagerPage() {
  const [posts, setPosts] = useState<Post[]>(mockPosts)
  const [showAI, setShowAI] = useState(false)
  const [editPost, setEditPost] = useState<Partial<Post> | null>(null)

  const handleAIInsert = (draft: Partial<Post>) => {
    setEditPost(draft)
  }

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Blog Manager</h1>
          <p className="text-gray-500 text-sm mt-0.5">{posts.filter(p => p.status === 'published').length} published · {posts.filter(p => p.status === 'draft').length} drafts</p>
        </div>
        <div className="flex gap-2">
          <Button onClick={() => setShowAI(true)} variant="outline" className="border-purple-200 text-purple-700 hover:bg-purple-50">
            <Sparkles className="h-4 w-4 mr-1.5" /> AI Draft
          </Button>
          <Button onClick={() => setEditPost({})} className="bg-blue-600 hover:bg-blue-700">
            <Plus className="h-4 w-4 mr-1.5" /> New Post
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all">
        <TabsList className="mb-6">
          <TabsTrigger value="all">All Posts ({posts.length})</TabsTrigger>
          <TabsTrigger value="published">Published ({posts.filter(p => p.status === 'published').length})</TabsTrigger>
          <TabsTrigger value="draft">Drafts ({posts.filter(p => p.status === 'draft').length})</TabsTrigger>
        </TabsList>

        {['all', 'published', 'draft'].map(tab => (
          <TabsContent key={tab} value={tab}>
            <div className="space-y-3">
              {posts
                .filter(p => tab === 'all' ? true : p.status === tab)
                .map(post => (
                  <div key={post.id} className="bg-white rounded-xl border shadow-sm p-5 flex items-start gap-4 hover:shadow-md transition-shadow">
                    {post.cover_image && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={post.cover_image} alt={post.title} className="h-20 w-32 object-cover rounded-lg shrink-0" />
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h3 className="font-semibold text-gray-900 leading-snug">{post.title}</h3>
                        <div className="flex items-center gap-2 shrink-0">
                          {post.ai_generated && (
                            <Badge className="bg-purple-100 text-purple-700 border-0 text-[10px]">
                              <Bot className="h-3 w-3 mr-1" />AI
                            </Badge>
                          )}
                          <Badge className={`text-[10px] border-0 ${
                            post.status === 'published' ? 'bg-green-100 text-green-700' :
                            post.status === 'draft' ? 'bg-yellow-100 text-yellow-700' :
                            'bg-gray-100 text-gray-600'
                          }`}>
                            {post.status === 'published' ? <CheckCircle className="h-3 w-3 mr-1" /> : <Clock className="h-3 w-3 mr-1" />}
                            {post.status}
                          </Badge>
                        </div>
                      </div>
                      <p className="text-sm text-gray-500 line-clamp-2 mb-2">{post.excerpt}</p>
                      <div className="flex items-center gap-3">
                        <div className="flex flex-wrap gap-1">
                          {post.tags.slice(0, 3).map(t => (
                            <Badge key={t} variant="secondary" className="text-[10px] py-0 h-4">{t}</Badge>
                          ))}
                        </div>
                        <span className="text-xs text-gray-400 ml-auto">{format(new Date(post.updated_at), 'MMM d, yyyy')}</span>
                      </div>
                    </div>
                    <div className="flex gap-1.5 shrink-0">
                      <Button size="sm" variant="outline" onClick={() => setEditPost(post)}>
                        <Edit className="h-3.5 w-3.5 mr-1" />Edit
                      </Button>
                      <Button size="sm" variant="ghost">
                        <Eye className="h-3.5 w-3.5" />
                      </Button>
                    </div>
                  </div>
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <Dialog open={showAI} onOpenChange={setShowAI}>
        {showAI && <AIGenerateModal onClose={() => setShowAI(false)} onInsert={handleAIInsert} />}
      </Dialog>

      <Dialog open={!!editPost} onOpenChange={() => setEditPost(null)}>
        {editPost !== null && <PostEditor post={editPost} onClose={() => setEditPost(null)} />}
      </Dialog>
    </div>
  )
}
