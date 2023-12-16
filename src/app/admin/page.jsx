"use client"
import React, { useState } from 'react';
import SideBarAdmin from '../../Components/Common/SideBar/SideBarAdmin';
import Dashboard from '../../Components/Admin/Dashboard';


const Page = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
        console.log("button diclick (/Mahasiswa)")
    };

    return (
        <div className="flex flex-row">
            <SideBarAdmin isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <Dashboard/>
        </div>
    )
}

export default Page