import { Inter } from "next/font/google";
import '@/app/ui/global.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CSPM",
  description: "Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
