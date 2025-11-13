import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Australian Podcast & YouTube Creators",
  description:
    "Curated list of emerging Australian podcasters and YouTubers with fewer than 100k subscribers."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
