
import React from "react";
import { PieChart, Pie, Tooltip } from "recharts";

const data01 = [
  { name: "Assignment 1", value: 60 },
  { name: "Assignment 2", value: 59 },
  { name: "Assignment 3", value: 55 },
  { name: "Assignment 4", value: 50 },
  { name: "Assignment 5", value: 40 },
  { name: "Assignment 6", value: 60 }
];

export default function App() {
  return (
    <PieChart width={1000} height={400}>
      <Pie
        dataKey="value"
        isAnimationActive={false}
        data={data01}
        cx={200}
        cy={200}
        outerRadius={150}
        fill="#8884d8"
        label
      />
      <Tooltip />
    </PieChart>
  );
}