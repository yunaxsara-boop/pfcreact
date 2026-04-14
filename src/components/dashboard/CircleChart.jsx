import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

export default function CircleChart({ title, value }) {
  const data = [
    { name: "Completed", value: value },
    { name: "Remaining", value: 100 - value },
  ];

  const COLORS = ["#ef531f", "#9bfa27"];

  return (
    <div className="chart-card center">
      <h3>{title}</h3>

      <ResponsiveContainer width="100%" height={220}>
        <PieChart>
          <Pie
            data={data}
            innerRadius={70}
            outerRadius={90}
            dataKey="value"
            startAngle={90}
            endAngle={450}
          >
            {data.map((_, index) => (
              <Cell key={index} fill={COLORS[index]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>

      <div className="circle-label">{value}%</div>
    </div>
  );
}