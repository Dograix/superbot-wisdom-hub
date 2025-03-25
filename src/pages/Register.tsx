
import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import RegisterForm from "@/components/auth/RegisterForm";

const Register = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Side - Background Image/Design */}
      <div className="hidden md:flex md:w-1/2 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-superbid-500/20"></div>
        <div className="relative z-10 flex flex-col justify-center items-center p-16 text-center">
          <div className="glass-card max-w-md">
            <h2 className="text-2xl font-bold mb-4">{t('register.joinTitle')}</h2>
            <p className="text-muted-foreground mb-4">
              {t('register.joinDescription')}
            </p>
            <div className="flex justify-center space-x-3 py-4">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse animation-delay-200"></span>
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse animation-delay-400"></span>
            </div>
          </div>
        </div>
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute left-0 bottom-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
          <div className="absolute right-0 top-0 w-96 h-96 bg-superbid-500 rounded-full filter blur-3xl"></div>
        </div>
      </div>

      {/* Right Side - Register Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-16">
        <div className="w-full max-w-md mb-8">
          <Link to="/" className="flex items-center gap-2 mb-12">
            <span className="text-2xl font-bold text-gradient">JARVIS</span>
            <span className="text-xl font-semibold">AI</span>
          </Link>
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};

export default Register;
