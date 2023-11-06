import { Inter } from "next/font/google";
import "./globals.css";
import TopLoader from "@/components/sub-components/TopLoader";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
});

export const metadata = {
  title: "NextAgency",
  description: "Powerfull Agency Services",
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TopLoader />
        {children}
      </body>
    </html>
  );
}
