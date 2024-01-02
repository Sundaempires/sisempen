export default async function handler(req, res) {
    if (req.method === 'POST') {
        const dataUser = require('/public/Data/dataUser.json');

        if (req.body && req.body.nim && req.body.password) {
            let result = {};
            let user = dataUser.data.filter((user) => {
                return user.nim == req.body.nim;
            });

            if (user.length > 0) {
                if (user[0].password == req.body.password) {
                    result = user[0];
                }
            }

            return res.status(200).json(result);
        }

        return res.status(400).json({ error: 'Invalid request body' });
    }

    return res.status(405).json({ error: 'Method Not Allowed' });
}
