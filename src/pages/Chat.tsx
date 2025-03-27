
import React, { useState } from "react";
import Header from "@/components/layout/Header";
import { 
  SidebarProvider, 
  Sidebar, 
  SidebarContent, 
  SidebarTrigger,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton
} from "@/components/ui/sidebar";
import ChatInterface from "@/components/chat/ChatInterface";
import ChatHistory from "@/components/chat/ChatHistory";
import { useTranslation } from "react-i18next";
import { 
  Bot, 
  MessageSquare, 
  PanelLeft,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import SuperbidButton from "@/components/ui/SuperbidButton";

const Chat = () => {
  const { t } = useTranslation();
  const [isHistoryOpen, setIsHistoryOpen] = useState(true);

  const toggleHistory = () => {
    setIsHistoryOpen(!isHistoryOpen);
  };

  return (
    <SidebarProvider defaultOpen={true}>
      <div className="min-h-screen flex w-full bg-background">
        <Sidebar>
          <SidebarContent>
            <SidebarHeader className="flex items-center justify-between p-4">
              <span className="font-bold text-xl">JARVIS AI</span>
              <SidebarTrigger />
            </SidebarHeader>
            
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="/chat" className="text-sidebar-primary font-medium">
                    <MessageSquare />
                    <span>{t('common.chat')}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              {/* Outros itens do menu principal */}
            </SidebarMenu>
          </SidebarContent>
        </Sidebar>

        <div className="flex-1 flex flex-col h-screen">
          <Header />
          
          <div className="flex flex-1 overflow-hidden pt-16">
            {/* History sidebar */}
            <div 
              className={`h-full bg-sidebar border-r border-sidebar-border transition-all duration-300 ease-in-out ${
                isHistoryOpen ? "w-72" : "w-0"
              }`}
            >
              {isHistoryOpen && <ChatHistory />}
            </div>
            
            {/* Toggle history button */}
            <button 
              onClick={toggleHistory}
              className="absolute left-72 top-1/2 transform -translate-y-1/2 z-10 bg-sidebar border border-sidebar-border rounded-r-md p-1 text-sidebar-foreground hover:bg-sidebar-accent transition-all duration-300"
              style={{ left: isHistoryOpen ? "18rem" : "0" }}
            >
              {isHistoryOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
            </button>
            
            {/* Chat area */}
            <div className="flex-1 p-4 overflow-hidden flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-2xl font-bold">{t('common.chat')}</h1>
                <SuperbidButton variant="outline" size="sm">
                  <MessageSquare size={16} className="mr-2" />
                  {t('chat.newChat')}
                </SuperbidButton>
              </div>
              
              <div className="flex-1 overflow-hidden">
                <ChatInterface />
              </div>
            </div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Chat;
