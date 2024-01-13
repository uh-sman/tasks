import Sidebar from "@/components/Sidebar";
import { Metadata } from "next";
import Head from "next/head";
import React from "react";
// import DashboardPage from "./components/dashboard";

export const metadata: Metadata = {
    title: 'CreateListing',
    description: 'CreateListing',
}

interface CreateListingProps {
    children: React.ReactNode;
}

const CreateListing: React.FC<CreateListingProps> = ({ children }) => {
    return (
        <>
            <div className="flex justify-center">
                <div className="w-[200px]">
                <Sidebar />
                </div>

                {children}
                {/* Your Dashboard content */}
                {/* <DashboardPage>
                </DashboardPage> */}
            </div>
        </>
    );
}

export default CreateListing;
