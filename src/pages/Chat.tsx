
import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import ChatInterface from "@/components/chat/ChatInterface";
import { Bot } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import SuperbidButton from "@/components/ui/SuperbidButton";
import { useTranslation } from "react-i18next";

const Chat = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { t } = useTranslation();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const agents = [
    { id: 1, name: t('chat.generalAssistant'), description: t('chat.generalAssistantDesc'), icon: <Bot size={20} /> },
    { id: 2, name: t('chat.customerSupport'), description: t('chat.customerSupportDesc'), icon: <Bot size={20} /> },
    { id: 3, name: t('chat.salesSpecialist'), description: t('chat.salesSpecialistDesc'), icon: <Bot size={20} /> },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header onMenuClick={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <div className="pt-20 pb-8 md:pl-64">
        <div className="container mx-auto p-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Sidebar with agents list */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <h2 className="text-xl font-bold mb-4">{t('chat.title')}</h2>
                <div className="space-y-3 mb-6">
                  {agents.map((agent) => (
                    <Card 
                      key={agent.id}
                      className={`cursor-pointer hover:border-primary transition-colors ${
                        agent.id === 1 ? "border-primary" : ""
                      }`}
                    >
                      <CardHeader className="p-4 pb-2">
                        <div className="flex items-center space-x-2">
                          <div className={`p-1.5 rounded-full ${
                            agent.id === 1 ? "bg-primary/10 text-primary" : "bg-secondary"
                          }`}>
                            {agent.icon}
                          </div>
                          <CardTitle className="text-base">{agent.name}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent className="p-4 pt-1">
                        <CardDescription>
                          {agent.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                
                <SuperbidButton variant="outline" fullWidth>
                  <Bot size={16} className="mr-2" /> {t('chat.newAgent')}
                </SuperbidButton>
              </div>
            </div>

            {/* Chat interface */}
            <div className="lg:col-span-3 h-[calc(100vh-180px)]">
              <ChatInterface className="h-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
