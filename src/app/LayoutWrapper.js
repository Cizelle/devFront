"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  const showNavbarAndFooter = pathname !== "/register";

  return (
    <div className="flex flex-col min-h-screen">
      {showNavbarAndFooter && <Navbar />}
      <div className="flex-grow">{children}</div>
      {showNavbarAndFooter && <Footer />}
    </div>
  );
}
