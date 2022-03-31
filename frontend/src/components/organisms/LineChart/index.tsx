import * as React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { StatisticsTypes } from "recoil/Statistics";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: "Average Mood for 4 weeks from today",
    },
  },
};

function LineChart(props: { chartData: StatisticsTypes[] }) {
  const { chartData } = props;
  const scores = chartData.map((statistic) => statistic.score).reverse();
  const labels = ["4weeks ago", "3weeks ago", "2weeks ago", "last week"];

  const data = {
    labels,
    datasets: [
      {
        label: "Mood Statistics",
        data: scores,
        borderColor: "#FE6F5B",
        backgroundColor: "#FE6F5B",
        lineTension: 0.3,
      },
    ],
  };

  return <Line data={data} options={options} />;
}

export default LineChart;
