
import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import { Database, Plus, Search, MoreHorizontal, Upload, File, FileText, Trash } from "lucide-react";
import SuperbidButton from "@/components/ui/SuperbidButton";
import SuperbidInput from "@/components/ui/SuperbidInput";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const KnowledgeBase = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const knowledgeBases = [
    {
      id: 1,
      name: "Product Documentation",
      description: "Contains all product documentation and guides",
      documentCount: 35,
      lastUpdated: "2 days ago",
    },
    {
      id: 2,
      name: "Customer Support FAQ",
      description: "Frequently asked questions for customer support",
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
              <h1 className="text-3xl font-bold mb-2">Knowledge Base</h1>
              <p className="text-muted-foreground">
                Manage your knowledge bases for AI agents
              </p>
            </div>
            <SuperbidButton variant="primary">
              <Plus size={16} className="mr-2" /> Create Knowledge Base
            </SuperbidButton>
          </div>

          <div className="mb-8">
            <SuperbidInput
              placeholder="Search knowledge bases..."
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
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <Upload size={16} className="mr-2" /> Upload Documents
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <FileText size={16} className="mr-2" /> View All Documents
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-500">
                          <Trash size={16} className="mr-2" /> Delete
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
                      {kb.documentCount} documents
                    </span>
                    <span className="text-muted-foreground">
                      Updated {kb.lastUpdated}
                    </span>
                  </div>
                </CardContent>
                <CardFooter>
                  <SuperbidButton variant="outline" fullWidth>
                    Manage
                  </SuperbidButton>
                </CardFooter>
              </Card>
            ))}

            {/* Empty state / Create new card */}
            <Card className="border-dashed border-2 flex flex-col items-center justify-center p-6 h-full animate-scale-in">
              <div className="p-4 rounded-full bg-secondary mb-4">
                <Plus size={24} className="text-muted-foreground" />
              </div>
              <h3 className="text-xl font-medium mb-2">Create New</h3>
              <p className="text-center text-muted-foreground mb-4">
                Add another knowledge base for your agents
              </p>
              <SuperbidButton variant="outline">
                <Plus size={16} className="mr-2" /> Create New
              </SuperbidButton>
            </Card>
          </div>

          <div className="mt-12">
            <Card>
              <CardHeader>
                <CardTitle>Recent Updates</CardTitle>
                <CardDescription>
                  Recent activity in your knowledge bases
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-2 hover:bg-secondary/50 rounded-lg">
                    <div className="p-2 rounded-full bg-blue-100 dark:bg-blue-900">
                      <FileText size={16} className="text-blue-500" />
                    </div>
                    <div>
                      <p className="font-medium">New document added</p>
                      <p className="text-sm text-muted-foreground">
                        "Product User Guide v2.1" added to Product Documentation
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
                      <p className="font-medium">Bulk upload completed</p>
                      <p className="text-sm text-muted-foreground">
                        12 documents uploaded to Customer Support FAQ
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
