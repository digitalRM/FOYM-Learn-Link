"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { Month: "Mar", amount: 25 },
  { Month: "Apr", amount: 41 },
  { Month: "May", amount: 82 },
  { Month: "June", amount: 97 },
]

const chartConfig = {
  amount: {
    label: "Score on Math Test",
    color: "#4338ca",
  },
}

export function StudentChart({...props}) {
  return (
    <Card className="bg-white" {...props}>
      <CardHeader>
        <CardTitle>Students Growth</CardTitle>
        <CardDescription>Our students are growing rapidly <TrendingUp size={20} className="inline" /></CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="Month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={true}
              className="w-48"
              content={<ChartTooltipContent hideLabel />} 
            />
            <Bar dataKey="amount" fill="#4338ca" radius={8} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="leading-none text-muted-foreground">
          Showing student Alica G&apos;s growth over the past 4 months
        </div>
      </CardFooter>
    </Card>
  )
}