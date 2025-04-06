import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "./LayoutWrapper";
import { ClerkProvider } from "@clerk/nextjs";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Devians - A career guiding platform",
  description: "A career guiding platform with AI features and many more",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      {" "}
      <html
        lang="en"
        className="min-h-screen bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"
      >
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <LayoutWrapper>
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_900px_at_100%_200px,#d5c5ff,transparent)]"></div>
            <div className="relative">{children}</div>
          </LayoutWrapper>
        </body>
      </html>
    </ClerkProvider>
  );
}
