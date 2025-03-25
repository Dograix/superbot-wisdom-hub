
import React, { useState } from "react";
import { Settings as SettingsIcon } from "lucide-react";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import SuperbidButton from "@/components/ui/SuperbidButton";
import { useToast } from "@/hooks/use-toast";

const Settings = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { toast } = useToast();
  
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onMenuClick={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <div className="pt-20 pb-16 md:pl-64">
        <div className="container mx-auto p-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Configurações</h1>
            <p className="text-muted-foreground">
              Gerencie as configurações da sua conta
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <SettingsIcon className="h-5 w-5 text-primary" />
                  <CardTitle>Configurações da Conta</CardTitle>
                </div>
                <CardDescription>
                  Gerencie suas informações pessoais
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Atualize suas informações de perfil, preferências e configurações de segurança.
                </p>
                <SuperbidButton 
                  variant="outline" 
                  className="w-full"
                  onClick={() => {
                    toast({
                      title: "Em desenvolvimento",
                      description: "Esta funcionalidade estará disponível em breve."
                    });
                  }}
                >
                  Editar Perfil
                </SuperbidButton>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <SettingsIcon className="h-5 w-5 text-primary" />
                  <CardTitle>Configurações da API</CardTitle>
                </div>
                <CardDescription>
                  Gerencie suas chaves de API
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Visualize e gerencie suas chaves de API para integração com outras plataformas.
                </p>
                <SuperbidButton 
                  variant="outline" 
                  className="w-full"
                  onClick={() => {
                    toast({
                      title: "Em desenvolvimento",
                      description: "Esta funcionalidade estará disponível em breve."
                    });
                  }}
                >
                  Gerenciar Chaves de API
                </SuperbidButton>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
