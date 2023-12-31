"use client"
import SideBar from "@/Components/Common/SideBar/Index"
import React, { useState } from 'react';
import Courses from './../../../Components/Mahasiswa/Courses';
import LayoutMahasiswa from "@/Components/Mahasiswa/LayoutMahasiswa";

const Page = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
        console.log("button diclick (/Course)")
    };

    return (
        <LayoutMahasiswa>
            <SideBar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <Courses toggleSidebar={toggleSidebar} />
        </LayoutMahasiswa>
    )
}

export default Page