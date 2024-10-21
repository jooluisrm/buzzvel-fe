import type { Metadata } from "next";
import localFont from "next/font/local";
import { Roboto } from 'next/font/google';
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const mainFontFamily = Roboto({
  weight: ['100', "300", "400", "500", "700", "900"],
  subsets:["latin"],
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${mainFontFamily.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}