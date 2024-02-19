"use client"
import { ChartContext } from '@/context/ChartContext';
import { LineChart } from '@tremor/react';
import { useContext } from 'react';

const dataFormatter = (number:any) =>
  `$${Intl.NumberFormat('us').format(number).toString()}`;

export function LineChartHero() {
    const {data} = useContext(ChartContext)!;
  return (
    <LineChart
      className="h-80"
      data={data}
      index="date"
      categories={['SemiAnalysis', 'The Pragmatic Engineer']}
      colors={['green', 'rose']}
      valueFormatter={dataFormatter}
      yAxisWidth={60}
      onValueChange={(v) => console.log(v)}
    />
  );
}