import Image from "next/image"
import InputSearch from "./InputSearch"
import sliders from "/public/icons/sliders.png"



const Header = ({ toggleSidebar }) => {

    return (
        <div className="w-full px-4 py-3 flex flex-row items-center justify-between bg-white">
            <InputSearch />
            <button className="xl:hidden block" onClick={toggleSidebar}>
                <Image src={sliders} width={20} height={50} className="" alt="" />
            </button>
        </div>
    )
}

export default Header