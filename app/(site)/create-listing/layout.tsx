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
            <div className="flex flex-1 justify-center lg:justify-start lg:flex ">
                <div className="hidden lg:block lg:w-[600px]">
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
