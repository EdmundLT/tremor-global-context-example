"use server";
import { SalesUpdateButton } from "@/components/Button";
import Card from "@/components/Card";
import Chart from "@/components/Chart";
import ContextProvider from "@/context/GlobalContext";

export default async function Home() {
  const sales = await fetch("http://localhost:3000/api/sales")
    .then((res) => res.json())
    .then((data) => data.sales);
  const annualBudget = await fetch("http://localhost:3000/api/annualTarget")
    .then((res) => res.json())
    .then((data) => data.annualTarget);

  console.log({ sales, annualBudget });

  return (
    <>
      <ContextProvider sales={sales} annualTarget={annualBudget}>
        <Card />
        <SalesUpdateButton />
        <Chart />
      </ContextProvider>
    </>
  );
}
