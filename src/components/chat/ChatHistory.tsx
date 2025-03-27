
import React, { useState } from "react";
import { MessageSquare, Search, Trash2, Clock, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import SuperbidButton from "@/components/ui/SuperbidButton";
import { Input } from "@/components/ui/input";

type ChatItem = {
  id: string;
  title: string;
  preview: string;
  date: Date;
  unread?: boolean;
};

const ChatHistory: React.FC = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState("");

  // Mock data for chat history
  const chatHistory: ChatItem[] = [
    {
      id: "1",
      title: "Assistente de IA: Introdução",
      preview: "Como posso ajudar você hoje?",
      date: new Date(),
      unread: true,
    },
    {
      id: "2",
      title: "Base de conhecimento técnico",
      preview: "Aqui estão os documentos técnicos que você solicitou...",
      date: new Date(Date.now() - 86400000), // yesterday
    },
    {
      id: "3",
      title: "Suporte ao cliente",
      preview: "Obrigado por entrar em contato conosco...",
      date: new Date(Date.now() - 172800000), // 2 days ago
    },
    {
      id: "4",
      title: "Integração de API",
      preview: "Para integrar com nossa API você precisa...",
      date: new Date(Date.now() - 259200000), // 3 days ago
    },
  ];

  const filteredChats = chatHistory.filter(chat => 
    chat.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    chat.preview.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const formatDate = (date: Date) => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    
    if (days === 0) {
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    } else if (days === 1) {
      return t('common.yesterday');
    } else if (days < 7) {
      return t('common.daysAgo', { count: days });
    } else {
      return date.toLocaleDateString();
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="p-3 border-b border-sidebar-border">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-medium text-sidebar-foreground">{t('chat.history')}</h2>
          <SuperbidButton variant="outline" size="sm" className="h-8 gap-1">
            <Plus size={14} />
            <span className="text-xs">{t('chat.newChat')}</span>
          </SuperbidButton>
        </div>
        <div className="relative">
          <Search size={16} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder={t('chat.searchChats')}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-8 py-1 h-9 text-sm bg-background"
          />
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto">
        {filteredChats.length > 0 ? (
          <div className="divide-y divide-sidebar-border">
            {filteredChats.map((chat) => (
              <button 
                key={chat.id}
                className={cn(
                  "w-full flex items-start p-3 gap-3 hover:bg-sidebar-accent text-left transition-colors",
                  chat.unread && "bg-sidebar-accent/30"
                )}
              >
                <div className="rounded-full p-2 bg-primary/10 h-9 w-9 flex items-center justify-center flex-shrink-0">
                  <MessageSquare size={16} className="text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-center mb-0.5">
                    <h3 className={cn(
                      "text-sm truncate",
                      chat.unread && "font-medium text-sidebar-foreground", 
                      !chat.unread && "text-sidebar-foreground/80"
                    )}>
                      {chat.title}
                    </h3>
                    <span className="text-xs text-sidebar-foreground/60 flex items-center">
                      <Clock size={12} className="inline mr-1" />
                      {formatDate(chat.date)}
                    </span>
                  </div>
                  <p className="text-xs text-sidebar-foreground/60 truncate">{chat.preview}</p>
                </div>
              </button>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-sidebar-foreground/60 p-4">
            <MessageSquare size={40} className="opacity-20 mb-2" />
            <p className="text-sm">{t('chat.noChatsFound')}</p>
          </div>
        )}
      </div>
      
      <div className="p-3 border-t border-sidebar-border mt-auto">
        <button className="w-full flex items-center justify-center gap-2 py-1.5 px-3 rounded-md hover:bg-sidebar-accent/80 text-sidebar-foreground/80 text-sm">
          <Trash2 size={16} />
          <span>{t('chat.clearHistory')}</span>
        </button>
      </div>
    </div>
  );
};

export default ChatHistory;
