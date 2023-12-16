import Image from "next/image"
import Search from "/public/icons/search.png"

const InputSearch = () => {
    return (
        <div className="relative">
            <input
                type="search"
                placeholder="Cari Mata Kuliah"
                className="text-xs w-60 md:w-96 border-2 pl-10 py-3 px-4 rounded"
            />
            <button className="absolute top-3 start-3">
                <Image src={Search} width={17} height={20} alt="" />
            </button>
        </div>
    )
}

export default InputSearch