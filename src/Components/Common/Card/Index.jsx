import Link from "next/link"
import React from "react"

const Card = () => {

    return (
        <div className="md:w-100 w-full h-auto px-4 py-2">
            <div className="bg-white w-full h-auto rounded py-2 px-3 flex flex-row gap-5 mb-2">
                <div className="w-36 h-36 rounded flex justify-center items-center bg-black text-white">MPPL</div>
                <div className="w-full">
                    <div className="flex flex-col md:flex-row justify-between">
                        <p className="md:text-sm text-xs py-2 font-bold">Manajemen Proyek Prangkat Lunak</p>
                        <p className="md:text-sm text-xs py-2 font-bold">Senin | 10.00</p>
                    </div>
                    <p className="text-xs text-gray-500 mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <div className="">
                        <p className="text-xs mt-5 hidden md:block">Pertemuan :</p>
                        <div className="flex flex-wrap md:flex-row gap-1 mt-3 md:relative">
                            <p className="hidden md:block font-bold text-xs w-6 h-6 text-center rounded">1</p>
                            <p className="hidden md:block font-bold text-xs w-6 h-6 text-center rounded">3</p>
                            <p className="hidden md:block font-bold text-xs w-6 h-6 text-center rounded">4</p>
                            <p className="hidden md:block font-bold text-xs w-6 h-6 text-center rounded">5</p>
                            <p className="hidden md:block font-bold text-xs w-6 h-6 text-center rounded">6</p>
                            <p className="hidden md:block font-bold text-xs w-6 h-6 text-center rounded">7</p>
                            <p className="hidden md:block font-bold text-xs w-6 h-6 text-center rounded">8</p>
                            <p className="hidden md:block font-bold text-xs w-6 h-6 text-center rounded">9</p>
                            <p className="hidden md:block font-bold text-xs w-6 h-6 text-center rounded">10</p>
                            <p className="hidden md:block font-bold text-xs w-6 h-6 text-center rounded">11</p>
                            <p className="hidden md:block font-bold text-xs w-6 h-6 text-center rounded">12</p>
                            <p className="hidden md:block font-bold text-xs w-6 h-6 text-center rounded">13</p>
                            <p className="hidden md:block font-bold text-xs w-6 h-6 text-center rounded">14</p>
                            <p className="hidden md:block font-bold text-xs w-6 h-6 text-center rounded">15</p>
                            <p className="hidden md:block font-bold text-xs w-6 h-6 text-center rounded">16</p>
                            {/* Button Lihat MK */}
                            <Link href="/Mahasiswa/Course/View" className="bg-black px-3 py-2 text-xs text-white rounded md:absolute bottom-0 right-1">View</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card