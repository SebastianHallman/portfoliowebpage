import React, { useState, useRef, useEffect } from 'react'
import { MessageCircle, Send, X } from 'lucide-react'
import { getChatResponse } from '../api/openRouter'
import { projectsData } from '../data/projectsData'
import ProjectModal from './ProjectModal'
import ProjectMiniCard from './ProjectMiniCard'
import ChatContactCard from './ChatContactCard'

const projectById = Object.fromEntries(projectsData.map(p => [p.id, p]))

function parseResponse(raw) {
  const extract = parsed => ({
    text: parsed.message,
    projectIds: Array.isArray(parsed.projectIds) ? parsed.projectIds : [],
    showContact: parsed.showContact === true,
  })

  try {
    const parsed = JSON.parse(raw)
    if (parsed && typeof parsed.message === 'string') return extract(parsed)
  } catch { /* continue */ }

  const match = raw.match(/\{[\s\S]*"message"[\s\S]*\}/)
  if (match) {
    try {
      const parsed = JSON.parse(match[0])
      if (parsed && typeof parsed.message === 'string') return extract(parsed)
    } catch { /* continue */ }
  }

  const stripped = raw.replace(/```[\s\S]*?```/g, '').replace(/\{[\s\S]*"projectIds"[\s\S]*\}/g, '').trim()
  return { text: stripped || raw, projectIds: [], showContact: false }
}


