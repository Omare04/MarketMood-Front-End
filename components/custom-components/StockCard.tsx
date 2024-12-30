"use client";
import React, { useState } from "react";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from "@/components/ui/drawer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { marked } from "marked";
import DOMPurify from "dompurify";  

type StockData = {
  title: string;
  score: number;
  lastScraped: string;
};

type BullBearStockCardProps = CardProps & {
  data: StockData;
};

export default function BullBearStockCard({
  className,
  data,
  ...props
}: BullBearStockCardProps) {
  const [drawerState, setDrawerState] = useState<boolean>(false);

  return (
    <>
      <Drawer open={drawerState} onOpenChange={setDrawerState}>
        <Card
          className={cn(
            "w-[380px] p-0 hover:bg-gray-100 dark:hover:bg-gray-800 transition rounded-lg",
            className
          )}
          {...props}
          onClick={() => {
            setDrawerState(true);
          }}
        >
          <CardContent className="flex justify-between items-center p-2 px-3 cursor-pointer">
            <div className="flex flex-col items-start">
              <p className="text-center text-lg font-semibold">{data.title}</p>
              <p className="text-xs text-gray-400 mt-1">
                Last Scraped: {data.lastScraped}
              </p>
            </div>

            <div className="flex flex-col items-end">
              <p className="text-gray-500">Score</p>
              <span className="font-bold">{data.score}</span>
            </div>
          </CardContent>
        </Card>

        <DrawerContent>
          <div className="w-full p-10 h-full flex flex-col space-y-6">
            <div className="flex gap-10">
              <DrawerHeader>
                <div>
                  <DrawerTitle className="text-3xl font-bold">
                    {data.title}
                  </DrawerTitle>
                  <DrawerDescription className="pt-2 text-lg text-gray-700 dark:text-gray-300">
                    Market Sentiment Score:
                    <span className="text-2xl font-semibold text-green-500 ml-1">
                      {data.score}
                    </span>
                    <p className="pt-2 text-sm text-gray-500 dark:text-gray-400">
                      Last Scraped: {data.lastScraped}
                    </p>
                  </DrawerDescription>
                </div>
              </DrawerHeader>

              <MainRecapSection data={data} />
            </div>

            <DrawerFooter className="pt-6">
              <p className="text-center text-gray-500 dark:text-gray-400">
                End of Report
              </p>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
}

const MainRecapSection = ({ data }: { data: StockData }) => {
  return (
    <div className="p-4 flex gap-7">
      <div className="flex flex-col">
        <h1 className="text-2xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-2">
          Stock Recap As Of February 4, 2024
        </h1>
        <StockSummary
          summary={`
  - **Price Movement**: +3.5% this week  
  - **Closing Price**: $185.45 (Friday Close)  
  - **Weekly High**: $187.20  
  - **Weekly Low**: $178.90  
  - **Volume Traded**: 62.4M shares  
  - **Market Cap**: $2.9T  
  - **P/E Ratio**: 29.5  
  - **Dividend Yield**: 0.55%  
  - **Sentiment**: 🔼 Bullish  
  - **Key Driver**: Strong Q4 earnings and record-breaking product sales.  
  - **Analyst Outlook**: Continued growth projected into next quarter.  
  `}
          type={data.score > 50 ? "bullish" : "bearish"}
        />
      </div>
      <div>
        <h1 className="text-2xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-2 ">
          Top Stories Between February 12 - 19, 2024
        </h1>
        <div className="h-[400px] rounded-lg p-6  shadow-lg dark:bg-zinc-900">
          <TopStories />
        </div>
      </div>
    </div>
  );
};

type StockSummaryProps = {
  summary: string;
  type: "bullish" | "bearish" | "neutral";
};

const StockSummary = ({ summary, type }: StockSummaryProps) => {
  const colors = {
    bullish: "bg-green-500 bg-opacity-20",
    bearish: "bg-red-500 bg-opacity-20",
    neutral: "bg-gray-500 bg-opacity-20",
  };


  const renderMarkdown = (markdown: string) => {
    const rawHtml = marked(markdown);
    return DOMPurify.sanitize(rawHtml);
  };

  return (
    <div
      className={`flex items-start p-6 text-white rounded-lg shadow-md w-full max-w-lg mx-auto ${colors[type]}`}
    >
      <div className="flex flex-col gap-3">
        <h2 className="text-2xl font-bold">
          {type === "bullish" ? "📈 Bullish Outlook" : type === "bearish" ? "📉 Bearish Outlook" : "📊 Neutral Outlook"}
        </h2>
        <div
          className="text-md leading-relaxed"
          dangerouslySetInnerHTML={{ __html: renderMarkdown(summary) }}
        />
      </div>
    </div>
  );
};

type Article = {
  title: string;
  author: string;
  publishedAt: string;
  imageUrl: string;
  url: string;
};

const articles: Article[] = [
  {
    title: "Apple Hits Record High Amid New Product Launch",
    author: "John Doe",
    publishedAt: "Jan 2, 2024",
    imageUrl: "https://via.placeholder.com/100",
    url: "https://example.com/article1",
  },
  {
    title: "Tesla Surpasses Expectations in Q4 Earnings",
    author: "Jane Smith",
    publishedAt: "Jan 5, 2024",
    imageUrl: "https://via.placeholder.com/100",
    url: "https://example.com/article2",
  },
  {
    title: "Microsoft Unveils New AI Tool for Developers",
    author: "Michael Lee",
    publishedAt: "Jan 10, 2024",
    imageUrl: "https://via.placeholder.com/100",
    url: "https://example.com/article3",
  },
  {
    title: "Amazon Expands into Renewable Energy",
    author: "Sarah Connor",
    publishedAt: "Jan 15, 2024",
    imageUrl: "https://via.placeholder.com/100",
    url: "https://example.com/article4",
  },
  {
    title: "Meta Announces VR Headset Sales Growth",
    author: "Emily Davis",
    publishedAt: "Jan 18, 2024",
    imageUrl: "https://via.placeholder.com/100",
    url: "https://example.com/article5",
  },
  {
    title: "Meta Announces VR Headset Sales Growth",
    author: "Emily Davis",
    publishedAt: "Jan 18, 2024",
    imageUrl: "https://via.placeholder.com/100",
    url: "https://example.com/article5",
  },
  {
    title: "Meta Announces VR Headset Sales Growth",
    author: "Emily Davis",
    publishedAt: "Jan 18, 2024",
    imageUrl: "https://via.placeholder.com/100",
    url: "https://example.com/article5",
  },
  {
    title: "Meta Announces VR Headset Sales Growth",
    author: "Emily Davis",
    publishedAt: "Jan 18, 2024",
    imageUrl: "https://via.placeholder.com/100",
    url: "https://example.com/article5",
  },
];

const TopStories = () => {
  return (
    <div className="h-full overflow-y-auto space-y-4 scrollbar-hide rounded-lg">
      {articles.map((article, index) => (
        <Card
          key={index}
          className="flex items-center cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          onClick={() => window.open(article.url, "_blank")}
        >
          <CardContent className="flex p-0">
            <img
              src={article.imageUrl}
              alt={article.title}
              className="w-24 h-24 object-cover rounded-l-lg"
            />
            <div className="p-4 flex flex-col gap-2">
              <h2 className="text-lg font-semibold">{article.title}</h2>
              <p className="text-md text-gray-500 dark:text-gray-400">
                {article.author} • {article.publishedAt}
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
