import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { ThemeToggle } from "@/components/theme-toggle";
import { DashboardSidebar } from "@/components/dashboard-sidebar";
import Link from "next/link";
import Image from "next/image";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <nav className="border-b border-zinc-200 px-6 py-4 flex justify-between items-center dark:border-zinc-800">
        <div className="flex items-center gap-2">
          <Image
            src="/icon.svg"
            width={24}
            height={24}
            alt="centmetrics logo"
            className="rounded dark:invert"
          />
          <Link href="/dashboard" className="font-bold text-lg">
            CentMetrics
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm text-zinc-500 dark:text-zinc-400">
            {user.email}
          </span>
          <ThemeToggle />
        </div>
      </nav>
      <div className="flex min-h-[calc(100vh-65px)]">
        <DashboardSidebar />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
