
import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import { Database, Plus, Search, MoreHorizontal, Upload, File, FileText, Trash } from "lucide-react";
import SuperbidButton from "@/components/ui/SuperbidButton";
import SuperbidInput from "@/components/ui/SuperbidInput";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useTranslation } from "react-i18next";

const KnowledgeBase = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { t } = useTranslation();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const knowledgeBases = [
    {
      id: 1,
      name: t('knowledgeBase.productDocs'),
      description: t('knowledgeBase.productDocsDesc'),
      documentCount: 35,
      lastUpdated: "2 days ago",
    },
    {
      id: 2,
      name: t('knowledgeBase.customerFaq'),
      description: t('knowledgeBase.customerFaqDesc'),
      documentCount: 24,
      lastUpdated: "1 week ago",
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
              <h1 className="text-3xl font-bold mb-2">{t('knowledgeBase.title')}</h1>
              <p className="text-muted-foreground">
                {t('knowledgeBase.subtitle')}
              </p>
            </div>
            <SuperbidButton variant="primary">
              <Plus size={16} className="mr-2" /> {t('knowledgeBase.createNew')}
            </SuperbidButton>
          </div>

          <div className="mb-8">
            <SuperbidInput
              placeholder={t('knowledgeBase.search')}
              icon={<Search size={18} />}
              className="max-w-md"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {knowledgeBases.map((kb) => (
              <Card key={kb.id} className="animate-scale-in card-hover">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center space-x-2">
                      <div className="p-2 rounded-full bg-primary/10">
                        <Database size={18} className="text-primary" />
                      </div>
                      <CardTitle>{kb.name}</CardTitle>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <button className="p-1 rounded-full hover:bg-secondary">
                          <MoreHorizontal size={18} />
                        </button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>{t('knowledgeBase.actions')}</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <Upload size={16} className="mr-2" /> {t('knowledgeBase.uploadDocs')}
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <FileText size={16} className="mr-2" /> {t('knowledgeBase.viewDocs')}
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-500">
                          <Trash size={16} className="mr-2" /> {t('knowledgeBase.delete')}
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  <CardDescription>{kb.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">
                      <File size={14} className="inline mr-1" />
                      {kb.documentCount} {t('knowledgeBase.documents')}
                    </span>
                    <span className="text-muted-foreground">
                      {t('knowledgeBase.updated')} {kb.lastUpdated}
                    </span>
                  </div>
                </CardContent>
                <CardFooter>
                  <SuperbidButton variant="outline" fullWidth>
                    {t('knowledgeBase.manage')}
                  </SuperbidButton>
                </CardFooter>
              </Card>
            ))}

            {/* Empty state / Create new card */}
            <Card className="border-dashed border-2 flex flex-col items-center justify-center p-6 h-full animate-scale-in">
              <div className="p-4 rounded-full bg-secondary mb-4">
                <Plus size={24} className="text-muted-foreground" />
              </div>
              <h3 className="text-xl font-medium mb-2">{t('knowledgeBase.createNew')}</h3>
              <p className="text-center text-muted-foreground mb-4">
                {t('knowledgeBase.addAnother')}
              </p>
              <SuperbidButton variant="outline">
                <Plus size={16} className="mr-2" /> {t('knowledgeBase.createNew')}
              </SuperbidButton>
            </Card>
          </div>

          <div className="mt-12">
            <Card>
              <CardHeader>
                <CardTitle>{t('knowledgeBase.recentUpdates')}</CardTitle>
                <CardDescription>
                  {t('knowledgeBase.recentActivity')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-2 hover:bg-secondary/50 rounded-lg">
                    <div className="p-2 rounded-full bg-blue-100 dark:bg-blue-900">
                      <FileText size={16} className="text-blue-500" />
                    </div>
                    <div>
                      <p className="font-medium">{t('knowledgeBase.newDocAdded')}</p>
                      <p className="text-sm text-muted-foreground">
                        {t('knowledgeBase.docAddedDesc')}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Yesterday at 14:32
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-2 hover:bg-secondary/50 rounded-lg">
                    <div className="p-2 rounded-full bg-green-100 dark:bg-green-900">
                      <Upload size={16} className="text-green-500" />
                    </div>
                    <div>
                      <p className="font-medium">{t('knowledgeBase.bulkUpload')}</p>
                      <p className="text-sm text-muted-foreground">
                        {t('knowledgeBase.bulkUploadDesc')}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        3 days ago at 09:14
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowledgeBase;
