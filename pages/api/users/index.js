export default (req, res) => {
    const dataUser = require('/public/Data/dataUser.json');
    const { page = 1, perPage = 10, role = null } = req.query;
    let filteredData = dataUser.data;

    // Filter dataUser by role
    if (role) {
        filteredData = filteredData.filter((user) => {
            return user.role == role;
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