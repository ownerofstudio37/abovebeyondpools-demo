'use client'
import { useState, useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { MessageCircle, X, Send, Bot, User } from 'lucide-react'

interface Message { role: 'user' | 'model'; content: string }

const DEMO_REPLIES: Record<string, string> = {
  default: "That's a great question! At Above & Beyond Pools, we'd love to help. I'd recommend booking a free consultation with our design team so we can give you a personalized answer. Want me to help you schedule one?",
  price: "Our pools start around $45,000 for inground builds and go up depending on size, finish, and features. Above-ground pools start around $8,000. For an accurate quote, we'll need to do a quick site visit — it's completely free!",
  time: "A typical inground pool takes 8–12 weeks from permit approval to final inspection. Above-ground pools can be done in as little as 2–3 weeks. We handle all the permits, so you don't have to worry about that!",
  maintenance: "We offer monthly maintenance packages starting at $149/month. That includes chemical balancing, cleaning, and an equipment inspection. Would you like more details on what's included?",
  hello: "Hi there! 👋 I'm the AI assistant for Above & Beyond Pools. I'm here to answer your questions about pool construction, renovations, and maintenance. What's on your mind?",
}

function getReply(message: string): string {
  const lower = message.toLowerCase()
  if (lower.match(/hi|hello|hey|howdy/)) return DEMO_REPLIES.hello
  if (lower.match(/cost|price|how much|expensive|afford|budget/)) return DEMO_REPLIES.price
  if (lower.match(/how long|timeline|weeks|months|when/)) return DEMO_REPLIES.time
  if (lower.match(/maintain|maintenance|clean|chemical|service/)) return DEMO_REPLIES.maintenance
  return DEMO_REPLIES.default
}

export function AIChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', content: "Hi! 👋 I'm the Above & Beyond Pools assistant. Ready to help you design your dream pool! What questions do you have?" }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const sendMessage = async () => {
    if (!input.trim() || loading) return
    const userMsg: Message = { role: 'user', content: input }
    const userInput = input
    setMessages(prev => [...prev, userMsg])
    setInput('')
    setLoading(true)
    // Simulate AI response delay
    await new Promise(r => setTimeout(r, 900 + Math.random() * 600))
    setMessages(prev => [...prev, { role: 'model', content: getReply(userInput) }])
    setLoading(false)
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={`fixed bottom-6 right-6 z-50 bg-blue-600 text-white rounded-full px-5 py-3 shadow-lg hover:bg-blue-700 transition-all items-center gap-2 ${open ? 'hidden' : 'flex'}`}
      >
        <MessageCircle className="h-5 w-5" />
        <span className="text-sm font-medium">Ask Us Anything</span>
      </button>

      {open && (
        <div className="fixed bottom-6 right-6 z-50 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border flex flex-col overflow-hidden" style={{ height: 500 }}>
          <div className="bg-blue-600 text-white p-4 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2">
              <Bot className="h-5 w-5" />
              <div>
                <p className="font-semibold text-sm">Pool Assistant</p>
                <p className="text-xs opacity-80">Above & Beyond Pools · AI-Powered</p>
              </div>
            </div>
            <button onClick={() => setOpen(false)}><X className="h-5 w-5" /></button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
            {messages.map((msg, i) => (
              <div key={i} className={`flex gap-2 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                <div className={`h-7 w-7 rounded-full shrink-0 flex items-center justify-center text-white text-xs ${msg.role === 'user' ? 'bg-gray-400' : 'bg-blue-600'}`}>
                  {msg.role === 'user' ? <User className="h-3.5 w-3.5" /> : <Bot className="h-3.5 w-3.5" />}
                </div>
                <div className={`max-w-[76%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${msg.role === 'user' ? 'bg-blue-600 text-white rounded-tr-sm' : 'bg-white text-gray-800 shadow-sm rounded-tl-sm border'}`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex gap-2">
                <div className="h-7 w-7 rounded-full bg-blue-600 flex items-center justify-center shrink-0">
                  <Bot className="h-3.5 w-3.5 text-white" />
                </div>
                <div className="bg-white border shadow-sm rounded-2xl rounded-tl-sm px-4 py-3">
                  <div className="flex gap-1 items-center">
                    {[0,1,2].map(i => <div key={i} className="h-2 w-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: `${i * 0.15}s` }} />)}
                  </div>
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          <div className="p-3 border-t bg-white shrink-0">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && sendMessage()}
                placeholder="Ask about pricing, timelines..."
                className="text-sm"
              />
              <Button size="sm" onClick={sendMessage} disabled={loading} className="bg-blue-600 hover:bg-blue-700 shrink-0">
                <Send className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-[10px] text-gray-400 text-center mt-1.5">Powered by Gemini AI</p>
          </div>
        </div>
      )}
    </>
  )
}
