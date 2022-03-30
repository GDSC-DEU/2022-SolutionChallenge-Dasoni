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
      text: "Mood of this month",
    },
  },
};

function LineChart(props: { chartData: StatisticsTypes[] }) {
  const { chartData } = props;
  const scores = chartData.map((statistic) => statistic.score).reverse();
  const labels = chartData.map((statistic) => statistic.date).reverse();

  console.log("scores", scores);
  console.log("labels", labels);

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
