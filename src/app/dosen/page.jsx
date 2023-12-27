"use client"
import SideBarDosen from "@/Components/Common/SideBar/SideBarDosen"
import React, { useState } from 'react';
import Dashboard from './../../Components/Dosen/Dashboard';
import LayoutDosen from '@/Components/Dosen/LayoutDosen';

const Page = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
        console.log("button diclick (/Dosen)")
    };

    return (
        <LayoutDosen>
            <SideBarDosen isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <Dashboard toggleSidebar={toggleSidebar}/>
        </LayoutDosen>
    )
}

export default Page