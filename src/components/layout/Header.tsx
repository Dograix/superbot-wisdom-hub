import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { 
  Bell, 
  Search, 
  Settings, 
  User,
  Menu
} from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type HeaderProps = {
  onMenuClick?: () => void;
  className?: string;
};

const Header: React.FC<HeaderProps> = ({ onMenuClick, className }) => {
  const { t } = useTranslation();

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 h-16 border-b border-border bg-background/95 backdrop-blur z-40",
        className
      )}
    >
      <div className="flex h-full items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <div className="md:hidden">
            <SidebarTrigger />
          </div>
          
          <Link to="/" className="flex items-center gap-2">
            <span className="font-bold text-xl hidden md:block">JARVIS AI</span>
          </Link>
        </div>

        <div className="hidden md:flex items-center relative max-w-md w-full mx-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder={t('common.search')}
            className="pl-10 h-9 w-full bg-secondary/50"
          />
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="text-muted-foreground">
            <Bell className="h-5 w-5" />
          </Button>
          
          <Button variant="ghost" size="icon" className="text-muted-foreground">
            <Settings className="h-5 w-5" />
          </Button>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-9 w-9 rounded-full">
                <Avatar className="h-9 w-9">
                  <AvatarImage src="/avatars/01.png" alt="User" />
                  <AvatarFallback>
                    <User className="h-5 w-5" />
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>{t('common.myAccount')}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                {t('common.profile')}
              </DropdownMenuItem>
              <DropdownMenuItem>
                {t('common.settings')}
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                {t('common.logout')}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;
