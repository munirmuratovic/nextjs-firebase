import AuthWrapper from "../components/auth/AuthWrapper";
import GuestWrapper from "../components/auth/GuestWrapper";
import Home from "../components/basic/Home";
import Welcome from "../components/basic/Welcome";
import { initFirebase } from "../firebase/firebase";
import { getAuth } from "firebase/auth";
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from "../components/ui/Loading";

const HomePage = () => {
  const auth = getAuth();
  const [user, loading] = useAuthState(auth);

  return (
    <>
      {loading && (
        <Loading />
      )}
      {!user && (
        <GuestWrapper>
          <Welcome />
        </GuestWrapper>
      )}
      {user && (
        <AuthWrapper>
          <Home />
        </AuthWrapper>
      )}
    </>
  );
};

export default HomePage;
