import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider, ClerkLoaded, ClerkLoading } from '@clerk/nextjs';
import localFont from "next/font/local";
import ToasterProvider from "@/components/providers/ToasterProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "eFast Cards Kiosk",
  description: "",
};



export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {




  return (
     <ClerkProvider>
     <html lang="en">
      <body
        className={`bg-gradient-radial-custom ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
   
          <ToasterProvider />
            {children}
      </body>
    </html>
    </ClerkProvider>
  
  );
}
