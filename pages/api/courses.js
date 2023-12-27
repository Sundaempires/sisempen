export default (req, res) => {
    const dataCourse = require('../../public/Data/dataCourse.json');
    const { page = 1, perPage = 10, semester = null } = req.query;
    let filteredData = dataCourse.data;

    // Filter dataCourse by semester
    if (semester) {
        filteredData = filteredData.filter((course) => {
            return course.semester == semester;
        });
    }

    // Calculate start and end indices based on pagination parameters
    const startIndex = (page - 1) * perPage;
    const endIndex = page * perPage;

    // Extract the portion of data for the requested page
    const paginatedData = filteredData.slice(startIndex, endIndex);

    res.status(200).json({
        page: parseInt(page),
        perPage: parseInt(perPage),
        totalItems: filteredData.length,
        totalPages: Math.ceil(filteredData.length / perPage),
        data: paginatedData,
    });
};
