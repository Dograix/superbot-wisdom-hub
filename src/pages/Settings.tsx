
import React, { useState } from "react";
import { Settings as SettingsIcon } from "lucide-react";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import SuperbidButton from "@/components/ui/SuperbidButton";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "react-i18next";

const Settings = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { toast } = useToast();
  const { t } = useTranslation();
  
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
            <h1 className="text-3xl font-bold mb-2">{t('settings.title')}</h1>
            <p className="text-muted-foreground">
              {t('settings.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <SettingsIcon className="h-5 w-5 text-primary" />
                  <CardTitle>{t('settings.accountSettings')}</CardTitle>
                </div>
                <CardDescription>
                  {t('settings.accountDesc')}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  {t('settings.accountInfo')}
                </p>
                <SuperbidButton 
                  variant="outline" 
                  className="w-full"
                  onClick={() => {
                    toast({
                      title: t('settings.inDevelopment'),
                      description: t('settings.comingSoon')
                    });
                  }}
                >
                  {t('settings.editProfile')}
                </SuperbidButton>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <SettingsIcon className="h-5 w-5 text-primary" />
                  <CardTitle>{t('settings.apiSettings')}</CardTitle>
                </div>
                <CardDescription>
                  {t('settings.apiDesc')}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  {t('settings.apiInfo')}
                </p>
                <SuperbidButton 
                  variant="outline" 
                  className="w-full"
                  onClick={() => {
                    toast({
                      title: t('settings.inDevelopment'),
                      description: t('settings.comingSoon')
                    });
                  }}
                >
                  {t('settings.manageApiKeys')}
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
