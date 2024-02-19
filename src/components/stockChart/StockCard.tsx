import { Card, SparkAreaChart } from '@tremor/react';

export function StockCard({props}: any) {
    return (
      <Card className="mx-auto flex max-w-lg items-center justify-between px-4 py-3.5">
        <div className="flex items-center space-x-2.5">
          <p className="text-tremor-content-strong dark:text-dark-tremor-content-strong font-medium">{props.symbol}</p>
          <span className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">Apple Inc.</span>
        </div>
        <SparkAreaChart
          data={props.data}
          categories={['Performance']}
          index={'month'}
          colors={['emerald']}
          className="h-8 w-20 sm:h-10 sm:w-36"
        />
        <div className="flex items-center space-x-2.5">
          <span className="font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">179.26</span>
          <span className="rounded bg-emerald-500 px-2 py-1 text-tremor-default font-medium text-white">
            +1.72%
          </span>
        </div>
      </Card>
    );
  }