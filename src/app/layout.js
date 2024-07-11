import "./globals.css";

import DefaultValues from "@/components/Default-Values/DeafaultValues";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { Inter } from "next/font/google";
import StoreProvider from "./storeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <DefaultValues />
          <Header />
          {children}
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
