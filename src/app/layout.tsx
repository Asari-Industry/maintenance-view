import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

import "./globals.css";

export const metadata: Metadata = {
    title: "メンテナンス中",
    description: "システムメンテナンス",
};

export default function RootLayout(props: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ja">
            <body className={inter.className}>
                <main>
                    {props.children}
                </main>
            </body>
        </html>
    );
}
