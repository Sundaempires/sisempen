import React from 'react';

const Modal = ({isModalInfo, toggleModalInfo}) => {

    return (
        <div className={`${isModalInfo ? 'block' : 'hidden'} absolute z-20 top-20 right-2 h-128 w-5/6 pl-5 text-sm transition-all `}>
            <div className="bg-white ml-2.5 p-3 h-130 overflow-y-auto">
                <h1 className="text-center pb-5 font-bold text-lg">Upload (i)</h1>
                <div className='flex flex-col border border-gray-300 rounded p-3 gap-3'>
                    <p className="font-bold">Upload File Excel (xlsx)</p>
                    <div className='flex flex-row gap-3 justify-between items-center'>
                        <div className='flex flex-row gap-3 border border-gray-300 rounded px-2 py-1'>
                            <p>Upload File :</p>
                            <input type="file" />
                        </div>
                        <div className='border border-gary-300 rounded px-2 py-1.5'>
                            <p>Filenilaimahasiswa.xlsx</p>
                        </div>
                    </div>
                    <i className='text-red-600'>Upload informasi mahasiswa yang tidak lulus (tugas yang belum dikerjakan)*</i>
                </div>
                <div className='w-full min-h-min flex-col justify-center border border-gray-300 rounded mt-2 px-2 py-4'>
                    <p className=''>PREVIEW DARI FILE YANG DIUPLOAD DOSEN</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        Why do we use it?
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                        Where does it come from?
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        Why do we use it?
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                        Where does it come from?
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                    </p>
                </div>
                <div>
                    
                </div>
                <div className="flex flex-row justify-center items-center w-full py-9 gap-3 rounded">
                    <button onClick={toggleModalInfo} className="bg-red-600 text-white px-3 py-2 rounded">Cancel</button>
                    <button className="bg-blue-600 text-white px-3 py-2 rounded">Upload</button>
                </div>
            </div>
        </div>
    )
}

export default Modal