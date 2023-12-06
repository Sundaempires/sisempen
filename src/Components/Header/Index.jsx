import Image from "next/image"
import InputSearch from "../Header/InputSearch"
import profile from "/public/icons/profile.png"
import sliders from "/public/icons/sliders.png"



const Header = ({ toggleSidebar }) => {

    return (
        <div className="w-full px-4 py-2 flex flex-row items-center justify-between bg-white">
            <InputSearch />
            {/* <div className="hidden xl:flex xl:flex-row  items-center px-3 py-1 gap-2 rounded border-2 bg-gray-100 border-gray-200">
                <div className="bg-gray-300 w-10 h-10 rounded-full">
                    <Image src={profile} width={50} height={50} className="object-cover" alt="P" />
                </div>
                <div className="flex flex-col">
                    <p className="text-xs font-bold">Hamdun Muzadi</p>
                    <p className="text-xs overflow-hidden">a2.2000118@mhs.stmik-sumedang.ac.id</p>
                </div>
            </div> */}
            <button className="xl:hidden block" onClick={toggleSidebar}>
                <Image src={sliders} width={20} height={50} className="" alt="" />
            </button>
        </div>
    )
}

export default Header