"use client"
import React, { useState } from 'react';
import SideBar from "@/Components/Common/SideBar/Index"
import Information from './../../../Components/Mahasiswa/Information';

const Page = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
        console.log("button diclick (/Register)")
    };

    return (
        <div className="flex flex-row">
            <SideBar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <Information toggleSidebar={toggleSidebar}/>
        </div>
    )
}

export default Page