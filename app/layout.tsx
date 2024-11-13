import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import { HeaderTextProvider } from "@/context/headerTextContext/HeaderTextProvider";
import AiChat from "@/components/aiChat/AiChat";
import { AiChatProvider } from "@/context/aiChatContext/AiChatProvider";

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
    <html className="overflow-x-hidden" lang="en">
      <body
        className='antialiased overflow-x-hidden min-h-[100svh] mx-auto flex flex-col bg-gradient-to-r shadow-lg lg:shadow-red-600 from-black to-base-900 max-w-[1400px]'
      >
        <AiChatProvider>
          <HeaderTextProvider>
            <Navbar />
            <main className="w-full p-5 flex flex-grow">
              {children}
            </main>
              <AiChat />
          </HeaderTextProvider>
        </AiChatProvider>
      </body>
    </html>
  );
}
