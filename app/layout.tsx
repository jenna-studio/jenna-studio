import type { Metadata } from "next";
import "./globals.css";
import "./content-pages.css";

export const metadata: Metadata = {
  title: "Jenna Studio — Digital ideas with a pulse",
  description: "The independent practice of Jenna: expressive digital products, creative technology, and thoughtful systems.",
  metadataBase: new URL("https://jenna-studio.dev"),
  alternates: { canonical: "/" },
  icons: { icon: "/bunny-friend.svg" },
  openGraph: { title: "Jenna Studio", description: "Digital ideas with a pulse.", url: "/", siteName: "Jenna Studio", type: "website", images: ["/og.png"] },
  twitter: { card: "summary_large_image", title: "Jenna Studio", description: "Digital ideas with a pulse.", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
