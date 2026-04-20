import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anurag Sanyal | Full Stack Developer",
  description:
    "Professional portfolio for a student full stack developer specializing in React, Django, and Java."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
