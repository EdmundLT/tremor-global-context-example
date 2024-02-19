"use client";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";

/**
 * Interface defining the structure of the global context.
 */
interface IGlobalContext {
  sales: number;
  setSales: Dispatch<SetStateAction<number>>;
  annualTarget: number;
  setAnnualTarget: Dispatch<SetStateAction<number>>;
  percentage: number;
}

/**
 * The global context object.
 */
export const GlobalContext = createContext<IGlobalContext | undefined>(
  undefined
);
export default function ContextProvider(props: any) {
  const [sales, setSales] = useState<number>(props.sales);
  const [annualTarget, setAnnualTarget] = useState<number>(props.annualTarget);
  const [percentage, setPercentage] = useState<number>(
    (sales / annualTarget) * 100
  );
  useEffect(() => {
    setPercentage((sales / annualTarget) * 100);
  }, [sales]);
  return (
    <GlobalContext.Provider
      value={{
        sales,
        annualTarget,
        setSales,
        setAnnualTarget,
        percentage,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
}
