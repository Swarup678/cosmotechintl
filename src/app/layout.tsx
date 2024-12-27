import "./globals.css";
import Navbar from "./components/navbar/navbar";
import { FloatingNavDemo } from "./components/floatingnav/floatingnavbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={``}>
        {/* <Navbar /> */}
         <FloatingNavDemo/>
        {children}
      </body>
    </html>
  );
}
