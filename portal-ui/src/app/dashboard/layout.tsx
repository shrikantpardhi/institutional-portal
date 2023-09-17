import React from 'react'
import { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard for content",
};

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="winter">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

export default DashboardLayout