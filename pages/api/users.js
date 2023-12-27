export default (req, res) => {
    const dataUser = require('../../public/Data/dataUser.json');
    res.status(200).json(dataUser);
};