import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jenna Studio — Digital ideas with a pulse",
  description: "The independent practice of Jenna: expressive digital products, creative technology, and thoughtful systems.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
