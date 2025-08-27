"use client";
import { useEffect, useState } from "react";
import {
  Home,
  Calculator,
  Calendar,
  Mail,
  Sparkles,
  Menu,
  ChevronLeft,
} from "lucide-react";
import Link from "next/link";

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  // Detect screen size on mount
  useEffect(() => {
    if (window.innerWidth >= 900) {
      setIsCollapsed(false); // desktop open
    } else {
      setIsSmallScreen(true);
      setIsCollapsed(true); // mobile closed
    }
  }, []);

  return (
    <div
      className={`${
        isCollapsed ? isSmallScreen ? "w-auto" : "w-16" : isSmallScreen ? "w-64" : "w-72"
      } bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200 flex flex-col border-r border-gray-200 dark:border-white/10 transition-all duration-300`}
    >
      {/* Toggle Button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="p-4 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 transition"
      >
        {isCollapsed ? <Menu size={20} /> : <ChevronLeft size={20} />}
      </button>

      {/* Nav Links */}
      <nav className={`flex-1 space-y-2 ${isCollapsed ? "flex flex-col items-center" : ""}`}>
        <Link
          href="/"
          className="flex items-center gap-3 px-4 py-2 rounded-lg hover:text-indigo-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          <Home size={20} />
          {!isCollapsed && <span>Home</span>}
          
        </Link>

        <Link
          href="/hike-calculator"
          className="flex items-center gap-3 px-4 py-2 rounded-lg hover:text-indigo-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          <Calculator size={20} />
          {!isCollapsed && <span>Hike Calculator</span>}
        </Link>

        <Link
          href="/notice-period-calculator"
          className="flex items-center gap-3 px-4 py-2 rounded-lg hover:text-indigo-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          <Calendar size={20} />
          {!isCollapsed && <span>Notice Period Calculator</span>}
        </Link>

        <Link
          href="/mail-generator"
          className="flex items-center gap-3 px-4 py-2 rounded-lg hover:text-indigo-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          <Mail size={20} />
          {!isCollapsed && (
            <span className="relative flex items-center">
              Mail Templates
              <Sparkles
                className="absolute -top-2 -right-4 text-indigo-600"
                size={15}
              />
            </span>
          )}
        </Link>
      </nav>
    </div>
  );
}
