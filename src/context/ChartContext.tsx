"use client";

import {
  Dispatch,
  SetStateAction,
  createContext,
  useState,
} from "react";

interface IChartContext {
  data: ChartData[];
  setData: Dispatch<SetStateAction<ChartData[]>>;
}

interface ChartData {
  date: string;
  semiAnalysis: number;
  pragmaticEngineer: number;
}

export const ChartContext = createContext<IChartContext | undefined>(undefined);

export default function ChartContextProvider(props: any) {
  const [data, setData] = useState<ChartData[]>(props.data);
  return (
    <ChartContext.Provider value={{ data, setData }}>
      {props.children}
    </ChartContext.Provider>
  );
}
