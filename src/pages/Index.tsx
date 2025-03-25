
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Bot, Database, Zap, MessageSquare, Brain, Shield } from "lucide-react";
import SuperbidButton from "@/components/ui/SuperbidButton";
import Header from "@/components/layout/Header";
import { motion } from "framer-motion";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <MessageSquare size={24} />,
      title: "AI Chat Interface",
      description: "Engage with sophisticated AI models through an intuitive chat interface."
    },
    {
      icon: <Database size={24} />,
      title: "Knowledge Base",
      description: "Create and manage vector databases to power your AI with custom knowledge."
    },
    {
      icon: <Bot size={24} />,
      title: "Custom AI Agents",
      description: "Build specialized AI agents tailored for your specific business needs."
    },
    {
      icon: <Zap size={24} />,
      title: "Real-time Processing",
      description: "Experience minimal latency with our optimized processing pipeline."
    },
    {
      icon: <Brain size={24} />,
      title: "Advanced Reasoning",
      description: "Leverage sophisticated language models with reasoning capabilities."
    },
    {
      icon: <Shield size={24} />,
      title: "Enterprise Security",
      description: "Benefit from robust security measures protecting your sensitive data."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-28 md:pt-32 pb-16 md:pb-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6"
            >
              <span className="px-4 py-1.5 bg-superbid-50 dark:bg-superbid-900/30 text-superbid-600 dark:text-superbid-300 rounded-full text-sm font-medium">
                Introducing Superbid AI
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
            >
              The Ultimate AI 
              <span className="text-gradient block mt-2">Solution Platform</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-8"
            >
              Create, customize, and deploy powerful AI agents with your own knowledge base in minutes.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 mb-16"
            >
              <Link to="/register">
                <SuperbidButton variant="primary" size="lg">
                  Get Started <ArrowRight size={16} className="ml-2" />
                </SuperbidButton>
              </Link>
              <Link to="/login">
                <SuperbidButton variant="outline" size="lg">
                  Login to Dashboard
                </SuperbidButton>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.95 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="relative w-full max-w-5xl mx-auto"
            >
              <div className="aspect-video rounded-xl overflow-hidden border border-border shadow-xl">
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-black w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center mb-4 rounded-full w-16 h-16 bg-primary/10">
                      <Bot size={32} className="text-primary" />
                    </div>
                    <h3 className="text-2xl font-medium">Superbid AI Platform</h3>
                    <p className="text-muted-foreground mt-2">Dashboard Preview</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-3 -left-3 -right-3 h-12 bg-gradient-to-t from-background to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 px-6 bg-secondary/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover the comprehensive suite of tools designed to maximize your AI potential.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="glass-card card-hover"
              >
                <div className="mb-4 p-3 inline-flex items-center justify-center rounded-full bg-primary/10 text-primary">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.5 }}
            className="glass-card bg-gradient-to-br from-superbid-50 to-blue-50 dark:from-superbid-950/50 dark:to-blue-950/50 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your AI Experience?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Join thousands of businesses already leveraging Superbid AI to create intelligent solutions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/register">
                <SuperbidButton variant="primary" size="lg">
                  Get Started for Free
                </SuperbidButton>
              </Link>
              <Link to="/contact">
                <SuperbidButton variant="outline" size="lg">
                  Contact Sales
                </SuperbidButton>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-secondary/70 border-t border-border mt-auto">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-gradient">SUPERBID</span>
                <span className="text-lg font-semibold">AI</span>
              </div>
              <p className="text-sm text-muted-foreground">Building the future of AI. Together.</p>
            </div>
            <div className="flex gap-6">
              <Link to="/terms" className="text-sm text-foreground/80 hover:text-foreground">
                Terms
              </Link>
              <Link to="/privacy" className="text-sm text-foreground/80 hover:text-foreground">
                Privacy
              </Link>
              <Link to="/contact" className="text-sm text-foreground/80 hover:text-foreground">
                Contact
              </Link>
            </div>
          </div>
          <div className="mt-8 pt-4 border-t border-border text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Superbid AI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
