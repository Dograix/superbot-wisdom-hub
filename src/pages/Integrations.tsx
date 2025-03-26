
import React, { useState } from "react";
import { 
  Link2, MessageSquare, Webhook, Globe, Slack, 
  ChevronRight, ExternalLink, PlusCircle, Trash2
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import SuperbidButton from "@/components/ui/SuperbidButton";
import SuperbidInput from "@/components/ui/SuperbidInput";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import { useTranslation } from "react-i18next";

const Integrations = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isApiKeyRevealed, setIsApiKeyRevealed] = useState(false);
  const [apiKey] = useState("sk-1234567890abcdefghijklmnopqrstu");
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen bg-background">
      <Header onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      
      <div className="pt-20 pb-16 md:pl-64">
        <div className="container mx-auto p-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">{t('integrations.title')}</h1>
            <p className="text-muted-foreground">
              {t('integrations.subtitle')}
            </p>
          </div>
          
          <Tabs defaultValue="api" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="api">API</TabsTrigger>
              <TabsTrigger value="chat">Chat</TabsTrigger>
              <TabsTrigger value="webhooks">Webhooks</TabsTrigger>
            </TabsList>
            
            <TabsContent value="api" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="h-5 w-5" />
                    {t('integrations.apiAccess')}
                  </CardTitle>
                  <CardDescription>
                    {t('integrations.apiDesc')}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="glass-card bg-opacity-50 dark:bg-opacity-20 p-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <h3 className="font-medium mb-1">{t('integrations.apiKey')}</h3>
                        <div className="flex items-center space-x-2">
                          <code className="bg-muted p-1 rounded text-sm">
                            {isApiKeyRevealed ? apiKey : "••••••••••••••••••••••••••••••••"}
                          </code>
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-2">
                        <SuperbidButton 
                          variant="outline" 
                          size="sm"
                          onClick={() => setIsApiKeyRevealed(!isApiKeyRevealed)}
                        >
                          {isApiKeyRevealed ? t('integrations.hide') : t('integrations.reveal')}
                        </SuperbidButton>
                        <SuperbidButton 
                          variant="outline" 
                          size="sm"
                          onClick={() => navigator.clipboard.writeText(apiKey)}
                        >
                          {t('integrations.copy')}
                        </SuperbidButton>
                        <SuperbidButton 
                          variant="primary"
                          size="sm"
                        >
                          {t('integrations.regenerate')}
                        </SuperbidButton>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mt-6">
                    <h3 className="font-medium">{t('integrations.apiDocs')}</h3>
                    <p className="text-sm text-muted-foreground">
                      {t('integrations.apiDocsDesc')}
                    </p>
                    <SuperbidButton
                      variant="outline"
                      className="flex items-center gap-2"
                    >
                      <span>{t('integrations.viewDocs')}</span>
                      <ExternalLink size={16} />
                    </SuperbidButton>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>{t('integrations.exampleCode')}</CardTitle>
                  <CardDescription>{t('integrations.exampleCodeDesc')}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Collapsible className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-medium">{t('integrations.jsExample')}</h3>
                      <CollapsibleTrigger asChild>
                        <SuperbidButton variant="ghost" size="sm">
                          <ChevronRight className="h-4 w-4" />
                          <span className="sr-only">Toggle</span>
                        </SuperbidButton>
                      </CollapsibleTrigger>
                    </div>
                    <CollapsibleContent className="space-y-2">
                      <div className="rounded-md bg-muted p-4">
                        <pre className="text-sm">
                          {`
const fetchAgentResponse = async (message) => {
  const response = await fetch('https://api.superbid.ai/v1/chat', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ${apiKey}'
    },
    body: JSON.stringify({
      agent_id: 'agent_123',
      message: message
    })
  });
  
  return await response.json();
};
                          `}
                        </pre>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="chat" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5" />
                    {t('integrations.chatIntegrations')}
                  </CardTitle>
                  <CardDescription>
                    {t('integrations.chatDesc')}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-md bg-green-100 dark:bg-green-900">
                          <MessageSquare className="h-5 w-5 text-green-600 dark:text-green-400" />
                        </div>
                        <div>
                          <h3 className="font-medium">{t('integrations.whatsapp')}</h3>
                          <p className="text-sm text-muted-foreground">{t('integrations.whatsappDesc')}</p>
                        </div>
                      </div>
                      <SuperbidButton
                        variant="outline"
                        size="sm"
                      >
                        {t('integrations.configure')}
                      </SuperbidButton>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-md bg-purple-100 dark:bg-purple-900">
                          <Slack className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                        </div>
                        <div>
                          <h3 className="font-medium">{t('integrations.slack')}</h3>
                          <p className="text-sm text-muted-foreground">{t('integrations.slackDesc')}</p>
                        </div>
                      </div>
                      <SuperbidButton
                        variant="outline"
                        size="sm"
                      >
                        {t('integrations.configure')}
                      </SuperbidButton>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mt-4">
                      {t('integrations.moreComingSoon')}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="webhooks" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Webhook className="h-5 w-5" />
                    {t('integrations.webhooks')}
                  </CardTitle>
                  <CardDescription>
                    {t('integrations.webhooksDesc')}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">{t('integrations.activeWebhooks')}</h3>
                      <SuperbidButton
                        variant="outline"
                        size="sm"
                        icon={<PlusCircle size={16} />}
                      >
                        {t('integrations.addWebhook')}
                      </SuperbidButton>
                    </div>
                    
                    <div className="glass-card p-4 space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b">
                        <div>
                          <h4 className="font-medium">{t('integrations.chatCompleted')}</h4>
                          <p className="text-sm text-muted-foreground">https://example.com/webhooks/chat</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-400">{t('integrations.active')}</span>
                          <SuperbidButton
                            variant="outline"
                            size="sm"
                          >
                            <Trash2 size={16} />
                          </SuperbidButton>
                        </div>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div>
                          <h4 className="font-medium">{t('integrations.agentCreated')}</h4>
                          <p className="text-sm text-muted-foreground">https://example.com/webhooks/agent</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-400">{t('integrations.active')}</span>
                          <SuperbidButton
                            variant="outline"
                            size="sm"
                          >
                            <Trash2 size={16} />
                          </SuperbidButton>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <h3 className="font-medium mb-2">{t('integrations.addNewWebhook')}</h3>
                      <div className="space-y-4">
                        <SuperbidInput
                          label={t('integrations.webhookUrl')}
                          placeholder="https://example.com/webhook"
                        />
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <SuperbidInput
                            label={t('integrations.secretKey')}
                            placeholder="Webhook secret key"
                          />
                          <div className="space-y-2">
                            <label className="block text-sm font-medium text-foreground">
                              {t('integrations.eventType')}
                            </label>
                            <select className="w-full px-3 py-2 bg-background border rounded-md">
                              <option value="chat_completed">{t('integrations.chatCompleted')}</option>
                              <option value="agent_created">{t('integrations.agentCreated')}</option>
                              <option value="knowledge_updated">{t('knowledgeBase.title')} Updated</option>
                            </select>
                          </div>
                        </div>
                        <SuperbidButton
                          variant="primary"
                        >
                          {t('integrations.addWebhook')}
                        </SuperbidButton>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Integrations;
