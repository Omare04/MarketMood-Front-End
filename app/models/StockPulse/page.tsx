import BullBearStockCard from "@/components/custom-components/StockCard";
import React from "react";

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

function BullBearContainer() {
  return (
    <div className="flex flex-col space-y-3 bg-zinc-950  rounded-lg">
      <h1></h1>
      <BullBearStockCard />
      <BullBearStockCard />
      <BullBearStockCard />
    </div>
  );
}

export default StockpulsePage;
