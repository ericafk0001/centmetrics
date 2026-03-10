"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

export function DashboardSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  const isActive = pathname === "/dashboard";

  return (
    <aside
      className={`${
        collapsed ? "w-16" : "w-64"
      } border-r border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black transition-[width] duration-300 flex flex-col overflow-hidden`}
    >
      <div
        className={`p-4 flex flex-col gap-2 ${collapsed ? "items-center" : ""}`}
      >
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCollapsed(!collapsed)}
          className={`${collapsed ? "" : "self-end"} shrink-0`}
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`transition-transform duration-300 ${collapsed ? "rotate-180" : ""}`}
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </Button>

        <Link
          href="/dashboard"
          className={`flex items-center rounded-lg transition-colors ${
            isActive
              ? "bg-zinc-100 text-black dark:bg-zinc-900 dark:text-white"
              : "text-zinc-500 hover:text-black dark:text-zinc-400 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900"
          } ${collapsed ? "justify-center p-2" : "gap-3 px-3 py-2"}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="shrink-0"
          >
            <rect width="7" height="9" x="3" y="3" rx="1" />
            <rect width="7" height="5" x="14" y="3" rx="1" />
            <rect width="7" height="9" x="14" y="12" rx="1" />
            <rect width="7" height="5" x="3" y="16" rx="1" />
          </svg>
          <span
            className={`whitespace-nowrap transition-opacity duration-200 ${
              collapsed ? "opacity-0 w-0 overflow-hidden" : "opacity-100"
            }`}
          >
            Dashboard
          </span>
        </Link>
      </div>
    </aside>
  );
}
