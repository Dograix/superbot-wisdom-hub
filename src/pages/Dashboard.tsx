
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Header from "@/components/layout/Header";
import { 
  SidebarProvider, 
  Sidebar, 
  SidebarContent, 
  SidebarTrigger,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton
} from "@/components/ui/sidebar";
import DashboardCard from "@/components/dashboard/DashboardCard";
import StatCard from "@/components/dashboard/StatCard";
import RecentActivity from "@/components/dashboard/RecentActivity";
import QuickActions from "@/components/dashboard/QuickActions";
import { getDashboardData } from "@/data/dashboardData";
import { 
  Home, 
  MessageSquare, 
  Database, 
  Bot, 
  Settings, 
  HelpCircle, 
  Link as LinkIcon
} from "lucide-react";

const Dashboard = () => {
  const { t } = useTranslation();
  const { modules, stats, activities, quickActions, getStartedSteps } = getDashboardData();

  return (
    <SidebarProvider defaultOpen={true}>
      <div className="min-h-screen flex w-full bg-background">
        <Sidebar>
          <SidebarContent>
            <SidebarHeader className="flex items-center justify-between p-4">
              <span className="font-bold text-xl">JARVIS AI</span>
              <SidebarTrigger />
            </SidebarHeader>
            
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="/dashboard" className="text-sidebar-primary font-medium">
                    <Home size={18} />
                    <span>{t('common.dashboard')}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="/chat" className="text-sidebar-foreground/80">
                    <MessageSquare size={18} />
                    <span>{t('common.chat')}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="/knowledge-base" className="text-sidebar-foreground/80">
                    <Database size={18} />
                    <span>{t('common.knowledgeBase')}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="/agents" className="text-sidebar-foreground/80">
                    <Bot size={18} />
                    <span>{t('common.agents')}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="/integrations" className="text-sidebar-foreground/80">
                    <LinkIcon size={18} />
                    <span>{t('common.integrations')}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="/settings" className="text-sidebar-foreground/80">
                    <Settings size={18} />
                    <span>{t('common.settings')}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="/help" className="text-sidebar-foreground/80">
                    <HelpCircle size={18} />
                    <span>{t('common.help')}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
        </Sidebar>

        <div className="flex-1 flex flex-col h-screen">
          <Header />
          
          <div className="pt-20 pb-16 px-6 overflow-auto h-full">
            <div className="container mx-auto">
              {/* Welcome section */}
              <div className="mb-8">
                <h1 className="text-3xl font-bold mb-2">{t('dashboard.welcome')}</h1>
                <p className="text-muted-foreground">
                  {t('dashboard.subtitle')}
                </p>
              </div>

              {/* Stats overview */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 animate-fade-in">
                {stats.map((stat, index) => (
                  <StatCard 
                    key={index}
                    title={stat.title}
                    value={stat.value}
                    change={stat.change}
                  />
                ))}
              </div>

              {/* Modules section */}
              <h2 className="text-2xl font-bold mb-6">{t('dashboard.modules')}</h2>
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
                  <h2 className="text-2xl font-bold mb-6">{t('dashboard.recentActivity')}</h2>
                  <RecentActivity activities={activities} />
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-6">{t('dashboard.quickActions')}</h2>
                  <QuickActions 
                    actions={quickActions}
                    steps={getStartedSteps}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;
