import type { Metadata } from "next";
import { Geist, Geist_Mono, Gugi, Questrial } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const gugi = Gugi({
  weight: "400",
  variable: "--font-gugi",
  subsets: ["latin"],
});

const questrial = Questrial({
  weight: "400",
  variable: "--font-questrial",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Founders Lab | Strategy. Capital. Law.",
  description: "The Founders Lab is a multidisciplinary investment banking and legal advisory firm backing founders with vision. From zero to one, through growth, funding, structuring deals to negotiating strategic exits.",
  icons: {
    icon: '/tfl_logo.png',
    apple: '/tfl_logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${gugi.variable} ${questrial.variable} antialiased`}
      >
        {/* Fixed Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="fixed top-0 left-0 w-full h-full object-cover -z-10"
        >
          <source src="/bg-video.mp4" type="video/mp4" />
        </video>
        
        {/* Page Content */}
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
