import { useEffect, useState } from "react"
import Header from "../Common/Header/Index"
import Image from "next/image"
import iconPrev from "/public/icons/prev.png"
import iconNext from "/public/icons/next.png"
import axios from 'axios'

const Users = ({ toggleSidebar }) => {
    const [page, setPage] = useState(1);
    const [users, setUsers] = useState([]);
    const [lastPage, setLastPage] = useState(1);
    const [selectedRole, setSelectedRole] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let url = `/api/users?page=${page}`;
                if (selectedRole && selectedRole !== 'All') {
                    url += `&role=${selectedRole}`;
                }
                const response = await axios.get(url);
                const data = response.data;
                setUsers(data);
                setLastPage(data.totalPages);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [page, selectedRole]);

    const handleNextPage = () => {
        if (page >= lastPage) {
            setPage(lastPage)
        } else {
            setPage((prevState) => prevState + 1)
        }
    }

    const handlePrevPage = () => {
        if (page <= 1) {
            return
        } else {
            setPage((prevState) => {
                const newPage = prevState - 1;
                return newPage
            })
        }
    }

    return (
        <div className="w-full bg-gray-100">
            <Header toggleSidebar={toggleSidebar} />
            <div className="flex flex-row gap-2 p-3 justify-center">
                <button className="bg-white px-4 py-3 rounded w-1/3">Tambah +</button>
                <button className="bg-white px-4 py-3 rounded w-1/3" onClick={(e) => setSelectedRole(null)}>Semua</button>
                <button className="bg-white px-4 py-3 rounded w-1/3" onClick={(e) => setSelectedRole("mahasiswa")}>Mahasiswa</button>
                <button className="bg-white px-4 py-3 rounded w-1/3" onClick={(e) => setSelectedRole("dosen")}>Dosen</button>
            </div>
            <div className="flex justify-end gap-2 px-3 pb-3">
                <button
                    className="cursor-pointer bg-white p-2 rounded"
                onClick={handlePrevPage}
                >
                    <Image src={iconPrev} width={15} height={15} alt="logo" />
                </button>
                <p className="bg-white font-bold w-20 flex justify-center items-center p-2 rounded text-sm">
                    {page} / {lastPage}
                </p>
                <button
                    className="cursor-pointer bg-white p-2 rounded"
                onClick={handleNextPage}
                >
                    <Image src={iconNext} width={15} height={15} alt="logo" />
                </button>
            </div>
            <div className="bg-gray-100 rounded h-128 md:px-2 py-0">
                <table className="w-full text-sm bg-white">
                    <thead>
                        <tr className="text-xs bg-gray-200">
                            <th className="pl-5 py-5 text-start">Kode</th>
                            <th className="text-start">Nama</th>
                            <th className="text-center">Email</th>
                            <th className="text-center">Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.data?.map((course, index) => {
                            return (
                                <tr
                                    key={index}
                                    className="text-xs border-b-2 border-b-gray-200 "
                                >
                                    <td className="pl-5 py-5">{course.nim}</td>
                                    <td className="">{course.full_name}</td>
                                    <td className="text-center">{course.email}</td>
                                    <td className="text-center">{course.role}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Users