
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Moon, Sun, Menu, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";
import SuperbidButton from "../ui/SuperbidButton";
import LanguageSwitcher from "../ui/LanguageSwitcher";
import { cn } from "@/lib/utils";
import { useTheme } from "@/context/ThemeContext";

type HeaderProps = {
  onMenuClick?: () => void;
};

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  const { t } = useTranslation();
  const { isDarkMode, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 py-4 px-6 transition-all duration-300",
        isScrolled 
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button 
              onClick={onMenuClick}
              className="p-2 rounded-full text-foreground hover:bg-secondary md:hidden"
            >
              <Menu size={20} />
            </button>
            <Link to="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold text-gradient">JARVIS</span>
              <span className="text-xl font-semibold">AI</span>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            
            <SuperbidButton
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full w-10 h-10"
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </SuperbidButton>
            
            <div className="hidden md:flex items-center gap-4">
              <Link to="/login">
                <SuperbidButton variant="outline" size="sm">
                  {t('common.login')}
                </SuperbidButton>
              </Link>
              <Link to="/register">
                <SuperbidButton variant="primary" size="sm">
                  {t('common.register')}
                </SuperbidButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
