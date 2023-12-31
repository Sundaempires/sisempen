import { LuTrash2 } from "react-icons/lu";
import Header from "../Common/Header/Index"

const Registration = ({ toggleSidebar,titleMenu }) => {
    return (
        <div className="w-full min-h-screen bg-gray-100">
            <Header toggleSidebar={toggleSidebar} titleMenu="Register"/>
            <div className=" w-full flex justify-center items-center py-2 md:py-8">
                <div className="bg-white md:p-5 flex flex-col rounded border-2 border-gray-200">
                    <div className="flex md:flex-row flex-col gap-5 w-fit">
                        <div className="flex flex-col w-full md:w-fit">
                            <div className="p-2">
                                <p className="text-sm mb-3">Mata Kuliah yang akan dikontrak</p>
                                <div className="bg-white md:w-96 flex flex-row justify-between gap-5 p-5 mb-2 border rounded">
                                    <p className="text-sm">Manajemen Proyek Prangkat Lunak</p>
                                    <div className="flex gap-2">
                                        <p className="text-sm border-l px-3">3</p>
                                        <LuTrash2 className="text-red-500 cursor-pointer" />
                                    </div>
                                </div>
                                <div className="bg-white md:w-96 flex flex-row justify-between gap-5 p-5 mb-2 border rounded">
                                    <p className="text-sm">Manajemen Proyek Prangkat Lunak</p>
                                    <div className="flex items-center gap-2">
                                        <p className="text-sm border-l px-3">3</p>
                                        <LuTrash2 className="text-red-500 cursor-pointer" />
                                    </div>
                                </div>
                                <div className="bg-white md:w-96 flex flex-row justify-between gap-5 p-5 mb-2 border rounded">
                                    <p className="text-sm">Proyek Prangkat Lunak</p>
                                    <div className="flex gap-2">
                                        <p className="text-sm border-l px-3">3</p>
                                        <LuTrash2 className="text-red-500 cursor-pointer" />
                                    </div>
                                </div>
                            </div>
                            <div className="p-2">
                                <p className="text-sm mb-3">Pembayaran</p>
                                <div className="bg-white md:w-96 flex flex-row justify-between gap-5 p-5 mb-2 border rounded">
                                    <p className="text-sm">Total SKS</p>
                                    <p className="text-sm px-3 border-l">9</p>
                                </div>
                                <div className="bg-white md:w-96 flex flex-row justify-between gap-5 p-5 mb-2 border rounded">
                                    <p className="text-sm">Harga SKS</p>
                                    <p className="text-sm border-l px-3">Rp 90.000</p>
                                </div>
                                <div className="bg-white md:w-96 flex flex-row justify-between gap-5 p-5 mb-2 border rounded">
                                    <p className="text-sm">Total</p>
                                    <p className="text-sm border-l px-3">Rp 810.000</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="p-2">
                                <p className="text-sm mb-3">Registrasi</p>
                                <div className="bg-white md:w-96 flex flex-col p-3 mb-2 border rounded">
                                    <p className="text-xs">Nama</p>
                                    <input type="text" className="text-sm px-3 py-2 border rounded" />
                                </div>
                                <div className="bg-white md:w-96 flex flex-col p-3 mb-2 border rounded">
                                    <p className="text-xs">Nim</p>
                                    <input type="text" className="text-sm px-3 py-2 border rounded" />
                                </div>
                                <div className="bg-white md:w-96 flex flex-col p-3 mb-2 border border rounded">
                                    <p className="text-xs">No Handpone</p>
                                    <input type="number" className="text-sm px-3 py-2 border rounded" />
                                </div>
                                <div className="bg-white md:w-96 flex flex-row justify-between p-3 mb-2 border rounded">
                                    <div className="">
                                        <p className="text-xs mb-2">Total Bayar</p>
                                        <p className="">Rp. 810.000</p>
                                    </div>
                                    <div className="">
                                        <p className="text-xs text-center mb-2">SKS</p>
                                        <p className="text-center border-l px-5">9</p>
                                    </div>
                                </div>
                                <div className="bg-white md:w-96 flex flex-col justify-between p-3 mb-2 border rounded">
                                    <div className="flex flex-col">
                                        <p className="text-xs">Upload Bukti Pembayaran</p>
                                        <i className="text-xs mb-3 text-red-500">Scan kwitansi bank BNI. Jelas dan Mudah dibaca</i>
                                        <input type="file" className="text-xs" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="w-full bg-blue-600 text-white py-3 rounded">Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Registration