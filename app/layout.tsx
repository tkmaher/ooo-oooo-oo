import type { Metadata } from "next";
import "./globals.scss";


export const metadata: Metadata = {
  title: "View 3",
  description: "view3.bandcamp.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
