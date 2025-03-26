
import React, { useState } from "react";
import Header from "@/components/layout/Header";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import SuperbidButton from "@/components/ui/SuperbidButton";
import { Check, CircleDollarSign, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Pricing = () => {
  const [annually, setAnnually] = useState(false);
  const { t } = useTranslation();
  
  const plans = [
    {
      name: t('pricing.starter.name'),
      description: t('pricing.starter.description'),
      price: annually ? 899 : 89.90,
      features: [
        t('pricing.starter.features.requests'),
        t('pricing.starter.features.storage'),
        t('pricing.starter.features.agents'),
        t('pricing.features.support')
      ],
      buttonText: t('pricing.getStarted'),
      popular: false,
      buttonVariant: "outline" as const
    },
    {
      name: t('pricing.professional.name'),
      description: t('pricing.professional.description'),
      price: annually ? 1199 : 119.90,
      features: [
        t('pricing.professional.features.requests'),
        t('pricing.professional.features.storage'),
        t('pricing.professional.features.agents'),
        t('pricing.features.support'),
        t('pricing.features.api')
      ],
      buttonText: t('pricing.getStarted'),
      popular: true,
      buttonVariant: "primary" as const
    },
    {
      name: t('pricing.scale.name'),
      description: t('pricing.scale.description'),
      price: annually ? 1999 : 199.90,
      features: [
        t('pricing.scale.features.requests'),
        t('pricing.scale.features.storage'),
        t('pricing.scale.features.agents'),
        t('pricing.features.support'),
        t('pricing.features.api'),
        t('pricing.features.priority')
      ],
      buttonText: t('pricing.getStarted'),
      popular: false,
      buttonVariant: "outline" as const
    },
    {
      name: t('pricing.enterprise.name'),
      description: t('pricing.enterprise.description'),
      price: null,
      features: [
        t('pricing.enterprise.features.custom'),
        t('pricing.enterprise.features.storage'),
        t('pricing.enterprise.features.agents'),
        t('pricing.features.support'),
        t('pricing.features.api'),
        t('pricing.features.priority'),
        t('pricing.features.dedicated')
      ],
      buttonText: t('pricing.contactUs'),
      popular: false,
      buttonVariant: "outline" as const
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <section className="pt-28 md:pt-32 pb-16 md:pb-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('pricing.title')}</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              {t('pricing.subtitle')}
            </p>
            
            <div className="flex items-center justify-center mb-8 gap-4">
              <span className={`text-sm ${!annually ? 'font-medium text-foreground' : 'text-muted-foreground'}`}>
                {t('pricing.monthly')}
              </span>
              <button
                onClick={() => setAnnually(!annually)}
                className="relative inline-flex h-6 w-11 items-center rounded-full bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <span
                  className={`${
                    annually ? "translate-x-6" : "translate-x-1"
                  } inline-block h-4 w-4 rounded-full bg-primary transition-transform`}
                />
              </button>
              <span className={`text-sm ${annually ? 'font-medium text-foreground' : 'text-muted-foreground'}`}>
                {t('pricing.annually')} <span className="text-superbid-500">-{t('pricing.discount')}</span>
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`flex flex-col border ${plan.popular ? 'border-superbid-500 shadow-lg relative' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-0 right-0 flex justify-center">
                    <span className="bg-superbid-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {t('pricing.mostPopular')}
                    </span>
                  </div>
                )}
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <CircleDollarSign size={20} className="text-primary" />
                    <CardTitle>{plan.name}</CardTitle>
                  </div>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="mb-4">
                    {plan.price ? (
                      <div className="flex items-end gap-1">
                        <span className="text-3xl font-bold">R${plan.price.toFixed(2)}</span>
                        <span className="text-muted-foreground">/{annually ? t('pricing.year') : t('pricing.month')}</span>
                      </div>
                    ) : (
                      <span className="text-2xl font-bold">{t('pricing.custom')}</span>
                    )}
                  </div>
                  <ul className="space-y-2">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check size={18} className="text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link to={index === 3 ? "/contact" : "/register"} className="w-full">
                    <SuperbidButton variant={plan.buttonVariant} fullWidth>
                      {plan.buttonText} {index === 3 && <ArrowRight size={16} className="ml-1" />}
                    </SuperbidButton>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-4">{t('pricing.faq.title')}</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto text-left">
              <div className="space-y-2">
                <h3 className="text-lg font-medium">{t('pricing.faq.question1')}</h3>
                <p className="text-muted-foreground">{t('pricing.faq.answer1')}</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-medium">{t('pricing.faq.question2')}</h3>
                <p className="text-muted-foreground">{t('pricing.faq.answer2')}</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-medium">{t('pricing.faq.question3')}</h3>
                <p className="text-muted-foreground">{t('pricing.faq.answer3')}</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-medium">{t('pricing.faq.question4')}</h3>
                <p className="text-muted-foreground">{t('pricing.faq.answer4')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
