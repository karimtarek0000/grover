import { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700", "500", "400"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "%s | Grover",
  description:
    "Grocen atssures fresh grocery every morning to your family without getting out in this pandemic.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
