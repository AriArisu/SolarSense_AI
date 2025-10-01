import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export interface IQueryResult {
  date: string;
  value: number;
}

export const LineChartComponent: React.FC<{
  dailyOrders: IQueryResult[];
}> = ({ dailyOrders }) => {
  return (
    <ResponsiveContainer width="100%" height="100%" aspect={500 / 300}>
      <LineChart
        width={500}
        height={300}
        data={dailyOrders}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="value" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
};