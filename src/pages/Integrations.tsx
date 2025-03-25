
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

const Integrations = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isApiKeyRevealed, setIsApiKeyRevealed] = useState(false);
  const [apiKey] = useState("sk-1234567890abcdefghijklmnopqrstu");
  
  return (
    <div className="min-h-screen bg-background">
      <Header onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      
      <div className="pt-20 pb-16 md:pl-64">
        <div className="container mx-auto p-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Integrações</h1>
            <p className="text-muted-foreground">
              Integre seus agentes com serviços externos e APIs
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
                    API Access
                  </CardTitle>
                  <CardDescription>
                    Use these API credentials to access your agents from external applications
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="glass-card bg-opacity-50 dark:bg-opacity-20 p-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <h3 className="font-medium mb-1">API Key</h3>
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
                          {isApiKeyRevealed ? "Hide" : "Reveal"}
                        </SuperbidButton>
                        <SuperbidButton 
                          variant="outline" 
                          size="sm"
                          onClick={() => navigator.clipboard.writeText(apiKey)}
                        >
                          Copy
                        </SuperbidButton>
                        <SuperbidButton 
                          variant="primary"
                          size="sm"
                        >
                          Regenerate
                        </SuperbidButton>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mt-6">
                    <h3 className="font-medium">API Documentation</h3>
                    <p className="text-sm text-muted-foreground">
                      Learn how to integrate with our API to access your agents and knowledge bases
                    </p>
                    <SuperbidButton
                      variant="outline"
                      className="flex items-center gap-2"
                    >
                      <span>View Documentation</span>
                      <ExternalLink size={16} />
                    </SuperbidButton>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Example Code</CardTitle>
                  <CardDescription>Use these examples to get started with our API</CardDescription>
                </CardHeader>
                <CardContent>
                  <Collapsible className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-medium">JavaScript Example</h3>
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
                    Chat Integrations
                  </CardTitle>
                  <CardDescription>
                    Connect your agents to messaging platforms
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
                          <h3 className="font-medium">WhatsApp</h3>
                          <p className="text-sm text-muted-foreground">Connect your agent to WhatsApp</p>
                        </div>
                      </div>
                      <SuperbidButton
                        variant="outline"
                        size="sm"
                      >
                        Configure
                      </SuperbidButton>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-md bg-purple-100 dark:bg-purple-900">
                          <Slack className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                        </div>
                        <div>
                          <h3 className="font-medium">Slack</h3>
                          <p className="text-sm text-muted-foreground">Connect your agent to Slack</p>
                        </div>
                      </div>
                      <SuperbidButton
                        variant="outline"
                        size="sm"
                      >
                        Configure
                      </SuperbidButton>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mt-4">
                      More integrations coming soon. Contact us if you have specific requirements.
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
                    Webhooks
                  </CardTitle>
                  <CardDescription>
                    Set up webhooks to receive notifications when certain events occur
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">Active Webhooks</h3>
                      <SuperbidButton
                        variant="outline"
                        size="sm"
                        icon={<PlusCircle size={16} />}
                      >
                        Add Webhook
                      </SuperbidButton>
                    </div>
                    
                    <div className="glass-card p-4 space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b">
                        <div>
                          <h4 className="font-medium">Chat Completed</h4>
                          <p className="text-sm text-muted-foreground">https://example.com/webhooks/chat</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-400">Active</span>
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
                          <h4 className="font-medium">Agent Created</h4>
                          <p className="text-sm text-muted-foreground">https://example.com/webhooks/agent</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-400">Active</span>
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
                      <h3 className="font-medium mb-2">Add New Webhook</h3>
                      <div className="space-y-4">
                        <SuperbidInput
                          label="Webhook URL"
                          placeholder="https://example.com/webhook"
                        />
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <SuperbidInput
                            label="Secret Key (Optional)"
                            placeholder="Webhook secret key"
                          />
                          <div className="space-y-2">
                            <label className="block text-sm font-medium text-foreground">
                              Event Type
                            </label>
                            <select className="w-full px-3 py-2 bg-background border rounded-md">
                              <option value="chat_completed">Chat Completed</option>
                              <option value="agent_created">Agent Created</option>
                              <option value="knowledge_updated">Knowledge Base Updated</option>
                            </select>
                          </div>
                        </div>
                        <SuperbidButton
                          variant="primary"
                        >
                          Add Webhook
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
