import Link from "next/link"
import { RxDashboard, RxBell } from "react-icons/rx";
import { TbUsers, TbReportMoney } from "react-icons/tb";
import { PiStudent } from "react-icons/pi";
import { IoClose } from "react-icons/io5";
import Image from "next/image"
import register from "/public/icons/register.png"
import logo from "/public/icons/logo.png"
import exit from "/public/icons/exit.png"
import { useRouter } from "next/navigation";
import { removeCookie } from "@/Utilities/cookies";

const SideBarAdmin = ({isOpen, toggleSidebar}) => {
    const router = useRouter();

    const handleLogout = () => {
        removeCookie('user');
        router.push('/');
    }

    return (    
        <div className={`z-20 ${isOpen ? 'block' : 'hidden'} bg-white fixed xl:static xl:block flex-col justify-center w-full md:w-80 py-2 px-5 h-screen`}>
            <div className="flex flex-row items-center gap-3 text-sm p-3 mb-10 sm:relative">
                <Image src={logo} width={25} height={15} alt="logo"/>
                <p className="font-bold text-lg">Sisempen</p>
                {/* button close sidebar */}
                <button className="xl:hidden block absolute right-4" onClick={toggleSidebar}>
                    <IoClose className="text-2xl"/>
                </button>
            </div>
            
            <ul className="mt-8 text-sm text-gray-600 text-color-secondary">
                {/* <p className="mb-2 pl-4 text-gray-400">Dashboard</p> */}
                <Link href="/admin">
                    <li className="flex gap-4 items-center py-5 p-4 rounded mb-2 ">
                        <RxDashboard className="text-2xl"/>
                        Dashboard
                    </li>
                </Link>
                {/* <p className="mb-2 pl-4 text-gray-400">Upload</p> */}
                <Link href="/admin/users">
                    <li className="flex gap-4 items-center py-5 p-4 rounded mb-2 ">
                        <TbUsers className="text-2xl"/>
                        Users
                    </li>
                </Link>
                <Link href="/admin/course">
                    <li className="flex gap-4 items-center py-5 p-4 rounded mb-2 ">
                        <PiStudent className="text-2xl"/>
                        Course
                    </li>
                </Link>
                {/* <p className="mb-2 pl-4 text-gray-400">Management</p> */}
                <Link href="">
                    <li className="flex gap-4 items-center py-5 p-4 rounded mb-2">
                        <Image src={register} width={20} height={15} alt="Course"/>
                        Scores
                    </li>
                </Link>
                <Link href="">
                    <li className="flex gap-4 items-center py-5 p-4 rounded mb-2">
                        <RxBell className="text-2xl"/>
                        Announcement
                    </li>
                </Link>
                <Link href="">
                    <li className="flex gap-4 items-center py-5 p-4 rounded mb-2">
                        <TbReportMoney className="text-2xl"/>
                        Finance
                    </li>
                </Link>
                <li className="flex gap-4 items-center py-5 p-4 rounded mt-16 mb-2 bg-red-200 font-bold text-black cursor-pointer" onClick={handleLogout}>
                    <Image src={exit} width={20} height={15} alt="Course"/>
                    Keluar
                </li>
            </ul>

        </div>
    )
}

export default SideBarAdmin