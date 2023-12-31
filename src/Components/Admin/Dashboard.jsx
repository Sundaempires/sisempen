import Header from "../Common/Header/Index"
import { TbUsers } from "react-icons/tb";
import iconPrev from "/public/icons/prev.png"
import iconNext from "/public/icons/next.png"
import Image from "next/image";

const Dashboard = ({ toggleSidebar }) => {

    return (
        <div className="w-full bg-gray-100 p-3">
            <Header toggleSidebar={toggleSidebar} titleMenu="Dashboard"/>
            <div className="w-full py-3">
                <div className='flex flex-row flex-wrap justify-between'>
                    <div className="bg-white w-72 border border-gray-300 p-3 rounded">
                        <div className="flex flex-row items-center p-1 gap-2">
                            <TbUsers className="text-sm" />
                            <p className="text-xs">Perlu Tindakan</p>
                        </div>
                        <div className="flex flex-row items-center px-1 gap-2">
                            <p className="text-lg font-bold">25</p>
                            <p className="text-xs"></p>
                        </div>
                    </div>
                    <div className="bg-white w-72 border border-gray-300 p-3 rounded">
                        <div className="flex flex-row items-center p-1 gap-2">
                            <TbUsers className="text-sm" />
                            <p className="text-xs">Jumlah Mahasiswa</p>
                        </div>
                        <div className="flex flex-row items-center px-1 gap-2">
                            <p className="text-lg font-bold">50</p>
                            <p className="text-xs"></p>
                        </div>
                    </div>
                    <div className="bg-white w-72 border border-gray-300 p-3 rounded">
                        <div className="flex flex-row items-center p-1 gap-2">
                            <TbUsers className="text-sm" />
                            <p className="text-xs">Informatika</p>
                        </div>
                        <div className="flex flex-row items-center px-1 gap-2">
                            <p className="text-lg font-bold">30</p>
                            <p className="text-xs"></p>
                        </div>
                    </div>
                    <div className="bg-white w-72 border border-gray-300 p-3 rounded">
                        <div className="flex flex-row items-center p-1 gap-2">
                            <TbUsers className="text-sm" />
                            <p className="text-xs">Sistem Informasi</p>
                        </div>
                        <div className="flex flex-row items-center px-1 gap-2">
                            <p className="text-lg font-bold">20</p>
                            <p className="text-xs"></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-100 rounded h-128 py-0">
                <div className="flex flex-row justify-between pb-3 text-xs">
                    <div className="flex flex-row gap-2">
                        <button className="cursor-pointer bg-white py-2 px-3 rounded">Informatika</button>
                        <button className="cursor-pointer bg-white py-2 px-3 rounded">Sistem informasi</button>
                    </div>
                    <div className="flex flex-row gap-2">
                        <button
                            className="cursor-pointer bg-white p-2 rounded"
                            // onClick={handlePrevPage}
                        >
                            <Image src={iconPrev} width={15} height={15} alt="logo" />
                        </button>
                        <p className="bg-white font-bold w-20 flex justify-center items-center p-2 rounded text-sm">
                            {/* {page} / {lastPage} */}
                            1/1
                        </p>
                        <button
                            className="cursor-pointer bg-white p-2 rounded"
                            // onClick={handleNextPage}
                        >
                            <Image src={iconNext} width={15} height={15} alt="logo" />
                        </button>
                    </div>
                </div>
                <table className="w-full text-sm bg-white">
                    <thead>
                        <tr className="text-xs bg-gray-200">
                            <th className="pl-5 py-5 text-start">No</th>
                            <th className="text-start">Nama</th>
                            <th className="text-start">Nim</th>
                            <th className="text-start">SKS</th>
                            <th className="text-start">MK</th>
                            <th className="text-start">Rp</th>
                            <th className="text-center">alat</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="text-xs border-b-2 border-b-gray-200 ">
                            <td className="pl-5 py-5">1</td>
                            <td className="">User 1</td>
                            <td className="text-start">A2.2000118</td>
                            <td className="text-start">9</td>
                            <td className="text-start">3</td>
                            <td className="text-start">810.000</td>
                            <td className="text-center">
                                <button className="bg-green-200 rounded p-2">Acc</button>
                                <button className="bg-blue-200 rounded p-2 ml-2">Detail</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Dashboard;