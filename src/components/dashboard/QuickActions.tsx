
import React from "react";
import { ArrowUpRight, AlertCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import SuperbidButton from "@/components/ui/SuperbidButton";

type QuickAction = {
  label: string;
  action: () => void;
};

type GetStartedStep = {
  label: string;
  completed: boolean;
};

type QuickActionsProps = {
  actions: QuickAction[];
  steps: GetStartedStep[];
};

const QuickActions: React.FC<QuickActionsProps> = ({ actions, steps }) => {
  return (
    <>
      <Card className="animate-fade-in">
        <CardHeader>
          <CardTitle>Actions</CardTitle>
          <CardDescription>Shortcuts to common tasks</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {actions.map((action, index) => (
            <SuperbidButton 
              key={index}
              variant="outline" 
              fullWidth 
              className="justify-between"
              onClick={action.action}
            >
              <span>{action.label}</span>
              <ArrowUpRight size={16} />
            </SuperbidButton>
          ))}
        </CardContent>
      </Card>

      <Card className="mt-6 bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800 animate-fade-in">
        <CardHeader className="pb-2">
          <div className="flex items-center space-x-2">
            <AlertCircle size={18} className="text-amber-500" />
            <CardTitle>Getting Started</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm mb-4">
            Complete these steps to get the most out of Superbid AI:
          </p>
          <ul className="space-y-2 text-sm">
            {steps.map((step, index) => (
              <li key={index} className="flex items-center">
                <div 
                  className={`w-5 h-5 rounded-full border ${step.completed ? 'border-green-500' : 'border-muted-foreground'} flex items-center justify-center mr-2`}
                >
                  <div 
                    className={`w-3 h-3 rounded-full ${step.completed ? 'bg-green-500' : 'bg-muted-foreground/30'}`}
                  ></div>
                </div>
                {step.label}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </>
  );
};

export default QuickActions;
