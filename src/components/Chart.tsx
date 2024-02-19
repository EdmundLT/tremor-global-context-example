import ChartContextProvider from "@/context/ChartContext";
import React from "react";
import AreaChartHero from "./areaChart/AreaChart";

async function Chart() {
  const data = await fetch("http://localhost:3000/api/chart")
    .then((res) => res.json())
    .then((data) => data.data);
  return (
    <>
      <ChartContextProvider
      data={data}
      >
        <AreaChartHero />
      </ChartContextProvider>
    </>
  );
}

export default Chart;
