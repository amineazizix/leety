'use client'

import { Inter } from "next/font/google";
import "./globals.css";
import {RecoilRoot} from "recoil";
import React from "react";
import "react-toastify/dist/ReactToastify.css";
import {ToastContainer} from "react-toastify";
import useHasMounted from "@/hooks/useHasMounted";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RecoilRoot>
          <ToastContainer />
          <div id='modal'></div>
          {children}
        </RecoilRoot>
      </body>
    </html>
  );
}