export default function ChatBox() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hey! Ask me anything about Sebastian's work, skills, or experience. (I am an AI assistant, I make mistakes sometimes.)",
      sender: 'bot',
      projectIds: [],
      showContact: false,
    },
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isTyping])

  useEffect(() => {
    if (isOpen) {
      const t = setTimeout(() => inputRef.current?.focus(), 350)
      return () => clearTimeout(t)
    }
  }, [isOpen])

  const handleSend = () => {
    if (!input.trim()) return
    const newMessage = { id: Date.now(), text: input.trim(), sender: 'user', projectIds: [], showContact: false }
    const newMessages = [...messages, newMessage]
    setMessages(newMessages)
    setInput('')
    setIsTyping(true)

    getChatResponse(newMessages).then(response => {
      setIsTyping(false)
      if (response.choices?.[0]?.message) {
        const { text, projectIds, showContact } = parseResponse(response.choices[0].message.content)
        setMessages(prev => [...prev, { id: Date.now(), text, sender: 'bot', projectIds, showContact }])
      } else {
        setMessages(prev => [
          ...prev,
          {
            id: Date.now(),
            text: "Sorry, I couldn't get a response. Please try again or contact Sebastian directly (see contact section).",
            sender: 'bot',
            projectIds: [],
            showContact: false,
          },
        ])
      }
    })
  }

  return (
    <>
      <style>{`
        @keyframes chatDotBounce {
          0%, 60%, 100% { transform: translateY(0); opacity: 0.5; }
          30% { transform: translateY(-5px); opacity: 1; }
        }
        @keyframes chatMsgIn {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .chat-panel-bg   { background: linear-gradient(160deg, #0f172a 0%, #020617 100%); }
        .chat-header-bg  { background: linear-gradient(90deg, #DDD92A 0%, #EAE151 100%); }
        .chat-scrollbar::-webkit-scrollbar        { width: 4px; }
        .chat-scrollbar::-webkit-scrollbar-track  { background: transparent; }
        .chat-scrollbar::-webkit-scrollbar-thumb  { background: rgba(221,217,42,0.2); border-radius: 2px; }
        .chat-msg        { animation: chatMsgIn 0.25s ease forwards; }
        .chat-status-dot { animation: chatDotBounce 2s ease-in-out infinite; }
        .chat-dot        { animation: chatDotBounce 1.1s ease-in-out infinite; }
        .chat-dot-1      { animation-delay: 0.18s; }
        .chat-dot-2      { animation-delay: 0.36s; }
      `}</style>

      {/* Chat Panel */}
      <div
        className={[
          'fixed z-40 flex flex-col overflow-hidden chat-panel-bg',
          'border border-[rgba(221,217,42,0.2)]',
          'transition-[opacity,transform,box-shadow] duration-320 ease-in-out',
          'inset-0 rounded-none sm:inset-auto sm:bottom-20 sm:right-4 sm:w-104 sm:h-136 sm:rounded-2xl',
          isOpen
            ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto shadow-[0_30px_60px_rgba(0,0,0,0.8),0_0_40px_rgba(221,217,42,0.06)]'
            : 'opacity-0 translate-y-3.5 scale-[0.97] pointer-events-none shadow-[0_10px_30px_rgba(0,0,0,0.4)]',
        ].join(' ')}
      >
        {/* Header */}
        <div className="chat-header-bg flex items-center gap-3 px-4 py-3 shrink-0">
          <span className="chat-status-dot w-2 h-2 rounded-full bg-black/30" />
          <span className="flex-1 text-black font-bold text-sm tracking-wide">Ask me anything</span>
          <button
            onClick={() => setIsOpen(false)}
            className="text-black/50 hover:text-black transition-colors duration-150"
            aria-label="Close chat"
          >
            <X size={17} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 chat-scrollbar">
          {messages.map(msg => (
            <div
              key={msg.id}
              className={`chat-msg flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className="max-w-[82%] flex flex-col gap-0">
                <div
                  className={[
                    'px-3 py-2 text-sm leading-relaxed',
                    msg.sender === 'user'
                      ? 'bg-[#DDD92A] text-black font-medium rounded-[1rem_1rem_0.25rem_1rem]'
                      : 'bg-white/5.5 border border-white/8 text-[rgba(250,253,246,0.88)] rounded-[1rem_1rem_1rem_0.25rem]',
                  ].join(' ')}
                >
                  {msg.text}
                </div>
                {msg.projectIds?.map(id => projectById[id] && (
                  <ProjectMiniCard key={id} project={projectById[id]} onOpen={() => setSelectedProject(projectById[id])} />
                ))}
                {msg.showContact && <ChatContactCard />}
              </div>
            </div>
          ))}

          {/* Typing indicator */}
          {isTyping && (
            <div className="chat-msg flex justify-start">
              <div className="flex gap-1 items-center px-4 py-3 bg-white/5.5 border border-white/8 rounded-[1rem_1rem_1rem_0.25rem]">
                <span className="chat-dot w-1.5 h-1.5 rounded-full bg-[#DDD92A]" />
                <span className="chat-dot chat-dot-1 w-1.5 h-1.5 rounded-full bg-[#DDD92A]" />
                <span className="chat-dot chat-dot-2 w-1.5 h-1.5 rounded-full bg-[#DDD92A]" />
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="px-3 py-3 shrink-0 border-t border-[rgba(221,217,42,0.1)]">
          <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/[0.07]">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && !e.shiftKey && handleSend()}
              placeholder="Type a message…"
              className="flex-1 bg-transparent text-sm text-[#FAFDF6] placeholder-[rgba(250,253,246,0.3)] focus:outline-none"
            />
            <button
              onClick={handleSend}
              disabled={!input.trim()}
              className={[
                'shrink-0 w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-200',
                input.trim()
                  ? 'bg-[#DDD92A] text-black scale-100'
                  : 'bg-white/[0.07] text-white/25 scale-[0.92]',
              ].join(' ')}
              aria-label="Send message"
            >
              <Send size={13} />
            </button>
          </div>
        </div>
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />

      {/* Toggle button */}
      <button
        onClick={() => setIsOpen(o => !o)}
        className={[
          'fixed bottom-4 right-4 w-12 h-12 rounded-full flex items-center justify-center z-50 transition-all duration-300',
          isOpen
            ? 'bg-slate-950 border border-[rgba(221,217,42,0.35)] text-[#DDD92A] shadow-[0_4px_20px_rgba(0,0,0,0.6)]'
            : 'bg-[#DDD92A] border border-transparent text-black shadow-[0_4px_24px_rgba(221,217,42,0.4)]',
        ].join(' ')}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        <div className={`transition-transform duration-300 ${isOpen ? 'rotate-90' : 'rotate-0'}`}>
          {isOpen ? <X size={20} /> : <MessageCircle size={20} />}
        </div>
      </button>
    </>
  )
}
