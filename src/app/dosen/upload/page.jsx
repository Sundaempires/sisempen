"use client"
import SideBarDosen from "@/Components/SideBar/SideBarDosen"
import DosenMain from "@/Components/MainContent/DosenMain"
import ModalUpload from "@/Components/Modal/ModalUpload"
import ModalInfo from "@/Components/Modal/ModalInfo"
import React, { useState } from 'react';


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
        <div className="flex flex-row relative">
            <SideBarDosen isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <DosenMain
                toggleSidebar={toggleSidebar}
                dashContent={
                    <div className="w-full p-2">
                        <div className="w-full flex justify-center gap-2">
                            <button onClick={toggleUpload} className="bg-white py-4 text-sm font-bold w-full rounded">Upload (+)</button>
                            <button onClick={toggleModalInfo} className="bg-white py-4 text-sm font-bold w-full rounded">Upload (i)</button>
                        </div>
                        <p className="py-2 text-sm">Preview</p>
                        <div className=" py-3 bg-white rounded h-128">
                            <table className="w-full text-xs bg-white">
                                <thead>
                                    <tr className="">
                                        <th className="p-2">P</th>
                                        <th className="text-start">Tema</th>
                                        <th>Absen</th>
                                        <th>Materi</th>
                                        <th>Tugas</th>
                                        <th>Gmeet</th>
                                        <th>Alat</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="text-xs border-b-2 border-b-gray-200 text-center">
                                        <td className="px-2 py-4">1</td>
                                        <td className="text-start">Machine Learning</td>
                                        <td className="text-green-600">Active</td>
                                        <td className="text-green-600">Active</td>
                                        <td className="text-green-600">Active</td>
                                        <td className="text-red-600">Not actived</td>
                                        <td className="">
                                            <button className="px-3 py-2  bg-blue-600 text-white rounded mr-3">Edit</button>
                                            <button className="px-3 py-2  bg-red-600 text-white rounded">Delet</button>
                                        </td>
                                    </tr>
                                    <tr className="text-xs border-b-2 border-b-gray-200 text-center">
                                        <td className="px-2 py-4">2</td>
                                        <td className="text-start">Cloud Computing</td>
                                        <td className="text-green-600">Active</td>
                                        <td className="text-green-600">Active</td>
                                        <td className="text-red-600">Not actived</td>
                                        <td className="text-red-600">Not actived</td>
                                        <td className="">
                                            <button className="px-3 py-2 bg-blue-600 text-white rounded mr-3">Edit</button>
                                            <button className="px-3 py-2 bg-red-600 text-white rounded">Delet</button>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                }
            />
            <ModalUpload isOpen={isOpenUpload} toggleUpload={toggleUpload} />
            <ModalInfo isModalInfo={isModalInfo} toggleModalInfo={toggleModalInfo} />
        </div>
    )
}

export default Page