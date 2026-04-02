import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, Sparkles, ChevronDown } from 'lucide-react';
import { generateResponse } from '../utils/chatEngine';

interface Message {
  id: number;
  text: string;
  sender: 'ai' | 'user';
}

const quickReplies = [
  "Show all properties",
  "What's the cheapest?",
  "Properties in London",
  "I need 4+ bedrooms",
  "Show me penthouses",
  "Schedule a visit",
  "How to buy?",
  "What services do you offer?",
];

/** Parse simple markdown-like formatting into JSX-safe HTML */
function formatText(text: string): string {
  return text
    // Bold: **text**
    .replace(/\*\*(.+?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
    // Emoji bullets stay as-is
    // Line breaks
    .replace(/\n/g, '<br/>');
}

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Welcome to Elite Estate Squad! 🚀 I'm your AI Liaison, ready to help you find the perfect property.\n\nTry asking me:\n• \"What properties are under $10M?\"\n• \"Show me penthouses\"\n• \"Properties in Neo Tokyo\"\n• \"I need 5+ bedrooms\"\n\nOr tap a quick reply below to get started!",
      sender: 'ai'
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showScrollBtn, setShowScrollBtn] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, scrollToBottom]);

  // Detect if user has scrolled up
  const handleScroll = () => {
    const container = messagesContainerRef.current;
    if (!container) return;
    const isAtBottom = container.scrollHeight - container.scrollTop - container.clientHeight < 60;
    setShowScrollBtn(!isAtBottom);
  };

  const processMessage = useCallback((userText: string) => {
    if (!userText.trim()) return;

    const userMsg: Message = { id: Date.now(), text: userText, sender: 'user' };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // Simulate a brief "thinking" delay for natural feel
    const delay = 400 + Math.random() * 800;
    setTimeout(() => {
      const response = generateResponse(userText);
      const aiMsg: Message = {
        id: Date.now() + 1,
        text: response,
        sender: 'ai'
      };
      setMessages(prev => [...prev, aiMsg]);
      setIsTyping(false);
    }, delay);
  }, []);

  const handleSend = () => {
    processMessage(input);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleQuickReply = (text: string) => {
    processMessage(text);
  };

  return (
    <>
      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Mobile Overlay Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-[99] md:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Chat Window */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 100, transformOrigin: 'bottom right' }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 100 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="
                fixed z-[100]
                inset-4 md:inset-auto
                md:bottom-[6.5rem] md:right-8
                md:w-[420px] md:h-[600px]
                glass-card rounded-[2rem] md:rounded-[2.5rem]
                overflow-hidden flex flex-col
                border border-primary/20
                shadow-[0_20px_60px_rgba(0,0,0,0.6),0_0_40px_rgba(59,130,246,0.15)]
              "
            >
              {/* Header */}
              <div className="px-5 py-4 md:px-6 md:py-5 bg-gradient-to-r from-primary/15 to-primary/5 border-b border-white/5 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary-light">
                    <Bot size={22} />
                    <Sparkles size={10} className="absolute -top-0.5 -right-0.5 text-accent-purple" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-sm">Elite AI Liaison</h3>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-[10px] text-gray-400 uppercase tracking-widest font-black">
                        {isTyping ? 'Analyzing...' : 'Online'}
                      </span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-xl"
                  aria-label="Close chat"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Messages Area */}
              <div
                ref={messagesContainerRef}
                onScroll={handleScroll}
                className="flex-1 overflow-y-auto px-4 py-4 md:px-5 md:py-5 space-y-3 relative"
                style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(255,255,255,0.1) transparent' }}
              >
                {messages.map((m) => (
                  <motion.div
                    key={m.id}
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    {m.sender === 'ai' && (
                      <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center text-primary-light mr-2 mt-1 shrink-0">
                        <Bot size={14} />
                      </div>
                    )}
                    <div className={`max-w-[85%] px-4 py-3 text-[13px] leading-relaxed ${
                      m.sender === 'user'
                        ? 'bg-primary text-white rounded-2xl rounded-tr-md shadow-[0_4px_15px_rgba(59,130,246,0.3)]'
                        : 'bg-white/[0.04] text-gray-300 border border-white/[0.06] rounded-2xl rounded-tl-md'
                    }`}>
                      <div dangerouslySetInnerHTML={{ __html: formatText(m.text) }} />
                    </div>
                  </motion.div>
                ))}

                {/* Typing Indicator */}
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2"
                  >
                    <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center text-primary-light shrink-0">
                      <Bot size={14} />
                    </div>
                    <div className="bg-white/[0.04] border border-white/[0.06] rounded-2xl rounded-tl-md px-5 py-3">
                      <div className="flex gap-1.5 items-center">
                        <span className="w-2 h-2 rounded-full bg-primary-light animate-bounce" style={{ animationDelay: '0ms' }} />
                        <span className="w-2 h-2 rounded-full bg-primary-light animate-bounce" style={{ animationDelay: '150ms' }} />
                        <span className="w-2 h-2 rounded-full bg-primary-light animate-bounce" style={{ animationDelay: '300ms' }} />
                      </div>
                    </div>
                  </motion.div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Scroll-to-bottom button */}
              <AnimatePresence>
                {showScrollBtn && (
                  <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    onClick={scrollToBottom}
                    className="absolute bottom-[140px] md:bottom-[160px] left-1/2 -translate-x-1/2 bg-primary/80 backdrop-blur-md text-white p-2 rounded-full shadow-lg z-10 hover:bg-primary transition-colors"
                  >
                    <ChevronDown size={18} />
                  </motion.button>
                )}
              </AnimatePresence>

              {/* Quick Reply Chips */}
              {messages.length <= 2 && !isTyping && (
                <div className="px-4 md:px-5 pb-2 shrink-0">
                  <div className="flex flex-wrap gap-1.5">
                    {quickReplies.slice(0, 6).map((qr) => (
                      <button
                        key={qr}
                        onClick={() => handleQuickReply(qr)}
                        className="text-[10px] md:text-[11px] text-primary-light bg-primary/10 hover:bg-primary/25 border border-primary/20 rounded-full px-3 py-1.5 transition-all hover:scale-105 active:scale-95 whitespace-nowrap"
                      >
                        {qr}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Input Area */}
              <div className="px-4 py-3 md:px-5 md:py-4 bg-white/[0.02] border-t border-white/5 shrink-0">
                <div className="flex gap-2 bg-background/60 rounded-2xl p-1.5 border border-white/10 focus-within:border-primary-light/40 transition-all">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Ask about properties, prices, locations..."
                    className="flex-1 bg-transparent px-3 py-2.5 text-sm text-white focus:outline-none placeholder:text-gray-600"
                    aria-label="Chat message input"
                  />
                  <button
                    onClick={handleSend}
                    disabled={!input.trim()}
                    className={`w-10 h-10 rounded-xl flex items-center justify-center text-white transition-all ${
                      input.trim()
                        ? 'bg-primary hover:bg-primary-light shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:scale-105 active:scale-95'
                        : 'bg-white/5 text-gray-600 cursor-not-allowed'
                    }`}
                    aria-label="Send message"
                  >
                    <Send size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[100]">
        <motion.button
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 md:w-16 md:h-16 bg-primary rounded-full flex items-center justify-center text-white shadow-[0_0_30px_rgba(59,130,246,0.6)] relative group"
          aria-label={isOpen ? "Close chat" : "Open chat"}
        >
          <div className="absolute inset-0 bg-primary-light rounded-full animate-ping opacity-20 pointer-events-none" />
          {isOpen ? <X size={26} /> : <MessageSquare size={26} />}

          {!isOpen && (
            <div className="absolute -top-2 -right-2 bg-accent-purple text-white text-[9px] md:text-[10px] font-black px-2 py-0.5 rounded-full border-2 border-background animate-bounce">
              AI
            </div>
          )}
        </motion.button>
      </div>
    </>
  );
};

export default AIAssistant;
