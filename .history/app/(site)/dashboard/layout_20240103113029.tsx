import { Metadata } from "next";
import Head from "next/head";
import React from "react";

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
            <div>
                {/* Your Dashboard content */}
                {children}
                <h1>Hello   </h1>
            </div>
        </>
    );
}

export default Dashboard;
