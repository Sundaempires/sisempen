"use client"
import React, { useState } from 'react';
import SideBar from "@/Components/Common/SideBar/Index"
import Registration from './../../../Components/Mahasiswa/Registration';
import LayoutMahasiswa from '@/Components/Mahasiswa/LayoutMahasiswa';

const Page = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
        console.log("button diclick (/Register)")
    };

    return (
        <LayoutMahasiswa>
            <SideBar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <Registration toggleSidebar={toggleSidebar} />
        </LayoutMahasiswa>
    )
}

export default Page