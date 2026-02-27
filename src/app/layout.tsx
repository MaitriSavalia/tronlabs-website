import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

export const metadata: Metadata = {
  title: "Tron Labs – The Data Backbone for Physical AI",
  description:
    "Tron Labs builds large-scale egocentric, multimodal datasets powering robotics, wearable AI, and embodied intelligence. The ChatGPT moment for robotics is near.",
  keywords:
    "Physical AI, robotics data, egocentric datasets, embodied AI, multimodal data, wearable AI",
  openGraph: {
    title: "Tron Labs – The Data Backbone for Physical AI",
    description: "Powering the next intelligence revolution with real-world egocentric data.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="noise">
        <PageTransition />
        <CustomCursor />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
