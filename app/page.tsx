import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: "/Zap.svg",
    title: "Fast Performance",
    description: "Lightning-fast data processing and page loads.",
  },
  {
    icon: "/Monitor.svg",
    title: "Analytics",
    description:
      "Track your metrics across all devices and platforms in one place.",
  },
  {
    icon: "/AppWindowMac.svg",
    title: "Dashboard Customization",
    description: "Customizable dashboards to visualize your data your way.",
  },
  {
    icon: "/FileText.svg",
    title: "Detailed Reports",
    description:
      "Get insights into your sales, revenue, and performance metrics to make informed decisions and grow your business.",
  },
  {
    icon: "/AlertCircle.svg",
    title: "Smart Alerts",
    description: "Get notified when metrics hit your defined thresholds.",
  },

  {
    icon: "/ShoppingCart.svg",
    title: "Inventory Tracking",
    description: "Track inventory and sales.",
  },
];

export default function Home() {
  return (
    <div className="bg-white dark:bg-black">
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center lg:min-h-[50vh]">
          <h1 className="text-5xl font-semibold tracking-tight text-black dark:text-white sm:text-8xl md:text-9xl">
            CentMetrics
          </h1>
          <p className="mt-4 max-w-lg text-lg sm:text-xl text-zinc-500 dark:text-zinc-400">
            Simple, powerful analytics and inventory managing sysytem for
            resellers and vendors.
          </p>
          <div className="mt-8 flex gap-4">
            <Button asChild size="lg">
              <Link href="/login" className="px-8 py-6">
                Get Started
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link
                className="px-8 py-6"
                href="https://github.com/ericafk0001/centmetrics"
                target="_blank"
              >
                GitHub
              </Link>
            </Button>
          </div>
        </section>

        {/* Features Section */}
        <section className="px-6 py-16 lg:py-12">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-12 text-center text-4xl font-semibold text-black dark:text-white">
              Features
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <Card
                  key={feature.title}
                  className="border-zinc-200 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-400 hover:shadow-lg dark:border-zinc-800 dark:hover:border-zinc-600"
                >
                  <CardContent className="flex h-full flex-col p-6 text-left">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center">
                      <Image
                        src={feature.icon}
                        alt={feature.title}
                        width={40}
                        height={40}
                        className="invert brightness-200 dark:invert-0 dark:brightness-100"
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-black dark:text-white">
                      {feature.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm text-zinc-500 dark:text-zinc-400">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="border-t border-zinc-200 px-6 py-12 dark:border-zinc-800">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            © 2026 CentMetrics. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-sm text-zinc-500 hover:text-black dark:text-zinc-400 dark:hover:text-white"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="text-sm text-zinc-500 hover:text-black dark:text-zinc-400 dark:hover:text-white"
            >
              Terms
            </Link>
            <Link
              href="https://github.com/ericafk0001/centmetrics"
              target="_blank"
              className="text-sm text-zinc-500 hover:text-black dark:text-zinc-400 dark:hover:text-white"
            >
              GitHub
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
