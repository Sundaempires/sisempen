import React from 'react';
import Image from "next/image"
import iconPrev from "/public/icons/prev.png"
import iconNext from "/public/icons/next.png"
import Dropdown from "./Dropdowns"

const Pagination = ({ page, lastPage, setPage, handleSemesterChange }) => {

  const handleNextPage = () => {
    if (page >= lastPage) {
      setPage(lastPage)
    } else {
      setPage((prevState) => prevState + 1)
    }
  }

  const handlePrevPage = () => {
    if (page <= 1) {
      return
    } else {
      setPage((prevState) => {
        const newPage = prevState - 1;
        return newPage
      })
    }
  }

  return (
    <div className='flex flex-row justify-between p-2'>
      <Dropdown handleSemesterChange={handleSemesterChange}/>
      <div className="flex justify-center gap-2">
        <button
          className="cursor-pointer bg-white p-2 rounded"
          onClick={handlePrevPage}
        >
          <Image src={iconPrev} width={15} height={15} alt="logo" />
        </button>
        <p className="bg-white font-bold w-20 flex justify-center items-center p-2 rounded text-sm">
          {page} / {lastPage}
        </p>
        <button
          className="cursor-pointer bg-white p-2 rounded"
          onClick={handleNextPage}
        >
          <Image src={iconNext} width={15} height={15} alt="logo" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
