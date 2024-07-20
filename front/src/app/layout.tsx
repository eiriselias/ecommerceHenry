import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

//componentes
import NavBar from "@/components/navBar/navBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Proyecto Ecommerce",
  description: "Actividad para la el bootcamp soy Henry",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar/>
        {children}
      </body>
    </html>
  );
}
