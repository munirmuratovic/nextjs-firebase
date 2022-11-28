// import { auth } from '../../../helpers/db/firebase';
// import { signInWithEmailAndPassword } from "firebase/auth";

// function isEmail(email) {
//     var re = /\S+@\S+\.\S+/;
//     return re.test(email);
// }

// const login = async (req, res) => {
//     const { username, password } = req.body;

//     let email;
//     // check if username data is email
//     if (isEmail(username)) {
//         email = username;
//     } else {
//         // check in database if there is a user with entered username
//         const users = await db.collection('users').where('username', '==', username).get();
//         const foundUser = users.docs.map(x => x.data())[0];

//         if (foundUser) {
//             email = foundUser.email;
//         } else {
//             res.status(400).json({ message: 'User not found.' });
//             return;
//         }
//     }

//     signInWithEmailAndPassword(auth, email, password)
//         .then((userCredential) => {
//             const user = userCredential.user;
//             console.log('ovo je user', user)
//             res.status(200).json(user.stsTokenManager);
//         })
//         .catch((error) => {
//             console.log(error.code)
//             switch (error.code) {
//                 case "auth/wrong-password":
//                     res.status(400).json({ message: 'Wrong password.' });
//                     break;
//                 case "auth/user-not-found":
//                     res.status(400).json({ message: 'User not found.' });
//                     break;
//                 case "auth/missing-email":
//                     res.status(400).json({ message: 'Please enter valid email.' });
//                     break;
//                 case 'auth/too-many-requests':
//                     res.status(400).json({ message: 'Too many requests. Try again later.' });
//                     break;
//                 default:
//                     res.status(400).json({ message: 'Error loggin in.' });
//                     break;
//             }
//         });

// }

// export default login;