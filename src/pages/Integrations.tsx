
import React, { useState } from "react";
import { MessageSquare, Slack, Link, WhatsApp } from "lucide-react";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import SuperbidButton from "@/components/ui/SuperbidButton";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";

const Integrations = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { toast } = useToast();
  const [activeIntegration, setActiveIntegration] = useState<string | null>(null);
  const [webhookUrl, setWebhookUrl] = useState("");
  const [slackToken, setSlackToken] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleGenerateApiKey = (integration: string) => {
    const apiKey = `sk-${Math.random().toString(36).substring(2, 15)}${Math.random().toString(36).substring(2, 15)}`;
    setActiveIntegration(integration);
    toast({
      title: "API Key Generated",
      description: `Your ${integration} API key has been generated. Keep it safe!`,
    });
    
    // In a real application, you would store this API key securely
    console.log(`Generated API Key for ${integration}:`, apiKey);
  };

  const handleConnect = (integration: string) => {
    toast({
      title: "Connection Initiated",
      description: `Connecting to ${integration}...`,
    });
    
    // In a real application, you would handle the connection process here
    setTimeout(() => {
      setActiveIntegration(integration);
      toast({
        title: "Connection Successful",
        description: `Successfully connected to ${integration}!`,
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onMenuClick={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <div className="pt-20 pb-16 md:pl-64">
        <div className="container mx-auto p-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Integrações</h1>
            <p className="text-muted-foreground">
              Conecte seus agentes de IA com outras plataformas
            </p>
          </div>

          <Tabs defaultValue="api" className="space-y-6">
            <TabsList className="grid grid-cols-3 w-full md:w-[400px]">
              <TabsTrigger value="api">API</TabsTrigger>
              <TabsTrigger value="chat">Chat</TabsTrigger>
              <TabsTrigger value="webhooks">Webhooks</TabsTrigger>
            </TabsList>
            
            <TabsContent value="api" className="space-y-6">
              <Card className="animate-fade-in">
                <CardHeader>
                  <CardTitle>API de Acesso</CardTitle>
                  <CardDescription>
                    Gere chaves de API para acessar seus agentes programaticamente
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 p-4 rounded-md mb-4">
                    <p className="text-sm">
                      As chaves de API permitem que você integre seus agentes em qualquer aplicação ou serviço.
                      Mantenha suas chaves seguras e não as compartilhe publicamente.
                    </p>
                  </div>
                  
                  <div className="grid gap-4">
                    {activeIntegration === "api" ? (
                      <div className="space-y-4">
                        <div className="flex flex-col space-y-2">
                          <label className="text-sm font-medium">Sua chave de API</label>
                          <div className="flex gap-2">
                            <Input 
                              type="text" 
                              value="sk-••••••••••••••••••••••••••••••" 
                              disabled 
                              className="font-mono"
                            />
                            <SuperbidButton variant="outline" onClick={() => {
                              toast({
                                title: "Copiado!",
                                description: "Chave de API copiada para a área de transferência."
                              });
                            }}>
                              Copiar
                            </SuperbidButton>
                          </div>
                        </div>
                        <SuperbidButton 
                          variant="destructive" 
                          onClick={() => setActiveIntegration(null)}
                        >
                          Revogar Chave de API
                        </SuperbidButton>
                      </div>
                    ) : (
                      <SuperbidButton 
                        onClick={() => handleGenerateApiKey("api")}
                      >
                        Gerar Nova Chave de API
                      </SuperbidButton>
                    )}
                  </div>
                </CardContent>
              </Card>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-2">
                      <MessageSquare className="h-5 w-5 text-primary" />
                      <CardTitle>Documentação da API</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Consulte nossa documentação completa para entender como utilizar a API.
                    </p>
                    <SuperbidButton variant="outline" className="w-full">
                      Ver Documentação
                    </SuperbidButton>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-2">
                      <Link className="h-5 w-5 text-primary" />
                      <CardTitle>Exemplos de Código</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Veja exemplos de como implementar a API em diferentes linguagens.
                    </p>
                    <SuperbidButton variant="outline" className="w-full">
                      Ver Exemplos
                    </SuperbidButton>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="chat" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-2">
                      <WhatsApp className="h-5 w-5 text-green-500" />
                      <CardTitle>WhatsApp</CardTitle>
                    </div>
                    <CardDescription>
                      Conecte seus agentes ao WhatsApp
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {activeIntegration === "whatsapp" ? (
                      <div className="space-y-4">
                        <div className="p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-md">
                          <p className="text-sm">Conectado ao WhatsApp</p>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Número de telefone</label>
                          <Input 
                            value={phoneNumber} 
                            onChange={(e) => setPhoneNumber(e.target.value)} 
                            placeholder="+55 (11) 99999-9999"
                          />
                        </div>
                        <SuperbidButton 
                          variant="outline" 
                          className="w-full"
                          onClick={() => {
                            toast({
                              title: "Configurações atualizadas",
                              description: "As configurações do WhatsApp foram atualizadas."
                            });
                          }}
                        >
                          Atualizar Configurações
                        </SuperbidButton>
                        <SuperbidButton 
                          variant="destructive" 
                          className="w-full"
                          onClick={() => setActiveIntegration(null)}
                        >
                          Desconectar
                        </SuperbidButton>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <p className="text-sm text-muted-foreground">
                          Integre seus agentes de IA com o WhatsApp para oferecer suporte via mensagens.
                        </p>
                        <SuperbidButton 
                          className="w-full"
                          onClick={() => handleConnect("whatsapp")}
                        >
                          Conectar WhatsApp
                        </SuperbidButton>
                      </div>
                    )}
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-2">
                      <Slack className="h-5 w-5 text-purple-500" />
                      <CardTitle>Slack</CardTitle>
                    </div>
                    <CardDescription>
                      Conecte seus agentes ao Slack
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {activeIntegration === "slack" ? (
                      <div className="space-y-4">
                        <div className="p-3 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-md">
                          <p className="text-sm">Conectado ao Slack</p>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Token da API</label>
                          <Input 
                            type="password"
                            value={slackToken} 
                            onChange={(e) => setSlackToken(e.target.value)} 
                            placeholder="xoxb-..."
                          />
                        </div>
                        <SuperbidButton 
                          variant="outline" 
                          className="w-full"
                          onClick={() => {
                            toast({
                              title: "Configurações atualizadas",
                              description: "As configurações do Slack foram atualizadas."
                            });
                          }}
                        >
                          Atualizar Configurações
                        </SuperbidButton>
                        <SuperbidButton 
                          variant="destructive" 
                          className="w-full"
                          onClick={() => setActiveIntegration(null)}
                        >
                          Desconectar
                        </SuperbidButton>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <p className="text-sm text-muted-foreground">
                          Integre seus agentes de IA com o Slack para oferecer suporte via mensagens.
                        </p>
                        <SuperbidButton 
                          className="w-full"
                          onClick={() => handleConnect("slack")}
                        >
                          Conectar Slack
                        </SuperbidButton>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="webhooks" className="space-y-6">
              <Card className="animate-fade-in">
                <CardHeader>
                  <CardTitle>Webhooks</CardTitle>
                  <CardDescription>
                    Configure webhooks para receber notificações de eventos
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 p-4 rounded-md mb-4">
                    <p className="text-sm">
                      Os webhooks permitem que sua aplicação receba notificações em tempo real
                      quando certos eventos ocorrem na plataforma Superbid AI.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">URL do Webhook</label>
                      <Input 
                        type="url" 
                        value={webhookUrl} 
                        onChange={(e) => setWebhookUrl(e.target.value)} 
                        placeholder="https://sua-aplicacao.com/webhook"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Eventos</label>
                      <div className="grid gap-2">
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="agent-interaction" className="rounded border-gray-300" />
                          <label htmlFor="agent-interaction" className="text-sm">Interações com Agentes</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="kb-update" className="rounded border-gray-300" />
                          <label htmlFor="kb-update" className="text-sm">Atualizações na Base de Conhecimento</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="agent-creation" className="rounded border-gray-300" />
                          <label htmlFor="agent-creation" className="text-sm">Criação/Modificação de Agentes</label>
                        </div>
                      </div>
                    </div>
                    
                    <SuperbidButton 
                      className="w-full"
                      onClick={() => {
                        if (!webhookUrl) {
                          toast({
                            title: "Erro",
                            description: "Por favor, insira uma URL válida para o webhook.",
                            variant: "destructive"
                          });
                          return;
                        }
                        
                        toast({
                          title: "Webhook configurado",
                          description: "Seu webhook foi configurado com sucesso!"
                        });
                      }}
                    >
                      Salvar Configurações
                    </SuperbidButton>
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
