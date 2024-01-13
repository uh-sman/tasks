import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Sidebar from "./(site)/dashboard/components/Sidebar";
import Home from "./(site)/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}, ) {
  return (
    <html lang="en">
      {/* <Head>
        <script
          src="https://upload-widget.cloudinary.com/global/all.js"
          type="text/javascript"
        ></script>
      </Head> */}
      <body className={inter.className}>
        {/* <Home>
        {children}
        </Home> */}
        {/* <Sidebar>
          {children}
        </Sidebar> */}
      </body>
    </html>
  );
}
