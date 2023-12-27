"use client"
import { useState } from "react";
import Users from "../../../Components/Admin/Users"
import SideBarAdmin from './../../../Components/Common/SideBar/SideBarAdmin';
import LayoutAdmin from "@/Components/Admin/LayoutAdmin";

const Page = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
        console.log("button diclick (/Mahasiswa)")
    };
    return (
        <LayoutAdmin>
            <SideBarAdmin isOpen={isSidebarOpen} toggleSidebar={toggleSidebar}/>
            <Users toggleSidebar={toggleSidebar}/>
        </LayoutAdmin>
    )
}

export default Page