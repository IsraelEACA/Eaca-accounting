import type { Metadata } from "next";
import { Geist, Urbanist } from "next/font/google";
import "./globals.css";

// Geist font
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Poppins font
const urbanist = Urbanist({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "EACA Accounting Services",
  description: "EACA Accounting Services | Explore",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${urbanist.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
