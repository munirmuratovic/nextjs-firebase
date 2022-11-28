import { initFirebase } from "../../firebase/firebase";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const GoogleLogin = (props) => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    const signIn = async () => {
        const result = await signInWithPopup(auth, provider);
    }

    return (
        <button onClick={signIn} aria-label="Continue with google" role="button" className="w-full flex justify-center items-center py-2 rounded-full shadow-lg bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-800 dark:text-white border border-gray-800 dark:border-gray-200">
            <i className="bi bi-google"></i>
            <p className="text-base font-medium ml-4">Continue with Google</p>
        </button>
    );
}

export default GoogleLogin;