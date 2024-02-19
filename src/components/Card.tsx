"use client"
import { GlobalContext } from "@/context/GlobalContext";
import { convertNumberToString } from "@/utils/number";
import { Card, ProgressBar } from "@tremor/react";
import { useContext } from "react";

export default function NumberCard() {
  const { sales, annualTarget, percentage } = useContext(GlobalContext)!;
  return (
    <Card className="mx-auto max-w-md">
      <h4 className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
        Sales
      </h4>
      <p className="text-tremor-metric font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
        ${convertNumberToString(sales)}
      </p>
      <p className="mt-4 flex items-center justify-between text-tremor-default text-tremor-content dark:text-dark-tremor-content">
        <span>{percentage.toFixed(2)}% of annual target</span>
        <span>${convertNumberToString(annualTarget)}</span>
      </p>
      <ProgressBar value={percentage} className="mt-2" />
    </Card>
  );
}
