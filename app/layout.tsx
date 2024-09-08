import './globals.css'
import './embla.css'
import React from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: 'Cars Hub',
  description: 'Discover the best cars in the world',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
      <Navbar/>
      {children}
      <Footer/>
      </body>
    </html>
  )
}
