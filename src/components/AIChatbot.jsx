import React, { useState, useEffect, useRef } from 'react';

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      type: 'bot', 
      text: "Hi! I’m AJITH’s AI assistant 👋\nI can help you explore his work, services, or start a project. How can I help?" 
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const chatEndRef = useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = (text = inputValue) => {
    if (!text.trim()) return;

    const userMessage = { type: 'user', text };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    // Simulate Bot Response
    setTimeout(() => {
      const botResponse = getBotResponse(text);
      setMessages(prev => [...prev, { type: 'bot', text: botResponse }]);
    }, 600);
  };

  const getBotResponse = (input) => {
    const lowInput = input.toLowerCase();
    
    if (lowInput.includes('service') || lowInput.includes('offer') || lowInput.includes('what do you do')) {
      return "AJITH is a Full Stack Developer and AI Product Builder.\nHe offers:\n- Full stack web development\n- AI integration and automation\n- MVP development\n- Custom software solutions";
    }
    
    if (lowInput.includes('project') || lowInput.includes('work') || lowInput.includes('portfolio')) {
      return "AJITH has worked on AI-focused applications including:\n\n- Mammoguard AI → AI system for breast health analysis\n- Lung AI → AI-based lung condition analysis\n- Credentials AI → AI-powered credential verification\n\nThese projects focus on solving real-world problems using AI.";
    }
    
    if (lowInput.includes('build my project') || lowInput.includes('hire') || lowInput.includes('available')) {
      return "Yes, AJITH is currently available for freelance work.\nYou can share your idea, and he can help design and build it from scratch.\nWould you like help starting a project or contacting AJITH?";
    }
    
    if (lowInput.includes('contact') || lowInput.includes('email') || lowInput.includes('linkedin')) {
      return "You can contact AJITH here:\n\nEmail: ajithpec317@gmail.com\nLinkedIn: https://linkedin.com/in/ajith-v03";
    }

    if (lowInput.includes('hello') || lowInput.includes('hi')) {
      return "Hi there! I'm AJITH's AI assistant. How can I help you today?";
    }

    return "I can help you learn about AJITH’s work or start a project with him. Just let me know what you need!\n\nWould you like help starting a project or contacting AJITH?";
  };

  const QuickActions = [
    "Tell me about Services",
    "View Projects",
    "Can you build my project?",
    "How to contact?"
  ];

  return (
    <div className="fixed bottom-8 right-8 z-[100] font-inter">
      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[350px] md:w-[400px] h-[500px] glass-card rounded-[2.5rem] border border-white/10 shadow-2xl flex flex-col overflow-hidden animate-slide-up">
          {/* Header */}
          <div className="p-6 border-b border-white/5 bg-gradient-to-r from-primary/10 to-secondary/10 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-glow-primary">
                <span className="material-symbols-outlined text-white text-xl">smart_toy</span>
              </div>
              <div>
                <h3 className="text-white font-space font-bold text-sm">AJITH's AI</h3>
                <span className="text-[10px] text-primary font-bold uppercase tracking-widest animate-pulse">Online</span>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-on-surface-variant hover:text-white transition-colors"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4 scrollbar-hide">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-3xl text-sm leading-relaxed ${
                  msg.type === 'user' 
                    ? 'bg-primary text-white rounded-tr-none' 
                    : 'bg-white/5 text-on-surface-variant rounded-tl-none border border-white/5'
                }`}>
                  {msg.text.split('\n').map((line, j) => (
                    <React.Fragment key={j}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </div>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          {/* Footer */}
          <div className="p-6 space-y-4">
            {/* Quick Actions */}
            <div className="flex flex-wrap gap-2">
              {QuickActions.map(action => (
                <button 
                  key={action}
                  onClick={() => handleSend(action)}
                  className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] text-white hover:bg-white/10 transition-all"
                >
                  {action}
                </button>
              ))}
            </div>
            
            <div className="relative">
              <input 
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask me anything..."
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3 text-sm text-white placeholder:text-on-surface-variant/40 focus:outline-none focus:border-primary/50 transition-all"
              />
              <button 
                onClick={() => handleSend()}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-xl bg-primary text-white flex items-center justify-center hover:scale-110 active:scale-95 transition-all"
              >
                <span className="material-symbols-outlined text-sm">send</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 shadow-2xl ${
          isOpen 
            ? 'bg-surface border border-white/10 rotate-90' 
            : 'bg-gradient-to-r from-primary to-secondary shadow-glow-primary hover:scale-110 active:scale-95'
        }`}
      >
        <span className="material-symbols-outlined text-white text-3xl">
          {isOpen ? 'close' : 'chat'}
        </span>
      </button>
    </div>
  );
};

export default AIChatbot;
