import ProfileDropdown from "./ProfileDropdown";
import Link from "next/link";

import { initFirebase } from "../../firebase/firebase";
import { getAuth } from "firebase/auth";
import { useAuthState } from 'react-firebase-hooks/auth';

import DarkSwitch from "./DarkSwitch";
import Button from "../ui/Button";

import { useRouter } from "next/router";

const Navbar = (props) => {
  const auth = getAuth();
  const [user, loading] = useAuthState(auth);
  const router = useRouter();

  let additional;
  if (router.pathname == "/" && !user) {
    additional = "md:px-44 h-20";
  }

  if (
    (router.pathname == "/login" || router.pathname == "/register") &&
    !user
  ) {
    additional = "md:px-40 h-16";
  }

  return (
    <header
      className={
        "transition-height transition-padding ease-in-out flex items-center px-3 z-20 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white h-14 fixed top-0 left-0 right-0 justify-between shadow-sm " +
        additional
      }
    >
      <div className="flex z-50 gap-2 items-center">
        <Link href="/" passHref>
          <div className="relative cursor-pointer">
            Logo
          </div>
        </Link>
      </div>

      {user && <ProfileDropdown user={user} auth={auth} />}

      {!user && (
        <div className="flex items-center gap-2">
          {!user && <DarkSwitch />}
          <Link href="/login" passHref>
            <div>
              <Button
                text="Login"
                className="border-2 border-blue-400 dark:border-blue-600 h-10 px-6"
              />
            </div>
          </Link>
          <Link href="/register" passHref>
            <div>
              <Button
                text="Join"
                className="border-2 border-green-400 dark:border-green-600 h-10 px-6"
              />
            </div>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
