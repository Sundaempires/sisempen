"use client"
import React, { useState } from 'react';
import SideBar from "../../Components/Common/SideBar/Index"
import Dashboard from './../../Components/Mahasiswa/Dashboard';
import LayoutMahasiswa from './../../Components/Mahasiswa/LayoutMahasiswa';


const Page = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
        console.log("button diclick (/Mahasiswa)")
    };

    return (
        <LayoutMahasiswa>
            <SideBar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <Dashboard toggleSidebar={toggleSidebar} />
        </LayoutMahasiswa>
    )
}

export default Page