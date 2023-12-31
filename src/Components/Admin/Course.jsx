import Header from "../Common/Header/Index"
import iconPrev from "/public/icons/prev.png"
import iconNext from "/public/icons/next.png"
import Image from "next/image";

const Course = ({ toggleSidebar }) => {


    return (
        <div className="w-full bg-gray-100 p-3">
            <Header toggleSidebar={toggleSidebar} titleMenu="Course" />
            <div className="flex flex-row justify-between py-3 text-xs">
                <div className="flex flex-row gap-2">
                    <button className="bg-white p-2 rounded">Tambah +</button>
                    <button className="bg-white p-2 rounded">Informatika</button>
                    <button className="bg-white p-2 rounded">Sistem Informasi</button>
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
            <div className="">
                <table className="w-full text-sm bg-white">
                    <thead>
                        <tr className="text-xs bg-gray-200">
                            <th className="pl-5 py-5 text-start">Kode</th>
                            <th className="text-start">Mata Kuliah</th>
                            <th className="text-start">SKS</th>
                            <th className="text-start">Semester</th>
                            <th className="text-start">Dosen</th>
                            <th className="text-center">alat</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="text-xs border-b-2 border-b-gray-200 ">
                            <td className="pl-5 py-5">If321193</td>
                            <td className="">Manajemen Proyek Prangkat Lunak</td>
                            <td className="text-start">4</td>
                            <td className="text-start">4</td>
                            <td className="text-start">Dosen 1</td>
                            <td className="text-center">
                                <button className="bg-blue-200 rounded p-2">Edit</button>
                                <button className="bg-red-200 rounded p-2 ml-2">Delet</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Course