"use client"
import SideBar from "@/Components/SideBar/Index"
import CourseMain from "@/Components/MainContent/CourseMain"
import React, { useState } from 'react';

const Page = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
        console.log("button diclick (/Course)")
    };

    return (
        <div className="flex flex-row">
            <SideBar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <CourseMain toggleSidebar={toggleSidebar} />
        </div>
    )
}

export default Page