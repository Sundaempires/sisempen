import Header from "../Common/Header/Index"

const Users = ({ toggleSidebar }) => {
    return (
        <div className="w-full bg-gray-100">
            <Header toggleSidebar={toggleSidebar} />
            <div className="flex flex-row gap-2 p-3 justify-center">
                <button className="bg-white px-4 py-3 rounded w-1/3">Tambah +</button>
                <button className="bg-white px-4 py-3 rounded w-1/3">Mahasiswa</button>
                <button className="bg-white px-4 py-3 rounded w-1/3">Dosen</button>
            </div>
        </div>
    )
}

export default Users