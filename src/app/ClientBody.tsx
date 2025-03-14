"use client";

import { useEffect } from "react";
import { ThemeToggle } from "@/components/theme-toggle";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  // Remove any extension-added classes during hydration
  useEffect(() => {
    // This runs only on the client after hydration
    document.body.className = "antialiased";
  }, []);

  return (
    <body
      className="antialiased min-h-screen bg-[#e6e6e6] dark:bg-[#121212] text-[#424242] dark:text-[#e6e6e6]"
      style={{
        backgroundImage: "url('https://ext.same-assets.com/1758143730/855542513.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        position: "relative",
      }}
      suppressHydrationWarning
    >
      <div
        className="absolute inset-0 bg-[#e6e6e6] bg-opacity-80 dark:bg-[#121212] dark:bg-opacity-90"
        style={{ backdropFilter: "blur(1px)" }}
      ></div>
      <div className="relative z-10">
        {children}
        <ThemeToggle />
      </div>
    </body>
  );
}
