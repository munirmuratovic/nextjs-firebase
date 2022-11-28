import { useRouter } from "next/router";
import Loading from "../ui/Loading";

import { getAuth } from "firebase/auth";
import { useAuthState } from 'react-firebase-hooks/auth';

const AuthWrapper = (props) => {
  const router = useRouter();
  const auth = getAuth();
  const [user, loading] = useAuthState(auth);

  if (user) {
    router.replace("/");
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <div key={Math.random()}>{props.children}</div>
  );
};

export default AuthWrapper;
