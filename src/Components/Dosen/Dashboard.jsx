import Header from "../Common/Header/Index"

const Dashboard = () => {
    return (
        <div className="w-full bg-gray-100">
            <Header/>
            <div className="w-full p-2">
                <div className="w-full flex justify-center gap-2">
                    <button className="bg-white py-4 text-sm font-bold w-full rounded">Informasi Tugas</button>
                    <button className="bg-white py-4 text-sm font-bold w-full rounded">Mahasiswa yang mengikuti</button>
                </div>
                <p className="py-2 text-sm">Statistik Mahasiswa</p>
                <div className=" py-3 bg-white rounded h-128 overflow-x-auto">
                    <table className="w-full text-xs bg-white">
                        <thead>
                            <tr className="">
                                <th className="p-2">No</th>
                                <th className="text-start">Nama</th>
                                <th className="text-start">Nim</th>
                                <th className="text-start">Kehadiran</th>
                                <th className="text-start">Tugas</th>
                                <th className="">Alat</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="text-xs border-b-2 border-b-gray-200 text-center">
                                <td className="py-4">1</td>
                                <td className="text-start">Jhone Doe</td>
                                <td className="text-start">A2.2000118</td>
                                <td className="text-start text-red-600">70%</td>
                                <td className="text-start text-green-600">90%</td>
                                <td className="">
                                    <button className="px-3 py-2  bg-blue-600 text-white rounded mr-3">Detail</button>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Dashboard