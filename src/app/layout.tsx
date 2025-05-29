"use client";
import "./globals.css";
import "@/lib/capacitor";
import { Inter } from "next/font/google";
import { CapacitorInitializer } from "@/components/features/capacitorInitializer";
import { setSystemStyle } from "@/lib/capacitor";
const inter = Inter({ subsets: ["latin"] });
setSystemStyle();

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body className={inter.className}>
            <CapacitorInitializer />
            <main className="flex justify-center bg-gray-100 min-h-screen">{children}</main>
         </body>
      </html>
   );
}
