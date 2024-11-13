"use client"

import { Line, Bar } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowUp, Users, BarChart2, TrendingUp } from "lucide-react"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
)

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]

const userGrowthData = {
  labels: months,
  datasets: [
    {
      label: "Active Users",
      data: [1000, 1500, 2200, 3100, 3800, 4600],
      borderColor: "rgb(139, 92, 246)",
      backgroundColor: "rgba(139, 92, 246, 0.1)",
      fill: true,
      tension: 0.4,
    },
  ],
}

const revenueData = {
  labels: months,
  datasets: [
    {
      label: "Revenue",
      data: [5000, 7500, 10000, 15000, 18000, 22000],
      backgroundColor: "rgba(139, 92, 246, 0.8)",
    },
  ],
}

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
}

const stats = [
  {
    title: "Total Users",
    value: "10,483",
    change: "+12.3%",
    icon: Users,
  },
  {
    title: "Revenue",
    value: "$50,234",
    change: "+8.2%",
    icon: TrendingUp,
  },
  {
    title: "Active Projects",
    value: "1,234",
    change: "+23.1%",
    icon: BarChart2,
  },
]

export function AnalyticsSection() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900/50" id="analytics">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Real-Time Analytics</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Monitor your business growth with powerful analytics tools
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat) => (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <stat.icon className="h-4 w-4 text-gray-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="flex items-center text-sm text-green-500">
                  <ArrowUp className="h-4 w-4 mr-1" />
                  {stat.change} from last month
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>User Growth</CardTitle>
              <CardDescription>Monthly active users over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <Line data={userGrowthData} options={options} />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Revenue Overview</CardTitle>
              <CardDescription>Monthly revenue statistics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <Bar data={revenueData} options={options} />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}