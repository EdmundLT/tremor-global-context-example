"use client"
import { GlobalContext } from "@/context/GlobalContext";
import { RiRefreshLine } from "@remixicon/react";
import { Button } from "@tremor/react";
import { useContext } from "react";

export function SalesUpdateButton() {
  const { sales, setSales } = useContext(GlobalContext)!;
  function handleOnClick() {
    console.log("Sales updated");
    setSales(sales + 500);
  }
  return (
    <div className="flex justify-center mt-4">
      <Button icon={RiRefreshLine} onClick={handleOnClick}>Add sales</Button>
    </div>
  );
}
