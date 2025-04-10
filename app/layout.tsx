import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Creana Prueba Front End",
  description: "Creana Prueba Front End",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} relative antialiased w-full flex items-center justify-center`}
      >
        {children}
        <Image
          src="/assets/background.png"
          alt="Mapa mundi"
          width={1024}
          height={1024}
          className="absolute z-[-1] isolate inset-0 w-full mask-b-from-50% mask-b-to-90% mask-radial-from-0%"
          priority
        />
      </body>
    </html>
  );
}
