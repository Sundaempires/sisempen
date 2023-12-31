"use client"
import React, { useState } from 'react';
import LayoutAdmin from "@/Components/Admin/LayoutAdmin";
import SideBarAdmin from './../../../Components/Common/SideBar/SideBarAdmin';
import Course from './../../../Components/Admin/Course';


const Page = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
        console.log("button diclick (/Admin)")
    };

    return (
        <LayoutAdmin>
            <SideBarAdmin isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <Course/>
        </LayoutAdmin>
    )
}

export default Page