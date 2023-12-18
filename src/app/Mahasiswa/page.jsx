"use client"
import React, { useState } from 'react';
import SideBar from "../../Components/Common/SideBar/Index"
import Dashboard from './../../Components/Mahasiswa/Dashboard';
import { isAuthenticated } from '@/Utilities/auth';


const Page = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
        console.log("button diclick (/Mahasiswa)")
    };

    if (!isAuthenticated()) {
        // Tambahkan logika redirect atau tindakan lain jika tidak autentikasi
        return <p>LAKUKAN LOGIN</p>;
    }

    return (
        <div className="flex flex-row">
            <SideBar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <Dashboard toggleSidebar={toggleSidebar} />
        </div>
    )
}

export default Page