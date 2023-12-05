"use client"
import React, { useState } from 'react';
import SideBar from "@/Components/SideBar/Index"

const Page = () => {
    const [activeTab, setActiveTab] = useState('Absen');

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    }

    return (
        <div className="flex flex-row">

            <SideBar />

            <div className="bg-gray-100 flex flex-row md:justify-between h-screen w-full md:p-2 gap-2">
                <div className="overflow-y-auto bg-white flex flex-col w-full md:w-3/4 h-full gap-2 rounded p-2">
                    <div className="">
                        <div className="flex justify-between">
                            <h1 className="font-md font-bold">Pertemuan 1</h1>
                            <button className="font-md font-bold">=</button>
                        </div>
                        <div className="border-2 border-gray-200 h-96 flex justify-center items-center mt-2">
                            <h1>INI VIDEO</h1>
                        </div>
                    </div>
                    <div className="w-full border-2 border-gray-200 rounded">
                        <div className="border-b-2 border-gray-200 h-10 text-sm">
                            <button
                                className={`h-full w-1/4 ${activeTab === 'Absen' ? 'bg-gray-300 text-white' : ''}`}
                                onClick={() => handleTabClick('Absen')}
                            >
                                Absen
                            </button>
                            <button
                                className={`h-full w-1/4 ${activeTab === 'Materi' ? 'bg-gray-300 text-white' : ''}`}
                                onClick={() => handleTabClick('Materi')}
                            >
                                Materi
                            </button>
                            <button
                                className={`h-full w-1/4 ${activeTab === 'Tugas' ? 'bg-gray-300 text-white' : ''}`}
                                onClick={() => handleTabClick('Tugas')}
                            >
                                Tugas
                            </button>
                            <button
                                className={`h-full w-1/4 ${activeTab === 'Gmeet' ? 'bg-gray-300 text-white' : ''}`}
                                onClick={() => handleTabClick('Gmeet')}
                            >
                                Gmeet
                            </button>
                        </div>

                        <div className='p-2 mt-2'>
                            {activeTab === 'Absen' &&
                                <div className='flex flex-col justify-center items-center gap-1 h-64 min-h-full text-sm'>
                                    <p className='font-bold'>Kehadiran</p>
                                    <p className='text-gray-400'>Pilih salah satu</p>
                                    <div className='flex flex-row'>
                                        <input type="checkbox" className='mr-1' />
                                        <p>Hadir</p>
                                        <input type="checkbox" className='mr-1 ml-2' />
                                        <p>Sakit</p>
                                        <input type="checkbox" className='mr-1 ml-2' />
                                        <p>Izin</p>
                                    </div>
                                    <button className='bg-blue-500 px-4 py-2 rounded text-white font-bold mt-3'>Submit</button>
                                </div>}
                            {activeTab === 'Materi' &&
                                <div className='overflow-y-auto h-64'>
                                    <div>
                                        <input type="checkbox" />
                                    </div>
                                    <button className='bg-gray-300 p-3 w-full text-start mb-2 rounded'>
                                        <p className='text-sm'>materipertemuan1.pdf</p>
                                    </button>
                                    <button className='bg-gray-300 p-3 w-full text-start mb-2 rounded'>
                                        <p className='text-sm'>materipertemuan1.pptx</p>
                                    </button>
                                    <button className='bg-gray-300 p-3 w-full text-start mb-2 rounded'>
                                        <p className='text-sm'>materipertemuan1.docs</p>
                                    </button>
                                    <button className='bg-gray-300 p-3 w-full text-start mb-2 rounded'>
                                        <p className='text-sm'>materipertemuan1.xlsx</p>
                                    </button>
                                </div>}
                            {activeTab === 'Tugas' &&
                                <div className='flex md:flex-row flex-col items-center md:h-64 min-h-full relative'>
                                    <div className='text-sm md:border-r-2 border-gray-300 flex flex-col w-3/5'>
                                        <div className='mb-2'>
                                            <p className='font-bold mb-1'>Deskripsi</p>
                                            <p className='text-gray-400 pr-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in risus lorem. Duis a est vitae turpis finibus pharetra a quis orci.</p>
                                        </div>
                                        <div className='mt-3'>
                                            <p className='font-bold mb-1'>Status</p>
                                            <div className='flex flex-row gap-4'>
                                                <p className='bg-green-200 text-green-600 px-2 rounded-full'>Active</p>
                                                <p className='bg-red-200 text-red-600 px-2 rounded-full'>Deadline : 28/12/2001 - 23:59</p>
                                            </div>
                                        </div>
                                        <div className='mt-3'>
                                            <p className='font-bold mb-1'>File</p>
                                            <button className='w-20 h-20 bg-slate-300 border-2 border-gray-300 rounded font-bold'>Pdf</button>
                                            <p className='text-xs w-20 text-center'>Tugas 1</p>
                                        </div>
                                    </div>
                                    <div className='w-2/5 flex flex-col justify-center items-center text-sm'>
                                        <p className='font-bold'>Kumpulkan</p>
                                        <p className='text-gray-400 text-center'>Pastikan anda mengirim file dengan benar</p>
                                        <button className='bg-blue-500 px-4 py-2 rounded text-white font-bold mt-3'>Submit</button>
                                    </div>
                                    <div className='hidden absolute w-full bg-white h-full'>
                                        <input type="file" />
                                    </div>
                                </div>}
                            {activeTab === 'Gmeet' &&
                                <div className='flex flex-col justify-center items-center gap-1 h-64 min-h-full text-xs md:text-sm'>
                                    <p className='font-bold'>Deskrpsi</p>
                                    <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    <button className='bg-blue-500 px-4 py-2 rounded text-white font-bold mt-3'>Join</button>
                                </div>}
                        </div>
                    </div>
                </div>
                {/* button pertemuan */}
                <section className="hidden md:block overflow-y-auto bg-white w-1/4 rounded py-4 px-2">
                    <div>
                        <p className='text-sm text-center font-bold mb-5'>Manajemen Proyek Prangkat Lunak</p>
                    </div>
                    <button className='w-full text-sm text-start p-2 mb-1 flex flex-row border rounded'>
                        <p className='p-3 bg-violet-400 w-10 rounded text-md font-bold'>P1</p>
                        <div className='ml-2'>
                            <p className='text-xs text-gray-500'>Pertemuan 1</p>
                            <p className='text-sm'>System Developmen Life Cycle</p>
                        </div>
                    </button>
                </section>
            </div>
        </div>
    )
}

export default Page