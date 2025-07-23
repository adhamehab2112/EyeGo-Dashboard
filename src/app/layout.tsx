
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import ProviderWrapper from "./Components/ProviderWrapper/ProviderWrapper";

const inter = Geist({
  variable: "--font-inter",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "EyeGo Dashboard",
  description: "A dashboard for EyeGo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <ProviderWrapper>
          {children}
        </ProviderWrapper>
      </body>
    </html>
  );
}
