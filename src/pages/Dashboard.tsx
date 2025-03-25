
import React, { useState } from "react";
import { MessageSquare, Database, Bot, ArrowUpRight, AlertCircle, Clock } from "lucide-react";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import DashboardCard from "@/components/dashboard/DashboardCard";
import SuperbidButton from "@/components/ui/SuperbidButton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const modules = [
    {
      title: "Chat Interface",
      description: "Interact with your AI agents through an intuitive chat interface.",
      icon: <MessageSquare size={24} />,
      to: "/chat",
      delay: 0,
    },
    {
      title: "Knowledge Base",
      description: "Create and manage your custom knowledge bases.",
      icon: <Database size={24} />,
      to: "/knowledge-base",
      delay: 100,
    },
    {
      title: "AI Agents",
      description: "Configure and deploy custom AI agents for various tasks.",
      icon: <Bot size={24} />,
      to: "/agents",
      delay: 200,
    },
  ];

  const recentActivities = [
    {
      title: "New agent created",
      description: "You created a new Customer Support agent",
      time: "2 hours ago",
      icon: <Bot size={16} />,
    },
    {
      title: "Knowledge base updated",
      description: "Product Documentation base updated with 15 new documents",
      time: "Yesterday",
      icon: <Database size={16} />,
    },
    {
      title: "Chat session completed",
      description: "Completed a 25-message chat session with Marketing Agent",
      time: "2 days ago",
      icon: <MessageSquare size={16} />,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header onMenuClick={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <div className="pt-20 pb-16 md:pl-64">
        <div className="container mx-auto p-6">
          {/* Welcome section */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Welcome to Superbid AI</h1>
            <p className="text-muted-foreground">
              Your AI platform for building intelligent solutions
            </p>
          </div>

          {/* Stats overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 animate-fade-in">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Total Agents
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">3</div>
                <p className="text-xs text-muted-foreground mt-1">
                  <span className="text-green-500">↑ 12%</span> from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Knowledge Bases
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">2</div>
                <p className="text-xs text-muted-foreground mt-1">
                  <span className="text-green-500">↑ 5%</span> from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  Chat Sessions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">24</div>
                <p className="text-xs text-muted-foreground mt-1">
                  <span className="text-green-500">↑ 18%</span> from last month
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Modules section */}
          <h2 className="text-2xl font-bold mb-6">Modules</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {modules.map((module, index) => (
              <DashboardCard
                key={index}
                title={module.title}
                description={module.description}
                icon={module.icon}
                to={module.to}
                delay={module.delay}
              />
            ))}
          </div>

          {/* Recent Activity & Quick Actions */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-6">Recent Activity</h2>
              <Card className="animate-fade-in">
                <CardHeader>
                  <CardTitle>Activity Log</CardTitle>
                  <CardDescription>Your recent actions and updates</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {recentActivities.map((activity, index) => (
                      <div key={index} className="flex">
                        <div className="mr-4 flex items-center justify-center">
                          <div className="rounded-full bg-secondary p-2">
                            {activity.icon}
                          </div>
                        </div>
                        <div className="space-y-1">
                          <p className="font-medium leading-none">{activity.title}</p>
                          <p className="text-sm text-muted-foreground">
                            {activity.description}
                          </p>
                          <div className="flex items-center text-xs text-muted-foreground">
                            <Clock size={12} className="mr-1" />
                            {activity.time}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">Quick Actions</h2>
              <Card className="animate-fade-in">
                <CardHeader>
                  <CardTitle>Actions</CardTitle>
                  <CardDescription>Shortcuts to common tasks</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <SuperbidButton variant="outline" fullWidth className="justify-between">
                    <span>New Chat Session</span>
                    <ArrowUpRight size={16} />
                  </SuperbidButton>
                  <SuperbidButton variant="outline" fullWidth className="justify-between">
                    <span>Create Knowledge Base</span>
                    <ArrowUpRight size={16} />
                  </SuperbidButton>
                  <SuperbidButton variant="outline" fullWidth className="justify-between">
                    <span>Configure New Agent</span>
                    <ArrowUpRight size={16} />
                  </SuperbidButton>
                </CardContent>
              </Card>

              <Card className="mt-6 bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800 animate-fade-in">
                <CardHeader className="pb-2">
                  <div className="flex items-center space-x-2">
                    <AlertCircle size={18} className="text-amber-500" />
                    <CardTitle>Getting Started</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-4">
                    Complete these steps to get the most out of Superbid AI:
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <div className="w-5 h-5 rounded-full border border-green-500 flex items-center justify-center mr-2">
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      Create your first agent
                    </li>
                    <li className="flex items-center">
                      <div className="w-5 h-5 rounded-full border border-muted-foreground flex items-center justify-center mr-2">
                        <div className="w-3 h-3 rounded-full bg-muted-foreground/30"></div>
                      </div>
                      Upload documents to a knowledge base
                    </li>
                    <li className="flex items-center">
                      <div className="w-5 h-5 rounded-full border border-muted-foreground flex items-center justify-center mr-2">
                        <div className="w-3 h-3 rounded-full bg-muted-foreground/30"></div>
                      </div>
                      Start your first chat session
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
