"use client"

import { Pie } from "react-chartjs-2"
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

const data = {
  labels: ['Images', 'Videos', 'Documents', 'Audio', 'Other'],
  datasets: [
    {
      data: [35, 25, 20, 15, 5],
      backgroundColor: [
        'rgba(139, 92, 246, 0.8)',
        'rgba(196, 181, 253, 0.8)',
        'rgba(167, 139, 250, 0.8)',
        'rgba(224, 231, 255, 0.8)',
        'rgba(199, 210, 254, 0.8)',
      ],
      borderColor: [
        'rgba(139, 92, 246, 1)',
        'rgba(196, 181, 253, 1)',
        'rgba(167, 139, 250, 1)',
        'rgba(224, 231, 255, 1)',
        'rgba(199, 210, 254, 1)',
      ],
      borderWidth: 1,
    },
  ],
}

const options = {
  plugins: {
    legend: {
      position: 'bottom' as const,
    },
  },
  maintainAspectRatio: false,
}

export function StorageUsage() {
  return (
    <div className="h-[300px]">
      <Pie data={data} options={options} />
    </div>
  )
}