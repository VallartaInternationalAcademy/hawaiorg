import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from 'next/font/local'

// Font files can be colocated inside of `pages`
const cooperhHewitt = localFont({ src: [
    {
      path: '../public/fonts/cooper-hewitt/CooperHewitt-Medium.otf',
      style: 'normal',
    },
  ] })
import "./globals.css";

// const poppins = Poppins({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Corazon Hawaii",
  description: "Corazon Hawaii ORG",
  verification: {
    google: "OXlS6M5sLe21LXthyznm35mZ9Nihl--hMyEdqzr9Z74",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={cooperhHewitt.className}>{children}</body>
    </html>
  );
}
