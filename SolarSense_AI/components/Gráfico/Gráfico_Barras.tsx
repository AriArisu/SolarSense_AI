import React from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export interface IQueryResult {
  date: string;
  value: number;
}


const formatData = (
  dailyOrders: IQueryResult[],
  newCustomers: IQueryResult[],
) => {
  const formattedData = [];

  for (let i = 0; i < dailyOrders.length; i++) {
    if (!dailyOrders[i] || !newCustomers[i]) continue;

    if (dailyOrders[i].date === newCustomers[i].date) {
      formattedData.push({
        date: dailyOrders[i].date,
        dailyOrders: dailyOrders[i].value,
        newCustomers: newCustomers[i].value,
      });
    }
  }

  return formattedData;
};

export const ScatterChartComponent: React.FC<{
  dailyOrders: IQueryResult[];
  newCustomers: IQueryResult[];
}> = ({ dailyOrders, newCustomers }) => {
  const formattedData = formatData(dailyOrders, newCustomers);

  return (
    <ResponsiveContainer width="100%" height="100%" aspect={500 / 300}>
      <ScatterChart
        width={500}
        height={300}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <XAxis type="number" dataKey="dailyOrders" name="Orders" />
        <YAxis type="number" dataKey="newCustomers" name="Customers" />
        <Tooltip cursor={{ strokeDasharray: "3 3" }} />
        <Scatter name="A school" data={formattedData} fill="#8884d8" />
      </ScatterChart>
    </ResponsiveContainer>
  );
};