import { auth } from '../../../firebase/admin';

export default async function getAllUsers(req, res) {
    const { query } = req;

    if (!query.uid) {
        res.status(400).json({ message: "Please provide uid." });
        return;
    }

    function listAllUsers(nextPageToken) {
        const users = [];
        // List batch of users, 1000 at a time.
        auth
            .listUsers(1000, nextPageToken)
            .then((listUsersResult) => {
                listUsersResult.users.forEach((userRecord) => {
                    //   console.log('user', userRecord.toJSON());
                    users.push(userRecord.toJSON());
                });
                res.status(200).json({ users: users });
                if (listUsersResult.pageToken) {
                    // List next batch of users.
                    listAllUsers(listUsersResult.pageToken);
                }
            })
            .catch((error) => {
                console.log('Error listing users:', error);
            });
    };

    auth.getUser(query.uid)
        .then((userRecord) => {
            // logic for checking if admin
            if (userRecord.email == "munirmuratovicx@gmail.com") {
                // Start listing users from the beginning, 1000 at a time.
                listAllUsers();
            } else {
                res.status(400).json({ message: "Unauthorized" });
            }
        })
        .catch((error) => {
            res.status(400).json({ message: "Unauthorized", error });
            return;
        });
};