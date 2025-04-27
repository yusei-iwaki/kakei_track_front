"use client";

import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { FC } from "react";

ChartJS.register(ArcElement, Tooltip, ChartDataLabels);

const labels = [
  {
    category: "食費",
    amount: 50000,
    color: "blue",
  },
  {
    category: "交通費",
    amount: 50000,
    color: "red",
  },
  {
    category: "娯楽費",
    amount: 50000,
    color: "yellow",
  },
  {
    category: "その他",
    amount: 50000,
    color: "green",
  },
];

interface PieChartProps {
  totalAmount: number;
}

const PieChart: FC<PieChartProps> = ({ totalAmount }) => {
  const options = {
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context: { label: string; parsed: any }) {
            const label = context.label || "";
            const value = context.parsed;
            return `${(value / totalAmount) * 100} ％`; // ← 単位をここに追加
          },
        },
      },
      datalabels: {
        formatter: (value: any, context: any) =>
          `${(value / totalAmount) * 100}％`, // ← ここで単位つける
        color: "#fff",
      },
    },
  };
  const data = {
    labels: labels.map((label) => label.category),
    datasets: [
      {
        label: "収入",
        data: labels.map((label) => label.amount),
        backgroundColor: labels.map((label) => label.color),
        hoverOffset: 4,
      },
    ],
  };

  return (
    <>
      <Pie data={data} options={options} />
      <section>
        <ul>
          {labels.map((label, index) => (
            <li
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "8px",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  width: "16px",
                  height: "16px",
                  backgroundColor: data.datasets[0].backgroundColor[index],
                  marginRight: "8px",
                }}
              ></span>
              {label.category}: {data.datasets[0].data[index]} 円
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default PieChart;
