
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Bot, Loader2, Sparkles, User } from 'lucide-react';
import { chatWithGemini } from '../services/gemini';
import { Message } from '../types';

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Halo Juragan! Saya Asisten Djoeragan. Ada yang bisa saya bantu seputar ternak hari ini? Misal: cari sapi qurban atau tips pakan.' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', text: input };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      const aiResponse = await chatWithGemini(newMessages);
      setMessages(prev => [...prev, { role: 'model', text: aiResponse }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'model', text: 'Waduh, koneksi sedang bermasalah. Coba lagi nanti ya Gan!' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[90vw] sm:w-[380px] h-[500px] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col animate-in slide-in-from-bottom-5">
          {/* Header */}
          <div className="bg-[#8B4513] p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#d2b48c] rounded-full flex items-center justify-center">
                <Bot className="w-6 h-6 text-[#8B4513]" />
              </div>
              <div>
                <p className="font-bold leading-none">Asisten Djoeragan</p>
                <p className="text-[10px] text-[#d2b48c] mt-1">Pakar Ternak Digital • Online</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-1 rounded-full transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#faf7f2]">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] flex items-start gap-2 ${m.role === 'user' ? 'flex-row-reverse' : ''}`}>
                   <div className={`mt-1 p-1 rounded-full flex-shrink-0 ${m.role === 'user' ? 'bg-[#8B4513] text-white' : 'bg-[#d2b48c] text-[#8B4513]'}`}>
                    {m.role === 'user' ? <User className="w-3 h-3" /> : <Sparkles className="w-3 h-3" />}
                  </div>
                  <div className={`p-3 rounded-2xl text-sm ${
                    m.role === 'user' 
                      ? 'bg-[#8B4513] text-white rounded-tr-none' 
                      : 'bg-white text-gray-800 shadow-sm border border-gray-100 rounded-tl-none'
                  }`}>
                    {m.text}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-gray-100 flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin text-[#8B4513]" />
                  <span className="text-xs text-gray-500 italic">Djoeragan sedang mengetik...</span>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t border-gray-100">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Tanya tips ternak atau cari sapi..."
                className="flex-1 bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#8B4513]"
              />
              <button 
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="bg-[#8B4513] text-white p-2 rounded-lg hover:bg-black transition-colors disabled:opacity-50"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-[#8B4513] hover:bg-black text-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 active:scale-95 group relative"
      >
        <div className="absolute -top-12 right-0 bg-[#d2b48c] text-[#8B4513] text-[10px] font-bold px-3 py-1.5 rounded-full whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-sm border border-[#8B4513]/20">
          Ada pertanyaan, Juragan?
        </div>
        {isOpen ? <X className="w-7 h-7" /> : <MessageSquare className="w-7 h-7" />}
      </button>
    </div>
  );
};

export default AIChat;
