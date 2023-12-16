"use client"
import React, { useState } from 'react';
import SideBar from "@/Components/Common/SideBar/Index"
import Registration from './../../../Components/Mahasiswa/Registration';

const Page = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
        console.log("button diclick (/Register)")
    };

    return (
        <div className="flex flex-row">
            <SideBar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <Registration toggleSidebar={toggleSidebar} />
        </div>
    )
}

export default Page