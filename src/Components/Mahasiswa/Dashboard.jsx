import React, { useEffect, useState } from 'react';
import Pagination from '@/Utilities/Pagination';
import Table from '../Common/Table/Index';
import Header from '../Common/Header/Index';

const Dashboard = ({ toggleSidebar,titleMenu }) => {
    const [page, setPage] = useState(1);
    const [courses, setCourses] = useState([]);
    const [lastPage, setLastPage] = useState(1);
    const [selectedSemester, setSelectedSemester] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let url = `/api/courses?page=${page}`;
                if (selectedSemester && selectedSemester !== 'All') {
                    url += `&semester=${selectedSemester}`;
                }
                const res = await fetch(url);
                const data = await res.json();
                setCourses(data);
                setLastPage(data.totalPages);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [page, selectedSemester]);

    const handleSemesterChange = async (selectedSemester) => {
        setSelectedSemester(selectedSemester);
        setPage(1);
        console.log(selectedSemester);
    };

    return (
        <div className="w-full bg-gray-100">
            <Header toggleSidebar={toggleSidebar} titleMenu="Dashboard"/>
            <Pagination page={page} lastPage={lastPage} setPage={setPage} handleSemesterChange={handleSemesterChange} />
            <Table api={courses} />
        </div>
    );
};

export default Dashboard;
