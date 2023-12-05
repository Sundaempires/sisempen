import Header from "../Header/Index"

const RegisMain = ({ toggleSidebar }) => {
    return (
        <div className="w-full bg-gray-100">
            <Header toggleSidebar={toggleSidebar} />
            <div className="flex flex-row gap-5">
                <div className="flex flex-col w-fit">
                    <div className="p-2">
                        <p className="text-sm mb-3">Mata Kuliah yang akan dikontrak</p>
                        <div className="bg-white w-96 flex flex-row justify-between gap-5 p-5 mb-2 rounded">
                            <p className="text-sm">Manajemen Proyek Prangkat Lunak</p>
                            <p className="text-sm border-l px-3">3</p>
                        </div>
                        <div className="bg-white w-96 flex flex-row justify-between gap-5 p-5 mb-2 rounded">
                            <p className="text-sm">Manajemen Proyek Prangkat Lunak</p>
                            <p className="text-sm border-l px-3">3</p>
                        </div>
                        <div className="bg-white w-96 flex flex-row justify-between gap-5 p-5 mb-2 rounded">
                            <p className="text-sm">Proyek Prangkat Lunak</p>
                            <p className="text-sm border-l px-3">3</p>
                        </div>
                    </div>
                    <div className="p-2">
                        <p className="text-sm mb-3">Pembayaran</p>
                        <div className="bg-white w-96 flex flex-row justify-between gap-5 p-5 mb-2 rounded">
                            <p className="text-sm">Total SKS</p>
                            <p className="text-sm px-3 border-l">9</p>
                        </div>
                        <div className="bg-white w-96 flex flex-row justify-between gap-5 p-5 mb-2 rounded">
                            <p className="text-sm">Harga SKS</p>
                            <p className="text-sm border-l px-3">Rp 90.000</p>
                        </div>
                        <div className="bg-white w-96 flex flex-row justify-between gap-5 p-5 mb-2 rounded">
                            <p className="text-sm">Total</p>
                            <p className="text-sm border-l px-3">Rp 810.000</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="p-2">
                        <p className="text-sm mb-3">Registrasi</p>
                        <div className="bg-white w-96 flex flex-col p-3 mb-2 rounded">
                            <p className="text-xs">Nama</p>
                            <input type="text" className="px-3 py-2 border rounded" />
                        </div>
                        <div className="bg-white w-96 flex flex-col p-3 mb-2 rounded">
                            <p className="text-xs">Nim</p>
                            <input type="text" className="px-3 py-2 border rounded" />
                        </div>
                        <div className="bg-white w-96 flex flex-row justify-between p-3 mb-2 rounded">
                            <div className="">
                                <p className="text-xs mb-2">Total Bayar</p>
                                <p className="">Rp. 810.000</p>
                            </div>
                            <div className="">
                                <p className="text-xs text-center mb-2">SKS</p>
                                <p className="text-center border-l px-5">9</p>
                            </div>
                        </div>
                        <div className="bg-white w-96 flex flex-col justify-between p-3 mb-2 rounded">
                            <div className="">
                                <p className="text-xs mb-2">Upload Bukti Pembayaran</p>
                                <input type="file" className="text-xs" />
                            </div>
                        </div>
                        <button className="w-96 bg-blue-600 text-white py-3 rounded">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisMain