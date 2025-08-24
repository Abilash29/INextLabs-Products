import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "iNextLabs - AI-Powered Solutions",
  description: "Transform your business with iNextLabs' cutting-edge AI products: DocsAI, InsightsAI, EngageAI, and AssistAI.",
  icons: {
    icon: '/favicon (1).ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50" key="root-container">
          {children}
        </div>
      </body>
    </html>
  );
}
