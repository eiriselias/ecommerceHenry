import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

//componentes
import NavBar from "@/components/navBar/navBar";
import Footer from "@/components/footer/Footer";

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
        <div className="contenedor">
          <header>
            <NavBar/>
          </header>
          <main>
            {children}
          </main>
          <footer>
            <Footer/>
          </footer>
        </div>
      </body>
    </html>
  );
}
