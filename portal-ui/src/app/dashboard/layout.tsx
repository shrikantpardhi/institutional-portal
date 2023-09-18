import React from "react";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "./navbar";
import SideBar from "./sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard for content",
};

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      <SideBar />
      <main>{children}</main>
    </>
  );
}

export default DashboardLayout;
