import Header from "../Header/Index"

const InfoMain = ({toggleSidebar}) => {
    return (
        <div className="w-full bg-gray-100">
            <Header toggleSidebar={toggleSidebar} />
            <div className="px-5 py-3">
                <p className="mb-4">Riwayat Transalsi</p>
                <div className="bg-white text-sm flex flex-row justify-between px-5 py-6 rounded">
                    <p>Registrasi</p>
                    <p className="text-orange-500">Proses</p>
                    <p>20-12-2023</p>
                    <button>Detail</button>
                </div>
                <div className="bg-white text-sm flex flex-row justify-between px-5 py-6 rounded mt-2">
                    <p>Registrasi</p>
                    <p className="text-green-500">Sukses</p>
                    <p>20-12-2023</p>
                    <button>Detail</button>
                </div>
                <p className="mb-4 mt-4">Notifikasi</p>
                <div className="bg-green-300 text-sm flex flex-row justify-between px-5 py-6 rounded">
                    <p>Anda Sudah Disetujui Oleh Admin</p>
                </div>
            </div>
        </div>
    )
}

export default InfoMain
