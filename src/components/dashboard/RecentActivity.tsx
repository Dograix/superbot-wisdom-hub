
import React from "react";
import { Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type ActivityItem = {
  title: string;
  description: string;
  time: string;
  icon: React.ReactNode;
};

type RecentActivityProps = {
  activities: ActivityItem[];
};

const RecentActivity: React.FC<RecentActivityProps> = ({ activities }) => {
  return (
    <Card className="animate-fade-in">
      <CardHeader>
        <CardTitle>Activity Log</CardTitle>
        <CardDescription>Your recent actions and updates</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {activities.map((activity, index) => (
            <div key={index} className="flex">
              <div className="mr-4 flex items-center justify-center">
                <div className="rounded-full bg-secondary p-2">
                  {activity.icon}
                </div>
              </div>
              <div className="space-y-1">
                <p className="font-medium leading-none">{activity.title}</p>
                <p className="text-sm text-muted-foreground">
                  {activity.description}
                </p>
                <div className="flex items-center text-xs text-muted-foreground">
                  <Clock size={12} className="mr-1" />
                  {activity.time}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentActivity;
