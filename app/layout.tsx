import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MP-5: Url shortener",
  description: "Url shortener for cs-391 assignment mp-5",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
