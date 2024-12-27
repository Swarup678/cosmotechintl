'use client'
import "./globals.css";
import Navbar from "./components/navbar/navbar";
import BackToTop from "./components/BackToTop/BackToTop";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={``} id="home">
        <Navbar />
        {children}
        <BackToTop />
      </body>
    </html>
  );
}
