import { db } from '../../../firebase/admin';


export default async function register(req, res) {
    console.log('req.body', req.body);
    const { uid, name, username, email } = req.body;
    var newUser = db.collection("users").doc(uid);
    newUser.set({
        name,
        username,
        email
    });
    res.status(200).json({ message: 'Created ' + newUser });
}