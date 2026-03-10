"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useTheme } from "next-themes";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Card, CardContent } from "@/components/ui/card";

const data = [
  { month: "Jan", value: 4000 },
  { month: "Feb", value: 3000 },
  { month: "Mar", value: 5000 },
  { month: "Apr", value: 4800 },
  { month: "May", value: 7000 },
  { month: "Jun", value: 6500 },
];

export default function DashboardPage() {
  const cardsRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  useEffect(() => {
    if (cardsRef.current) {
      gsap.fromTo(
        cardsRef.current.children,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power2.out" },
      );
    }
  }, []);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-black dark:text-white">
        Dashboard
      </h1>

      {/* KPI Cards */}
      <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { label: "Total Revenue", value: "$48,295" },
          { label: "Active Users", value: "3,842" },
          { label: "Conversion Rate", value: "5.27%" },
        ].map((card) => (
          <Card
            key={card.label}
            className="border-zinc-200 dark:border-zinc-800"
          >
            <CardContent className="p-5">
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                {card.label}
              </p>
              <p className="mt-1 text-3xl font-bold text-black dark:text-white">
                {card.value}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Chart */}
      <Card className="border-zinc-200 dark:border-zinc-800">
        <CardContent className="p-5">
          <h2 className="mb-4 text-lg font-semibold text-black dark:text-white">
            Monthly Revenue
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke={isDark ? "#3f3f46" : "#e4e4e7"}
              />
              <XAxis dataKey="month" stroke={isDark ? "#a1a1aa" : "#71717a"} />
              <YAxis stroke={isDark ? "#a1a1aa" : "#71717a"} />
              <Tooltip
                contentStyle={{
                  backgroundColor: isDark ? "#000000" : "#ffffff",
                  border: isDark ? "1px solid #3f3f46" : "1px solid #e4e4e7",
                  color: isDark ? "#ffffff" : "#000000",
                }}
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke={isDark ? "#ffffff" : "#000000"}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
