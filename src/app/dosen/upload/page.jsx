"use client"
import SideBarDosen from "@/Components/Common/SideBar/SideBarDosen"
import ModalUpload from "@/Components/Common/Modal/ModalUpload"
import ModalInfo from "@/Components/Common/Modal/ModalInfo"
import Upload from '../../../Components/Dosen/Upload';
import React, { useState } from 'react';
import LayoutDosen from "@/Components/Dosen/LayoutDosen";


const Page = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isOpenUpload, setIsOpenUpload] = useState(false);
    const [isModalInfo, setIsMoadlInfo] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
        console.log("diclick")
    };

    const toggleUpload = () => {
        setIsOpenUpload(!isOpenUpload)
    }

    const toggleModalInfo = () => {
        setIsMoadlInfo(!isModalInfo)
    }

    return (
        <LayoutDosen>
            <SideBarDosen isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <Upload toggleUpload={toggleUpload} toggleModalInfo={toggleModalInfo}/>
            <ModalUpload isOpen={isOpenUpload} toggleUpload={toggleUpload} />
            <ModalInfo isModalInfo={isModalInfo} toggleModalInfo={toggleModalInfo} />
        </LayoutDosen>
    )
}

export default Page