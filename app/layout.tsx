import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CentMetrics",
  description:
    "Financial metrics dashboard built with Next.js and Tailwind CSS for Resellers and Vendors. Provides insights into sales, revenue, and performance metrics to help businesses make informed decisions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased `}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <header className="fixed w-full z-50 bg-background/80 px-4 md:px-8 backdrop-blur">
            <div className="flex h-18 items-center justify-between py-4">
              <div className="flex items-center gap-4 md:gap-10">
                <div className="flex items-center gap-2">
                  <Image
                    src="/images/icon-dark.png"
                    width={30}
                    height={30}
                    alt="centmetrics logo"
                  />
                  <a href="/" className="font-bold text-lg">
                    CentMetrics
                  </a>
                </div>

                <a href="/" className="text-gray-400 hover:text-gray-200">
                  Home
                </a>
                <a
                  href="/features"
                  className="text-gray-400 hover:text-gray-200"
                >
                  Features
                </a>
                <a href="/about" className="text-gray-400 hover:text-gray-200">
                  About
                </a>
              </div>
              <div className="flex gap-4 items-center">
                <Button variant="outline" asChild>
                  <Link href="/login">Sign In</Link>
                </Button>
                <Button asChild>
                  <Link href="/signup">Sign Up</Link>
                </Button>
              </div>
            </div>
          </header>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
