
import React, { ReactNode } from "react";
import { MessageSquare, Database, Bot } from "lucide-react";
import i18next from "i18next";

export type ModuleItem = {
  title: string;
  description: string;
  icon: ReactNode;
  to: string;
  delay: number;
};

export type StatItem = {
  title: string;
  value: number | string;
  change: {
    value: string;
    direction: "up" | "down";
    percentage: string;
  };
};

export type ActivityItem = {
  title: string;
  description: string;
  time: string;
  icon: ReactNode;
};

export type QuickActionItem = {
  label: string;
  action: () => void;
};

export type GetStartedStep = {
  label: string;
  completed: boolean;
};

export const getDashboardData = () => {
  // Use i18next directly instead of useTranslation hook
  const t = (key: string) => i18next.t(key);

  const modules: ModuleItem[] = [
    {
      title: t('dashboardCards.chatInterface.title'),
      description: t('dashboardCards.chatInterface.description'),
      icon: React.createElement(MessageSquare, { size: 24 }),
      to: "/chat",
      delay: 0,
    },
    {
      title: t('dashboardCards.knowledgeBase.title'),
      description: t('dashboardCards.knowledgeBase.description'),
      icon: React.createElement(Database, { size: 24 }),
      to: "/knowledge-base",
      delay: 100,
    },
    {
      title: t('dashboardCards.aiAgents.title'),
      description: t('dashboardCards.aiAgents.description'),
      icon: React.createElement(Bot, { size: 24 }),
      to: "/agents",
      delay: 200,
    },
  ];

  const stats: StatItem[] = [
    {
      title: "Total Agents",
      value: 3,
      change: {
        value: "from last month",
        direction: "up",
        percentage: "12%"
      }
    },
    {
      title: "Knowledge Bases",
      value: 2,
      change: {
        value: "from last month",
        direction: "up",
        percentage: "5%"
      }
    },
    {
      title: "Chat Sessions",
      value: 24,
      change: {
        value: "from last month",
        direction: "up",
        percentage: "18%"
      }
    }
  ];

  const activities: ActivityItem[] = [
    {
      title: "New agent created",
      description: "You created a new Customer Support agent",
      time: "2 hours ago",
      icon: React.createElement(Bot, { size: 16 }),
    },
    {
      title: "Knowledge base updated",
      description: "Product Documentation base updated with 15 new documents",
      time: "Yesterday",
      icon: React.createElement(Database, { size: 16 }),
    },
    {
      title: "Chat session completed",
      description: "Completed a 25-message chat session with Marketing Agent",
      time: "2 days ago",
      icon: React.createElement(MessageSquare, { size: 16 }),
    },
  ];

  const quickActions: QuickActionItem[] = [
    {
      label: "New Chat Session",
      action: () => {/* Navigation will be implemented here */}
    },
    {
      label: "Create Knowledge Base",
      action: () => {/* Navigation will be implemented here */}
    },
    {
      label: "Configure New Agent",
      action: () => {/* Navigation will be implemented here */}
    }
  ];

  const getStartedSteps: GetStartedStep[] = [
    {
      label: "Create your first agent",
      completed: true
    },
    {
      label: "Upload documents to a knowledge base",
      completed: false
    },
    {
      label: "Start your first chat session",
      completed: false
    }
  ];

  return {
    modules,
    stats,
    activities,
    quickActions,
    getStartedSteps
  };
};
