
import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import DashboardCard from "@/components/dashboard/DashboardCard";
import StatCard from "@/components/dashboard/StatCard";
import RecentActivity from "@/components/dashboard/RecentActivity";
import QuickActions from "@/components/dashboard/QuickActions";
import { getDashboardData } from "@/data/dashboardData";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { modules, stats, activities, quickActions, getStartedSteps } = getDashboardData();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onMenuClick={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <div className="pt-20 pb-16 md:pl-64">
        <div className="container mx-auto p-6">
          {/* Welcome section */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Welcome to Jarvis AI</h1>
            <p className="text-muted-foreground">
              Your AI platform for building intelligent solutions
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
              <RecentActivity activities={activities} />
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">Quick Actions</h2>
              <QuickActions 
                actions={quickActions}
                steps={getStartedSteps}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
