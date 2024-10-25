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
  title: "Soller | Home",
  description: "Projeto feito para participar do recrutamento da Buzzvel FE",
  keywords: ["Buzzvel", "Recrutamento", "Frontend", "Projeto Soller", "Desenvolvimento Web"],

  openGraph: {
    title: "Soller | Home",
    description: "Projeto feito para participar do recrutamento da Buzzvel FE",
    type: "website",
    siteName: "Soller Project",
  },

  twitter: {
    card: "summary_large_image",
    title: "Soller | Home",
    description: "Projeto feito para participar do recrutamento da Buzzvel FE"
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#FFFFFF",
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
