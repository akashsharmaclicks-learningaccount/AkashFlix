import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Mulish } from "next/font/google";

const mulish = Mulish({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AkashFlix",
  description: "AIM HIGH, WATCH HIGHER",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={mulish.className}>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
