"use client"
import StockSummaryDrawer from "@/components/custom-components/model-trackers/drawer-component";
import BullBearStockCard from "@/components/custom-components/StockCard";
import React, {useState} from "react";


const cardData = [
  { title: "AAPL", score: 85.66, lastScraped: "Dec 26, 2024" },
  { title: "TSLA", score: 38.20, lastScraped: "Dec 20, 2024" },
  { title: "GOOGL", score: 92.45, lastScraped: "Dec 10, 2024" },
];

function StockpulsePage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Stockpulse Model</h1>
      <span className="block w-full h-[1px] bg-zinc-900 my-4"></span>
      <Main />
    </div>
  );
}

function Main() {
  return (
    <div className="flex">
      <BullBearContainer />
    </div>
  );
}

export function BullBearContainer() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (card: any) => {
    setSelectedCard(card);
    setDrawerOpen(true);
  };

  return (
    <div>
      <div>Market Sentiment</div>
      {cardData.map((card) => (
        <BullBearStockCard
          key={card.title}
          data={card}
          onClick={() => handleCardClick(card)}
        />
      ))}

    </div>
  );
}

export default StockpulsePage;
