import { Inter } from "next/font/google";
import "./globals.css";
import LayoutProvider from "@/components/LayoutProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kasirqu",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <LayoutProvider>
          {children}
        </LayoutProvider>
      </body>
    </html>
  );
}
