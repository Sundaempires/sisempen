// components/Dropdown.js
import React, { useState } from 'react';
import Image from 'next/image';
import IconDown from "/public/icons/down.png"

const Dropdown = ({ handleSemesterChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSemester, setSelectedSemester] = useState(null);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const handleSemesterButtonClick = (semester) => {
    setSelectedSemester(semester);
    setIsOpen(false);
    handleSemesterChange(semester)
  };

  return (
    <div>
      <button
        onClick={handleButtonClick}
        className="bg-white flex flex-row justify-center items-center gap-2 rounded px-3 py-2 text-sm ring-1 ring-inset"
      >
        Filter
        <Image
          src={IconDown}
          width={15}
          height={15}
          alt="logo"
          style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
        />
      </button>

      {isOpen && (
        <div className="z-10 mt-1 origin-top-right ring-opacity-5 focus:outline-none absolute">
          <div className="bg-white border-2 rounded flex flex-col p-3">
            <p className="text-xs text-center mb-3">Semester</p>
            <div className="flex flex-row flex-wrap w-36 gap-3">
              {[1, 2, 3, 4, 5, 6, 7, 8, 'All'].map((semester) => (
                <button
                  key={semester}
                  onClick={() => handleSemesterButtonClick(semester)}
                  className={`p-2 border h-10 w-10 rounded ${
                    selectedSemester === semester ? 'bg-black text-white' : ''
                  }`}
                >
                  {semester}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
