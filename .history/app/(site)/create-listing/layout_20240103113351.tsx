import Sidebar from "@/components/Sidebar";
import { Metadata } from "next";
import Head from "next/head";
import React from "react";
import DashboardPage from "./components/dashboard";

export const metadata: Metadata = {
    title: 'Dashboard',
    description: 'Dashboard',
}

interface DashboardProps {
    children: React.ReactNode;
}

const Dashboard: React.FC<DashboardProps> = ({ children }) => {
    return (
        <>
            <div className="flex justify-around">
                <Sidebar />
                {/* Your Dashboard content */}
                <DashboardPage>
                {children}
                </DashboardPage>
            </div>
        </>
    );
}

export default Dashboard;
