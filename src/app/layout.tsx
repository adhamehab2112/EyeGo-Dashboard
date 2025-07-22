import type { Metadata } from "next";
import { Geist, Geist_Mono , Inter } from "next/font/google";
import "./globals.css";
import { Provider } from 'react-redux'
import { store } from '../store'

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
        {children}
      </body>
    </html>
  );
}
