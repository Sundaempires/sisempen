export default (req, res) => {
    const dataUser = require('/public/Data/dataUser.json');

    if (req.query.nim) {
        let result = {};
        let user = dataUser.data.filter((user) => {
            return user.nim == req.query.nim;
        });

        if (user.length > 0) {
            if (user[0].password == req.query.password) {
                result = user[0];
            }
        }

        res.status(200).json(result);
    }

    res.status(500).json({ error: 'Invalid query' });
};