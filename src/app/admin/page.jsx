"use client"
import React, { useState } from 'react';
import SideBarAdmin from '../../Components/Common/SideBar/SideBarAdmin';
import Dashboard from '../../Components/Admin/Dashboard';
import LayoutAdmin from "@/Components/Admin/LayoutAdmin";


const Page = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
        console.log("button diclick (/Admin)")
    };

    return (
        <LayoutAdmin>
            <SideBarAdmin isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <Dashboard toggleSidebar={toggleSidebar}/>
        </LayoutAdmin>
    )
}

export default Page