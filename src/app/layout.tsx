import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { RecoilRootProvider, ThemeProvider } from "./providers";
import Cursor from "@/components/Cursor";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Draw",
  description: "A simple hand drawing application using Next.js.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <RecoilRootProvider>
          <ThemeProvider attribute="class" defaultTheme="system">
            <Cursor />
            {children}
          </ThemeProvider>
        </RecoilRootProvider>
      </body>
    </html>
  );
}
