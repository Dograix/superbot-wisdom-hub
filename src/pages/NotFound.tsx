
import React from "react";
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import SuperbidButton from "@/components/ui/SuperbidButton";
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center px-6 max-w-md">
        <h1 className="text-8xl font-bold mb-4 text-gradient">404</h1>
        <h2 className="text-2xl font-semibold mb-4">{t('errors.pageNotFound')}</h2>
        <p className="text-muted-foreground mb-8">{t('errors.pageNotFoundDesc')}</p>
        <Link to="/">
          <SuperbidButton variant="primary">
            <ArrowLeft size={16} className="mr-2" />
            {t('common.returnHome')}
          </SuperbidButton>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
