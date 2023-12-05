"use client"
import React, { useState } from 'react';
import SideBar from "@/Components/SideBar/Index"
import RegisMain from "@/Components/MainContent/RegisMain"

const Page = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
        console.log("button diclick (/Register)")
    };

    return (
        <div className="flex flex-row">
            <SideBar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <RegisMain toggleSidebar={toggleSidebar} />
        </div>
    )
}

export default Page