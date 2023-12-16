"use client"
import SideBarDosen from "@/Components/Common/SideBar/SideBarDosen"
import React, { useState } from 'react';
import Dashboard from './../../Components/Dosen/Dashboard';

const Page = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
        console.log("button diclick (/Mahasiswa)")
    };

    return (
        <div className="flex flex-row">
            <SideBarDosen isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <Dashboard toggleSidebar={toggleSidebar}/>
        </div>
    )
}

export default Page