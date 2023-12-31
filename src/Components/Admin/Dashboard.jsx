import Header from "../Common/Header/Index"
import { TbUsers } from "react-icons/tb";

const Dashboard = ({ toggleSidebar }) => {
    return (
        <div className="w-full bg-gray-100">
            <Header toggleSidebar={toggleSidebar} />
            <div className="w-full p-2">
                <div className='flex flex-row flex-wrap justify-around py-3'>
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
            <div className="w-full px-5">
                <p className="text-sm mb-3">Perlu Tindakan</p>
                <div className="bg-white w-full flex flex-fow justify-between items-center px-3 py-4 border rounded text-xs mb-2">
                    <p>A2.2000118</p>
                    <p>Hamdun Muzadi</p>
                    <p>7</p>
                    <p>9 sks</p>
                    <p>Rp. 810.000</p>
                    <button className="bg-green-300 rounded p-2">Acc</button>
                </div>
                <div className="bg-white w-full flex flex-fow justify-between items-center px-3 py-4 border rounded text-xs mb-2">
                    <p>A2.2000118</p>
                    <p>Hamdun Muzadi</p>
                    <p>7</p>
                    <p>9 sks</p>
                    <p>Rp. 810.000</p>
                    <button className="bg-green-300 rounded p-2">Acc</button>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;