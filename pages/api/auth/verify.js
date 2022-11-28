import { db } from '../../../firebase/admin';

function isEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

export default async function verify(req, res) {
    const { loginData } = req.body;

    let email;
    // check if loginData is email
    if (isEmail(loginData)) {
        email = loginData;
    } else {
        try {
            // check in database if there is a user with entered username
            const users = await db.collection('users').where('username', '==', loginData).get();

            const foundUser = users.docs.map(x => x.data())[0];
            console.log('foundUser', foundUser);

            if (foundUser) {
                email = foundUser.email;
                res.status(200).json({ email });
                return;
            }

            if (!foundUser) {
                res.status(404).json({ message: 'User not found.' });
            }
        } catch (error) {
            res.status(400).json({ message: 'Error occured.' });

        }
        res.status(500).json({ message: 'Server error.' });

    }
}