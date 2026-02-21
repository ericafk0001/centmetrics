"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

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
      <h1 className="text-2xl font-bold">Analytics Overview</h1>

      {/* KPI Cards */}
      <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { label: "Total Revenue", value: "$48,295" },
          { label: "Active Users", value: "3,842" },
          { label: "Conversion Rate", value: "5.27%" },
        ].map((card) => (
          <div
            key={card.label}
            className="rounded-xl bg-gray-900 p-5 border border-gray-800"
          >
            <p className="text-sm text-gray-400">{card.label}</p>
            <p className="mt-1 text-3xl font-bold">{card.value}</p>
          </div>
        ))}
      </div>

      {/* Chart */}
      <div className="rounded-xl bg-gray-900 border border-gray-800 p-5">
        <h2 className="mb-4 text-lg font-semibold">Monthly Revenue</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="month" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip
              contentStyle={{
                backgroundColor: "#111827",
                border: "1px solid #374151",
              }}
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#6366F1"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
