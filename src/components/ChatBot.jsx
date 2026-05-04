import React, { useState, useEffect, useRef } from 'react';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi, I’m AJITH’s AI assistant. I can help you with services or starting a project.", isBot: true }
  ]);
  const [inputValue, setInputValue] = useState('');
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = (text) => {
    if (!text.trim()) return;

    const userMsg = { text, isBot: false };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');

    // Simulate AI response
    setTimeout(() => {
      let botResponse = "I'm not sure about that, but AJITH can definitely help! Try asking about his services or projects.";
      
      const lowText = text.toLowerCase();
      if (lowText.includes('service')) {
        botResponse = "AJITH builds full stack applications and AI-powered systems.";
      } else if (lowText.includes('project') || lowText.includes('work')) {
        botResponse = "He has worked on AI-based healthcare (Mammoguard, Lung AI) and verification systems (Credentials AI).";
      } else if (lowText.includes('contact') || lowText.includes('email') || lowText.includes('reach')) {
        botResponse = "You can reach him via email (ajithpec317@gmail.com) or submit the project form below.";
      } else if (lowText.includes('freelance') || lowText.includes('hire') || lowText.includes('available')) {
        botResponse = "He is available for freelance projects. Feel free to start a project through the form!";
      }

      setMessages(prev => [...prev, { text: botResponse, isBot: true }]);
    }, 600);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100] font-sans">
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center shadow-2xl transition-transform hover:scale-110 active:scale-95"
      >
        <span className="material-symbols-outlined text-2xl">
          {isOpen ? 'close' : 'chat_bubble'}
        </span>
      </button>

      {/* Chat Panel */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[340px] max-h-[480px] bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-fade-in">
          {/* Header */}
          <div className="p-4 border-b border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-bold tracking-widest uppercase text-white/80">AJITH AI</span>
            </div>
          </div>

          {/* Messages Area */}
          <div
            ref={scrollRef}
            className="flex-1 p-5 space-y-4 overflow-y-auto custom-scrollbar"
            style={{ maxHeight: '320px' }}
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'} animate-fade-in-up`}
              >
                <div
                  className={`max-w-[85%] p-3 rounded-xl text-[13px] leading-relaxed ${
                    msg.isBot
                      ? 'bg-white/5 text-white/90 rounded-tl-none'
                      : 'bg-white text-black font-medium rounded-tr-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <form
            onSubmit={(e) => { e.preventDefault(); handleSend(inputValue); }}
            className="p-4 border-t border-white/5 flex gap-2"
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask a question..."
              className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs text-white outline-none focus:border-white/30 transition-colors"
            />
            <button
              type="submit"
              className="w-10 h-10 rounded-lg bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <span className="material-symbols-outlined text-lg">send</span>
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
