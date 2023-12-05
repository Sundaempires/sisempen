"use client"

const Table = ({ api }) => {

  return (
    <div className="bg-gray-100 rounded h-128 md:px-2 py-0">
      <table className="md:w-full text-sm bg-white w-96 overflow-y-auto">
        <thead>
          <tr className="text-xs bg-gray-200">
            <th className="pl-5 py-5 text-start">Kode</th>
            <th className="text-start">Mata Kuliah</th>
            <th className="text-center">SKS</th>
            <th className="text-center">Semester</th>
            <th className="text-center">Jumlah</th>
            <th className="text-center">Anggota</th>
            <th className="text-center">Daftar</th>
          </tr>
        </thead>
        <tbody>
          {api.data?.map((course, index) => {
            return (
              <tr
                key={index}
                className="text-xs border-b-2 border-b-gray-200 "
              >
                <td className="pl-5 py-5">{course.attributes.course_code}</td>
                <td className="">{course.attributes.course_name}</td>
                <td className="text-center">{course.attributes.sks}</td>
                <td className="text-center">{course.attributes.semester}</td>
                <td className="text-center">{course.attributes.mhs_mengulang}</td>
                <td className="text-center">0</td>
                <td className="text-center cursor-pointer flex justify-center items-center h-full py-4">
                  <button className="font-bold border-2 border-blue-600 text-blue-600 w-5 h-5 rounded-full">+</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
