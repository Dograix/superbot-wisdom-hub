
import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import { Bot, Plus, Search, MoreHorizontal, MessageSquare, Database, Trash, Edit, Play } from "lucide-react";
import SuperbidButton from "@/components/ui/SuperbidButton";
import SuperbidInput from "@/components/ui/SuperbidInput";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "react-i18next";

const Agents = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { t } = useTranslation();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const agents = [
    {
      id: 1,
      name: t('agents.generalAssistant'),
      description: t('agents.generalAssistantDesc'),
      status: "active",
      knowledgeBases: [t('knowledgeBase.productDocs')],
      usage: `42 ${t('agents.chatsThisMonth')}`,
    },
    {
      id: 2,
      name: t('agents.customerSupport'),
      description: t('agents.customerSupportDesc'),
      status: "active",
      knowledgeBases: [t('knowledgeBase.customerFaq'), t('knowledgeBase.productDocs')],
      usage: `128 ${t('agents.chatsThisMonth')}`,
    },
    {
      id: 3,
      name: t('agents.salesSpecialist'),
      description: t('agents.salesSpecialistDesc'),
      status: "inactive",
      knowledgeBases: [t('knowledgeBase.productDocs')],
      usage: `5 ${t('agents.chatsThisMonth')}`,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header onMenuClick={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <div className="pt-20 pb-16 md:pl-64">
        <div className="container mx-auto p-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-bold mb-2">{t('agents.title')}</h1>
              <p className="text-muted-foreground">
                {t('agents.subtitle')}
              </p>
            </div>
            <SuperbidButton variant="primary">
              <Plus size={16} className="mr-2" /> {t('agents.createNew')}
            </SuperbidButton>
          </div>

          <div className="mb-8">
            <SuperbidInput
              placeholder={t('agents.search')}
              icon={<Search size={18} />}
              className="max-w-md"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {agents.map((agent) => (
              <Card key={agent.id} className="animate-scale-in card-hover">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center space-x-2">
                      <div className="p-2 rounded-full bg-primary/10">
                        <Bot size={18} className="text-primary" />
                      </div>
                      <div>
                        <CardTitle>{agent.name}</CardTitle>
                        <Badge variant={agent.status === "active" ? "default" : "secondary"} className="mt-1">
                          {agent.status === "active" ? t('agents.active') : t('agents.inactive')}
                        </Badge>
                      </div>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <button className="p-1 rounded-full hover:bg-secondary">
                          <MoreHorizontal size={18} />
                        </button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>{t('agents.actions')}</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <Edit size={16} className="mr-2" /> {t('agents.editAgent')}
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Play size={16} className="mr-2" /> {t('agents.testAgent')}
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <MessageSquare size={16} className="mr-2" /> {t('agents.startChat')}
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-500">
                          <Trash size={16} className="mr-2" /> {t('knowledgeBase.delete')}
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">
                    {agent.description}
                  </p>
                  <div className="space-y-2">
                    <div className="flex gap-2 text-sm">
                      <Database size={14} className="mt-0.5 text-muted-foreground" />
                      <div>
                        <p className="font-medium">{t('agents.knowledgeBases')}</p>
                        <p className="text-muted-foreground">{agent.knowledgeBases.join(", ")}</p>
                      </div>
                    </div>
                    <div className="flex gap-2 text-sm">
                      <MessageSquare size={14} className="mt-0.5 text-muted-foreground" />
                      <p className="text-muted-foreground">{agent.usage}</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <SuperbidButton variant="outline" className="flex-1">
                    <Edit size={14} className="mr-1" /> {t('agents.edit')}
                  </SuperbidButton>
                  <SuperbidButton variant="primary" className="flex-1">
                    <MessageSquare size={14} className="mr-1" /> {t('agents.chat')}
                  </SuperbidButton>
                </CardFooter>
              </Card>
            ))}

            {/* Empty state / Create new card */}
            <Card className="border-dashed border-2 flex flex-col items-center justify-center p-6 h-full animate-scale-in">
              <div className="p-4 rounded-full bg-secondary mb-4">
                <Plus size={24} className="text-muted-foreground" />
              </div>
              <h3 className="text-xl font-medium mb-2">{t('agents.createNew')}</h3>
              <p className="text-center text-muted-foreground mb-4">
                {t('agents.buildAgent')}
              </p>
              <SuperbidButton variant="outline">
                <Plus size={16} className="mr-2" /> {t('knowledgeBase.createNew')}
              </SuperbidButton>
            </Card>
          </div>

          <div className="mt-12">
            <Card>
              <CardHeader>
                <CardTitle>{t('agents.agentPerformance')}</CardTitle>
                <CardDescription>
                  {t('agents.performanceDesc')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {agents.filter(a => a.status === "active").map((agent) => (
                    <div key={agent.id} className="flex items-center gap-4">
                      <div className="p-2 rounded-full bg-primary/10">
                        <Bot size={18} className="text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">{agent.name}</p>
                        <div className="w-full h-2 bg-secondary rounded-full mt-2">
                          <div 
                            className="h-2 bg-primary rounded-full" 
                            style={{ 
                              width: agent.id === 1 ? "42%" : "78%" 
                            }}
                          ></div>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">{agent.id === 1 ? "42%" : "78%"}</p>
                        <p className="text-xs text-muted-foreground">{t('agents.successRate')}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agents;
