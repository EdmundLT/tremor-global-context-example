"use client"
import {ChartContext} from '@/context/ChartContext';
import { AreaChart } from '@tremor/react';
import { useContext } from 'react';
const dataFormatter = (number: any) =>
  `$${Intl.NumberFormat("us").format(number).toString()}`;

function AreaChartHero() {
    const { data } = useContext(ChartContext)!;
  return (
    <AreaChart
      className="h-80"
      data={data}
      index="date"
      categories={["SemiAnalysis", "The Pragmatic Engineer"]}
      colors={["indigo", "rose"]}
      valueFormatter={dataFormatter}
      yAxisWidth={60}
      onValueChange={(v) => console.log(v)}
    />
  );
}

export default AreaChartHero;
