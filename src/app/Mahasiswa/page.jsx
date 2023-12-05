"use client"
import React, { useState } from 'react';
import SideBar from "../../Components/SideBar/Index"
import DashMain from "@/Components/MainContent/DashMain"


const Page = ({}) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
        console.log("button diclick (/Mahasiswa)")
    };

    return (
        <div className="flex flex-row">
            <SideBar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <DashMain toggleSidebar={toggleSidebar}/>
        </div>
    )
}

export default Page