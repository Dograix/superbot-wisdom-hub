
import React from "react";
import { NavLink } from "react-router-dom";
import { 
  Home, 
  MessageSquare, 
  Database, 
  Bot, 
  Settings, 
  HelpCircle, 
  X
} from "lucide-react";
import { cn } from "@/lib/utils";

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

const sidebarLinks = [
  { name: "Dashboard", path: "/dashboard", icon: Home },
  { name: "Chat", path: "/chat", icon: MessageSquare },
  { name: "Knowledge Base", path: "/knowledge-base", icon: Database },
  { name: "Agents", path: "/agents", icon: Bot },
  { name: "Settings", path: "/settings", icon: Settings },
  { name: "Help", path: "/help", icon: HelpCircle },
];

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Mobile overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
      />

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-0 left-0 h-screen w-64 bg-sidebar text-sidebar-foreground z-50 transform transition-transform duration-300 ease-in-out",
          "border-r border-sidebar-border",
          "md:translate-x-0 md:z-30 md:pt-20",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex justify-between items-center p-4 md:hidden">
          <span className="font-bold text-lg">SUPERBID AI</span>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-sidebar-accent"
          >
            <X size={20} />
          </button>
        </div>

        <div className="px-3 py-4">
          <nav className="space-y-1">
            {sidebarLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
                    "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                    isActive
                      ? "bg-sidebar-accent text-sidebar-primary font-medium"
                      : "text-sidebar-foreground/80"
                  )
                }
                onClick={() => {
                  if (window.innerWidth < 768) {
                    onClose();
                  }
                }}
              >
                <link.icon size={18} />
                <span>{link.name}</span>
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="glass-card bg-opacity-50 dark:bg-opacity-20 flex items-center justify-center py-3">
            <span className="text-xs text-center opacity-70">
              SUPERBID AI v1.0.0
            </span>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
