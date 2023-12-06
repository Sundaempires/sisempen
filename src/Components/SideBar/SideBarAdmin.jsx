import Link from "next/link"
import Image from "next/image"
import apps from "/public/icons/apps.png"
import register from "/public/icons/register.png"
import close from "/public/icons/close.png"
import logo from "/public/icons/logo.png"
import exit from "/public/icons/exit.png"

const SideBarAdmin = ({isOpen, toggleSidebar}) => {
    return (    
        <div className={`z-20 ${isOpen ? 'block' : 'hidden'} bg-white fixed xl:static xl:block flex-col justify-center w-full md:w-80 py-2 px-5 h-screen`}>
            <div className="flex flex-row items-center gap-3 text-sm p-3 mb-10 sm:relative">
                <Image src={logo} width={25} height={15} alt="logo"/>
                <p className="font-bold text-lg">Sisempen</p>
                {/* button close sidebar */}
                <button className="xl:hidden block absolute right-4" onClick={toggleSidebar}>
                    <Image src={close} width={20} height={50} className="" alt=""/>
                </button>
            </div>
            
            <ul className="mt-8 text-sm text-gray-600 text-color-secondary">
                <p className="mb-2 text-gray-400">Dashboard</p>
                <Link href="">
                    <li className="flex gap-4 items-center py-5 p-4 rounded mb-2 ">
                        <Image src={apps} width={20} height={15} alt="Dashboard"/>
                        Ringkasan
                    </li>
                </Link>
                <p className="mb-2 text-gray-400">Upload</p>
                <Link href="">
                    <li className="flex gap-4 items-center py-5 p-4 rounded mb-2 ">
                        <Image src={register} width={20} height={15} alt="Register"/>
                        Konten
                    </li>
                </Link>
                <Link href="">
                    <li className="flex gap-4 items-center py-5 p-4 rounded mb-2 ">
                        <Image src={register} width={20} height={15} alt="Register"/>
                        Nilai
                    </li>
                </Link>
                <p className="mb-2 text-gray-400">Management</p>
                <Link href="">
                    <li className="flex gap-4 items-center py-5 p-4 rounded mb-2">
                        <Image src={register} width={20} height={15} alt="Course"/>
                        Dosen
                    </li>
                </Link>
                <Link href="">
                    <li className="flex gap-4 items-center py-5 p-4 rounded mb-2">
                        <Image src={register} width={20} height={15} alt="Course"/>
                        Mahasiswa
                    </li>
                </Link>
                <Link href="">
                    <li className="flex gap-4 items-center py-5 p-4 rounded mb-2 ">
                        <Image src={register} width={20} height={15} alt="Register"/>
                        Kursus
                    </li>
                </Link>
                <Link href="">
                    <li className="flex gap-4 items-center py-5 p-4 rounded mb-2">
                        <Image src={register} width={20} height={15} alt="Course"/>
                        Pembayaran
                    </li>
                </Link>
                <Link href="">
                    <li className="flex gap-4 items-center py-5 p-4 rounded mt-16 mb-2 bg-red-200 font-bold text-black">
                        <Image src={exit} width={20} height={15} alt="Course"/>
                        Keluar
                    </li>
                </Link>
            </ul>

        </div>
    )
}

export default SideBarAdmin