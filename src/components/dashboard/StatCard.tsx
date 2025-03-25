
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type StatCardProps = {
  title: string;
  value: number | string;
  change: {
    value: string;
    direction: "up" | "down";
    percentage: string;
  };
};

const StatCard: React.FC<StatCardProps> = ({ title, value, change }) => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground mt-1">
          <span className={change.direction === "up" ? "text-green-500" : "text-red-500"}>
            {change.direction === "up" ? "↑" : "↓"} {change.percentage}
          </span>
          {" "}{change.value}
        </p>
      </CardContent>
    </Card>
  );
};

export default StatCard;
