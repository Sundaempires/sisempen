const LogOutModal = () => {
    return (
        <div className="fixed w-full h-screen">
            <div className="bg-white w-96 h-96 p-3 rounded text-xs">
                <p>Apakah anda yakin ingin keluar</p>
                <div>
                    <button className="bg-red-500 px-2 py-3 rounded">No</button>
                    <button className="bg-blue-500 px-2 py-3 rounded">Ya</button>
                </div>
            </div>
        </div>
    )
}

export default LogOutModal