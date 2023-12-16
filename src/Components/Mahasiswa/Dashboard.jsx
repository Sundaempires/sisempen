import React, { useEffect, useState } from 'react';
import Pagination from '@/Utilities/Pagination';
import Table from '../Common/Table/Index';
import Header from '../Common/Header/Index';

const Dashboard = ({ toggleSidebar }) => {
    const [page, setPage] = useState(1);
    const [courses, setCourses] = useState([]);
    const [lastPage, setLastPage] = useState(1);
    const [selectedSemester, setSelectedSemester] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/courses?pagination[page]=${page}`;

                if (selectedSemester && selectedSemester !== 'All') {
                    url += `&filters[semester][$eq]=${selectedSemester}`;
                }

                const res = await fetch(url);
                const data = await res.json();
                setCourses(data);
                setLastPage(data.meta.pagination.pageCount);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [page, selectedSemester]);

    const handleSemesterChange = async (selectedSemester) => {
        setSelectedSemester(selectedSemester);
        setPage(1);
    };

    return (
        <div className="w-full bg-gray-100">
            <Header toggleSidebar={toggleSidebar} />
            <Pagination page={page} lastPage={lastPage} setPage={setPage} handleSemesterChange={handleSemesterChange} />
            <Table api={courses} />
        </div>
    );
};

export default Dashboard;
