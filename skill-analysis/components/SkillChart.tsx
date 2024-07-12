// components/SkillChart.tsx
"use client";

import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const SkillChart = () => {
  const data = {
    labels: ['HTML Tools', 'Tags & References', 'Tables', 'CSS Basics'],
    datasets: [
      {
        label: 'Skill Analysis',
        data: [80, 60, 24, 96],
        backgroundColor: ['#ff6384', '#36a2eb', '#ffce56', '#4bc0c0'],
      },
    ],
  };

  return (
    <div className="w-full md:w-1/2 lg:w-1/3 p-4">
      <h2 className="text-lg font-bold mb-2">Syllabus Wise Analysis</h2>
      <Bar data={data} />
    </div>
  );
};

export default SkillChart;
