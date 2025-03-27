
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import { SidebarProvider } from "@/components/ui/sidebar";
import "./i18n/i18n";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Chat from "./pages/Chat";
import KnowledgeBase from "./pages/KnowledgeBase";
import Agents from "./pages/Agents";
import Integrations from "./pages/Integrations";
import Settings from "./pages/Settings";
import Pricing from "./pages/Pricing";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  React.useEffect(() => {
    // Check system preference for dark mode
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (prefersDark) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/dashboard" element={
                <SidebarProvider defaultOpen={true}>
                  <Dashboard />
                </SidebarProvider>
              } />
              <Route path="/chat" element={
                <SidebarProvider defaultOpen={true}>
                  <Chat />
                </SidebarProvider>
              } />
              <Route path="/knowledge-base" element={
                <SidebarProvider defaultOpen={true}>
                  <KnowledgeBase />
                </SidebarProvider>
              } />
              <Route path="/agents" element={
                <SidebarProvider defaultOpen={true}>
                  <Agents />
                </SidebarProvider>
              } />
              <Route path="/integrations" element={
                <SidebarProvider defaultOpen={true}>
                  <Integrations />
                </SidebarProvider>
              } />
              <Route path="/settings" element={
                <SidebarProvider defaultOpen={true}>
                  <Settings />
                </SidebarProvider>
              } />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
};

export default App;
