
import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

type DashboardCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  to: string;
  className?: string;
  gradient?: boolean;
  delay?: number;
};

const DashboardCard: React.FC<DashboardCardProps> = ({
  title,
  description,
  icon,
  to,
  className,
  gradient = false,
  delay = 0,
}) => {
  const { t } = useTranslation();
  
  return (
    <Link
      to={to}
      className={cn(
        "glass-card flex flex-col h-full card-hover",
        "animate-scale-in",
        gradient && "bg-gradient-to-br from-white/80 to-white/60 dark:from-gray-900/80 dark:to-gray-900/60",
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="mb-4 p-3 inline-flex items-center justify-center rounded-full bg-primary/10 text-primary w-12 h-12">
        {icon}
      </div>
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4 flex-grow">{description}</p>
      <div className="flex items-center text-primary font-medium mt-auto">
        <span>{t('dashboardCards.explore')}</span>
        <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  );
};

export default DashboardCard;
