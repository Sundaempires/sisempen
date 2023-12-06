"use client"
import React, { useState } from 'react';
import SideBarAdmin from './../../Components/SideBar/SideBarAdmin';
import MainContent from '@/Components/MainContent/MainContent';

const Page = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
        console.log("button diclick (/Mahasiswa)")
    };

    return (
        <div className="flex flex-row">
            <SideBarAdmin isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <MainContent
                toggleSidebar={toggleSidebar}
                MainContent={
                    <div className="w-full p-2">
                        <div className='flex flex-row justify-around py-3'>
                            <div className='bg-white flex flex-col w-56 rounded-xl p-4'>
                                <div className='w-14 h-14 bg-purple-100 rounded-full mb-3 flex justify-center items-center'>
                                    <h1>?</h1>
                                </div>
                                <p className='text-xs'>Perlu Tindakan</p>
                                <div className='flex flex-row gap-1 items-baseline'>
                                    <h1 className='font-bold text-3xl'>90</h1>
                                    <p className='text-xs'>orang</p>
                                </div>
                            </div>
                            <div className='bg-white flex flex-col w-56 rounded-xl p-4'>
                                <div className='w-14 h-14 bg-blue-100 rounded-full mb-3 flex justify-center items-center'>
                                    <h1>M</h1>
                                </div>
                                <p className='text-xs'>Mahasiswa Yang Mengikuti</p>
                                <div className='flex flex-row gap-1 items-baseline'>
                                    <h1 className='font-bold text-3xl'>90</h1>
                                    <p className='text-xs'>orang</p>
                                </div>
                            </div>
                            <div className='bg-white flex flex-col w-56 rounded-xl p-4'>
                                <div className='w-14 h-14 bg-green-100 rounded-full mb-3 flex justify-center items-center'>
                                    <h1>i</h1>
                                </div>
                                <p className='text-xs'>Informatika</p>
                                <div className='flex flex-row gap-1 items-baseline'>
                                    <h1 className='font-bold text-3xl'>50</h1>
                                    <p className='text-xs'>orang</p>
                                </div>
                            </div>
                            <div className='bg-white flex flex-col w-56 rounded-xl p-4'>
                                <div className='w-14 h-14 bg-orange-100 rounded-full mb-3 flex justify-center items-center'>
                                    <h1>SI</h1>
                                </div>
                                <p className='text-xs'>Sistem Informasi</p>
                                <div className='flex flex-row gap-1 items-baseline'>
                                    <h1 className='font-bold text-3xl'>40</h1>
                                    <p className='text-xs'>orang</p>
                                </div>
                            </div>
                            <div className='bg-white flex flex-col w-56 rounded-xl p-4'>
                                <div className='w-14 h-14 bg-red-100 rounded-full mb-3 flex justify-center items-center'>
                                    <h1>D</h1>
                                </div>
                                <p className='text-xs'>Dosen Pengajar</p>
                                <div className='flex flex-row gap-1 items-baseline'>
                                    <h1 className='font-bold text-3xl'>15</h1>
                                    <p className='text-xs'>orang</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div></div>
                        </div>
                    </div>
                }
            />
        </div>
    )
}

export default Page