
import React, { useState, useRef, useEffect } from "react";
import { Send, Bot, User, Paperclip, ChevronDown, MessageSquare } from "lucide-react";
import SuperbidButton from "@/components/ui/SuperbidButton";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import { 
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover";

type Message = {
  id: string;
  content: string;
  sender: "user" | "ai";
  timestamp: Date;
};

type ChatInterfaceProps = {
  className?: string;
};

const ChatInterface: React.FC<ChatInterfaceProps> = ({ className }) => {
  const { t } = useTranslation();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hello! I'm Superbid AI, your personal assistant. How can I help you today?",
      sender: "ai",
      timestamp: new Date(),
    },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [selectedAgent, setSelectedAgent] = useState({
    id: 1,
    name: t('chat.generalAssistant'),
    icon: <Bot size={16} className="text-primary" />
  });
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: newMessage,
      sender: "user",
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setNewMessage("");
    setIsTyping(true);

    // Simulate AI response after a delay
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: getAIResponse(newMessage),
        sender: "ai",
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const getAIResponse = (message: string): string => {
    // Simple response logic
    if (message.toLowerCase().includes("hello") || message.toLowerCase().includes("hi")) {
      return "Hello there! How can I assist you today?";
    } else if (message.toLowerCase().includes("help")) {
      return "I'm here to help! You can ask me questions about Superbid AI, create knowledge bases, or configure AI agents.";
    } else if (message.toLowerCase().includes("feature") || message.toLowerCase().includes("do")) {
      return "Superbid AI offers several features including chatbots, knowledge base creation, and customizable AI agents. Would you like more details about any specific feature?";
    } else {
      return "That's an interesting point. Could you elaborate more so I can better assist you?";
    }
  };

  const agents = [
    { id: 1, name: t('chat.generalAssistant'), icon: <Bot size={16} className="text-primary" /> },
    { id: 2, name: t('chat.customerSupport'), icon: <Bot size={16} className="text-blue-500" /> },
    { id: 3, name: t('chat.salesSpecialist'), icon: <Bot size={16} className="text-green-500" /> },
  ];

  return (
    <div className={cn("flex flex-col h-full rounded-xl overflow-hidden border border-border shadow-sm bg-card", className)}>
      {/* Chat messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={cn(
              "flex",
              message.sender === "user" ? "justify-end" : "justify-start"
            )}
          >
            <div
              className={cn(
                "max-w-[80%] rounded-2xl p-3",
                message.sender === "user"
                  ? "bg-primary text-primary-foreground rounded-br-none"
                  : "bg-secondary text-secondary-foreground rounded-bl-none"
              )}
            >
              <div className="flex items-center gap-2 mb-1">
                {message.sender === "ai" ? (
                  selectedAgent.icon
                ) : (
                  <User size={16} />
                )}
                <span className="font-medium text-sm">
                  {message.sender === "user" ? t('chat.you') : selectedAgent.name}
                </span>
              </div>
              <p className="text-sm">{message.content}</p>
              <div className="text-xs opacity-70 text-right mt-1">
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-secondary text-secondary-foreground rounded-2xl rounded-bl-none p-3 max-w-[80%]">
              <div className="flex items-center gap-2 mb-1">
                {selectedAgent.icon}
                <span className="font-medium text-sm">{selectedAgent.name}</span>
              </div>
              <div className="flex space-x-1">
                <div className="w-2 h-2 rounded-full bg-primary/70 animate-pulse"></div>
                <div className="w-2 h-2 rounded-full bg-primary/70 animate-pulse animation-delay-200"></div>
                <div className="w-2 h-2 rounded-full bg-primary/70 animate-pulse animation-delay-400"></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Chat input */}
      <div className="p-3 border-t border-border">
        <div className="flex items-center gap-2">
          <Popover>
            <PopoverTrigger asChild>
              <button className="p-2 rounded-full hover:bg-secondary flex items-center gap-1 text-sm text-muted-foreground">
                {selectedAgent.icon}
                <span className="hidden sm:inline">{selectedAgent.name}</span>
                <ChevronDown size={14} />
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-52 p-2">
              <div className="space-y-1">
                {agents.map((agent) => (
                  <button
                    key={agent.id}
                    className={cn(
                      "w-full flex items-center gap-2 p-2 rounded-md text-sm transition-colors",
                      selectedAgent.id === agent.id 
                        ? "bg-primary/10 text-primary" 
                        : "hover:bg-secondary"
                    )}
                    onClick={() => setSelectedAgent(agent)}
                  >
                    {agent.icon}
                    <span>{agent.name}</span>
                  </button>
                ))}
              </div>
            </PopoverContent>
          </Popover>
          
          <button className="p-2 rounded-full hover:bg-secondary">
            <Paperclip size={18} className="text-muted-foreground" />
          </button>
          
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder={t('chat.sendMessage')}
            className="flex-1 bg-secondary/50 border-0 rounded-full px-4 py-2 focus:ring-1 focus:ring-primary"
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSendMessage();
              }
            }}
          />
          
          <SuperbidButton
            onClick={handleSendMessage}
            disabled={!newMessage.trim()}
            variant="primary"
            size="icon"
            className="rounded-full w-10 h-10"
          >
            <Send size={18} />
          </SuperbidButton>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
