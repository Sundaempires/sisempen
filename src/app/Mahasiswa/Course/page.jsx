"use client"
import SideBar from "@/Components/Common/SideBar/Index"
import React, { useState } from 'react';
import Courses from './../../../Components/Mahasiswa/Courses';

const Page = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
        console.log("button diclick (/Course)")
    };

    return (
        <div className="flex flex-row">
            <SideBar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <Courses toggleSidebar={toggleSidebar} />
        </div>
    )
}

export default Page