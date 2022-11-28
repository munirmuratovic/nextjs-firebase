import admin from 'firebase-admin';
const serviceAccount = JSON.parse(process.env.FIRESTORE_ADMIN);

if (!admin.apps.length) {
    try {
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount)
        });
    } catch (error) {
        console.log('Firebase admin initialization error', error.stack);
    }
}

const db = admin.firestore();
const auth = admin.auth();

export { db, auth };