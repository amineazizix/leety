'use client'

import { Inter } from "next/font/google";
import "./globals.css";
import {RecoilRoot} from "recoil";
import React from "react";

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
          <div id='modal'></div>
          {children}
        </RecoilRoot>
      </body>
    </html>
  );
}
