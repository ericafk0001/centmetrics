"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface HamburgerIconProps {
  isOpen: boolean;
}

function HamburgerIcon({ isOpen }: HamburgerIconProps) {
  return (
    <div className="relative w-6 h-6 flex flex-col justify-center items-center">
      <span
        className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${
          isOpen ? "rotate-45" : "-translate-y-2"
        }`}
      />
      <span
        className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-0 scale-0" : "opacity-100"
        }`}
      />
      <span
        className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${
          isOpen ? "-rotate-45" : "translate-y-2"
        }`}
      />
    </div>
  );
}

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/about", label: "About" },
];

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden p-2 hover:bg-accent rounded-md transition-colors"
        aria-label="Open menu"
      >
        <Image
          src="/AlignJustify.svg"
          width={24}
          height={24}
          alt="Menu"
          className="dark:invert-0 invert"
        />
      </button>

      <SheetContent side="right" className="w-80 sm:w-96">
        <SheetHeader className="border-b pb-4">
          <SheetTitle className="flex items-center gap-2">
            <Image
              src="/icon.svg"
              width={24}
              height={24}
              alt="centmetrics logo"
              className="rounded dark:invert"
            />
            <span>CentMetrics</span>
          </SheetTitle>
        </SheetHeader>

        <nav className="flex flex-col gap-1 mt-4">
          {navLinks.map((link, index) => (
            <SheetClose asChild key={link.href}>
              <Link
                href={link.href}
                className="flex items-center py-3 px-4 text-lg font-medium rounded-md hover:bg-accent transition-all duration-200 transform hover:translate-x-1"
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                {link.label}
              </Link>
            </SheetClose>
          ))}
        </nav>

        <div className="mt-auto pt-4 border-t flex flex-col gap-4 px-2">
          <div className="flex items-center justify-between px-2 py-2">
            <span className="text-sm text-muted-foreground">Theme</span>
            <Select value={theme} onValueChange={setTheme}>
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <SheetClose asChild>
            <Button variant="outline" className="w-full py-6 text-base" asChild>
              <Link href="/login">Sign In</Link>
            </Button>
          </SheetClose>

          <SheetClose asChild>
            <Button className="w-full py-6 text-base" asChild>
              <Link href="/signup">Sign Up</Link>
            </Button>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
}
