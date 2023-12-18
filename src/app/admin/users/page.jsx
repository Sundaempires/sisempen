"use client"
import { useState } from "react";
import Users from "../../../Components/Admin/Users"
import SideBarAdmin from './../../../Components/Common/SideBar/SideBarAdmin';

const Page = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
        console.log("button diclick (/Mahasiswa)")
    };
    return (
        <div className="flex flex-row">
            <SideBarAdmin isOpen={isSidebarOpen} toggleSidebar={toggleSidebar}/>
            <Users toggleSidebar={toggleSidebar}/>
        </div>
    )
}

export default Page