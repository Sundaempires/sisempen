import React, { useState } from 'react';

const Modal = ({ isOpen, toggleUpload }) => {
    const [openFile, setOpenFile] = useState(false);

    const toggleFile = () => {
        setOpenFile(!openFile)
        console.log("open file diclick")
    }
    return (
        <div className={`${isOpen ? 'block' : 'hidden'} absolute z-20  h-screen w-full text-sm `}>
            <div className="bg-white h-screen p-3 md:px-8 overflow-y-auto">
                <h1 className="text-center pb-5 font-bold text-lg">Upload (+)</h1>
                {/* absensi */}
                <div className="flex flex-col w-full border border-gray-300 rounded">
                    <p className="font-bold mb-2 p-2">Absensi</p>
                    <div className="flex flex-row flex-wrap gap-5 justify-start items-center w-fit py-3 px-2">
                        <p className="mr-2">Status :</p>
                        <select name="" id="" className="border border-gray-300 px-2 py-1 rounded">
                            <option value="avtive">Active</option>
                            <option value="notAvtive">Not Actived</option>
                        </select>
                        <div className="flex flex-row items-center gap-3">
                            <p >Date :</p>
                            <input type="date" className="border border-gray-300 px-2 py-1 rounded" />
                        </div>
                        <div className="flex flex-row items-center gap-3">
                            <p className="">Time :</p>
                            <input type="time" className="border border-gray-300 px-2 py-1 rounded" />
                        </div>
                    </div>
                </div>
                {/* Materi */}
                <div className="flex flex-col w-full border border-gray-300 rounded mt-3">
                    <p className="font-bold p-2">Materi</p>
                    <div className="w-fit py-3 px-2">
                        <div className="flex flex-row flex-wrap gap-5 justify-start items-center pb-2">
                            <p className="mr-2">Status :</p>
                            <select name="" id="" className="border border-gray-300 px-2 py-1 rounded">
                                <option value="avtive">Active</option>
                                <option value="notAvtive">Not Actived</option>
                            </select>
                            <div className="flex flex-row items-center gap-3">
                                <p className="">Judul :</p>
                                <input type="text" className="border border-gray-300 rounded px-2 py-1" />
                            </div>
                            <div className="flex flex-row items-center gap-3">
                                <p className="">File :</p>
                                <button onClick={toggleFile} className="border border-gray-300 rounded px-2 py-1">Upload File</button>
                            </div>
                        </div>
                        {/* Popups untuk upload file */}
                        <div className={`${openFile ? 'block' : 'hidden'} fixed flex justify-center py-28 pl-11 top-36 z-21 h-128 w-5/6 `}>
                            <div className='w-96 h-36 p-3 mt-1 bg-white border-2 rounded border-gray-300'>
                                <p className="text-center mb-3 font-bold">Upload File</p>
                                <input type="file" className=' w-full p-2 border border-gray-300 rounded' />
                                <div className='flex justify-center items-center mt-2'>
                                    <button onClick={toggleFile} className='mr-3 bg-red-600 py-2 px-3 rounded text-white'>Close</button>
                                    <button className='bg-blue-600 py-2 px-3 rounded text-white'>Submit</button>
                                </div>
                            </div>
                        </div>

                        <div className="">
                            <p className='mb-2'>file :</p>
                            <div className='flex flex-row gap-3 border border-gray-300 rounded p-2'>
                                <div className='text-center w-6 border-r border-gray-300'>1</div>
                                <p>pertemuansatu.pptx</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Tugas */}
                <div className="flex flex-col w-full border border-gray-300 rounded mt-3">
                    <p className="font-bold p-2">Tugas</p>
                    <div className="flex flex-row justify-start flex-wrap gap-2 items-center py-3 px-2">
                        <p className="mr-2">Status :</p>
                        <select name="" id="" className="border border-gray-300 px-2 py-1 rounded">
                            <option value="avtive">Active</option>
                            <option value="notAvtive">Not Actived</option>
                        </select>
                        <div className="flex flex-row items-center gap-3">
                            <p className="">Deskripsi :</p>
                            <input type="text" className="border border-gray-300 rounded px-2 py-1" />
                        </div>
                        <div className="flex flex-row items-center gap-3">
                            <p className="">Date :</p>
                            <input type="date" className="border border-gray-300 rounded px-2 py-1" />
                        </div>
                        <div className="flex flex-row items-center gap-3">
                            <p className="">Time :</p>
                            <input type="time" className="border border-gray-300 rounded px-2 py-1" />
                        </div>
                        <div className='flex flex-row items-center mt-2 md:mt-0 gap-3 w-2/3'>
                            <p className="">File :</p>
                            <input type="file" className="w-full border border-gray-300 rounded px-2 py-1" />
                        </div>
                    </div>
                </div>
                {/* Video */}
                <div className="flex flex-col w-full border border-gray-300 rounded mt-3">
                    <p className="font-bold p-2">Video</p>
                    <div className="flex flex-row flex-wrap gap-2 justify-start items-center w-fit py-3 px-2">
                        <p className="mr-2">Status :</p>
                        <select name="" id="" className="border border-gray-300 px-2 py-1 rounded">
                            <option value="avtive">Active</option>
                            <option value="notAvtive">Not Actived</option>
                        </select>
                        <div className="flex flex-row items-center gap-3">
                            <p className="">Judul :</p>
                            <input type="text" className="border border-gray-300 rounded px-2 py-1" />
                        </div>
                        <div className="flex flex-row items-center gap-3">
                            <p className="">Link :</p>
                            <input type="link" className="border border-gray-300 rounded px-2 py-1" />
                        </div>
                    </div>
                </div>
                {/* Gmeet */}
                <div className="flex flex-col w-full border border-gray-300 rounded mt-3">
                    <p className="font-bold p-2">Google Meet</p>
                    <div className="flex flex-row flex-wrap gap-2 justify-start items-center  w-fit py-3 px-2 ">
                        <p className="mr-2">Status :</p>
                        <select name="" id="" className="border border-gray-300 px-2 py-1 rounded">
                            <option value="avtive">Active</option>
                            <option value="notAvtive">Not Actived</option>
                        </select>
                        <div className="flex flex-row items-center gap-3">
                            <p className="">Deskripsi :</p>
                            <input type="text" className="border border-gray-300 rounded px-2 py-1" />
                        </div>
                        <div className="flex flex-row items-center gap-3">
                            <p className="">Link :</p>
                            <input type="link" className="border border-gray-300 rounded px-2 py-1" />
                        </div>
                    </div>
                </div>
                {/* button upload, cancel */}
                <div className="flex flex-row justify-center items-center w-full py-6 gap-3 rounded">
                    <button onClick={toggleUpload} className="bg-red-600 text-white px-3 py-2 rounded">Cancel</button>
                    <button className="bg-blue-600 text-white px-3 py-2 rounded">Upload</button>
                </div>
            </div>
        </div>
    )
}

export default Modal