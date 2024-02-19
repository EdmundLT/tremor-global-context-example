import ChartContextProvider from "@/context/ChartContext";
import React from "react";
import AreaChartHero from "./areaChart/AreaChart";
import { StockCard } from "./stockChart/StockCard";
import { LineChartHero } from "./lineChart/LineChart";

async function Chart() {
  const data = await fetch("http://localhost:3000/api/chart")
    .then((res) => res.json())
    .then((data) => data.data);
  const stockData = await fetch("http://localhost:3000/api/stocks?symbol=AAPL")
    .then((res) => res.json())
    .then((data) => data);
  return (
    <>
      <ChartContextProvider data={data}>
        <AreaChartHero />
        <LineChartHero />
        <StockCard props={stockData} />
      </ChartContextProvider>
    </>
  );
}

export default Chart;
