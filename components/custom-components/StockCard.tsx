import React from "react";

import { BellRing, Check } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const notifications = [
  {
    title: "AAPL",
    description: "1 hour ago",
  },
  {
    title: "ADBE",
    description: "1 hour ago",
  },
  {
    title: "TSLA",
    description: "2 hours ago",
  },
];

type CardProps = React.ComponentProps<typeof Card>;

export default function BullBearStockCard({ className, ...props }: CardProps) {
  return (
    <Card
      className={cn(
        "w-[380px] p-0 hover:bg-gray-100 dark:hover:bg-gray-800 transition rounded-lg" ,
        className
      )}
      {...props}
    >
      <CardContent className="flex justify-between items-center p-2 px-3 cursor-pointer">
        <div className="flex flex-col items-start">
          <p className="text-center text-lg font-semibold">AAPL</p>
          <p className="text-xs text-gray-400 mt-1">
            Last Scraped: Dec 26, 2024
          </p>
        </div>

        <div className="flex flex-col items-end">
          <p className="text-gray-500">Score</p>
          <span className="font-bold">85.66</span>
        </div>
      </CardContent>
    </Card>
  );
}
