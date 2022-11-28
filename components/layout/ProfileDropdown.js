import { forwardRef } from "react";
import usewithClickOutside from "./withClickOutside";
import Button from "../ui/Button";
import useDarkmode from "../../hooks/use-darkmode";
import Box from "../ui/Box";
import CirclePhoto from "../ui/CirclePhoto";

const ProfileDropdown = forwardRef(({ open, setOpen, props }, ref) => {
  const { user, auth } = props;
  console.log(user);
  const [colorTheme, switchTheme] = useDarkmode();

  const handleLogout = () => {
    auth.signOut()
  };

  let profilePic = (
    <div className="mx-auto p-4 shadow-sm bg-purple-500 h-10 w-10 rounded-full"></div>
  );

  if (user && user.photoURL) {
    profilePic = (
      <CirclePhoto
        src={user.photoURL}
      />
    );
  }

  const handleSwitchTheme = () => {
    switchTheme();
    setOpen(false);
  };

  return (
    <div ref={ref}>
      <div
        onClick={() => setOpen(!open)}
        className="flex md:order-2 relative z-30 cursor-pointer"
      >
        <div className="block relative cursor-pointer">
          <div className="relative w-10 h-10">
            {profilePic}
          </div>
        </div>
      </div>

      {open && (
        <Box>
          <div className="absolute z-50 top-0 right-0 w-full sm:w-96 rounded-lg shadow-lg">
            <div className="flex flex-col">
              <div className="flex bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 h-14 items-center justify-between pl-1">
                <div className="gray-200">
                  <i
                    onClick={() => setOpen(false)}
                    className="flex p-3 rounded-full items-center bi bi-arrow-left bg-white dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer"
                  />
                </div>
                <div className="flex justify-between items-center hover:bg-gray-200 dark:hover:bg-gray-800 dark:text-white h-full px-3">
                  <div className="pr-3">{user.displayName}</div>
                  <div
                    onClick={() => setOpen(!open)}
                    className="flex md:order-2 relative"
                  >
                    <div className="block relative cursor-pointer">
                      <div className="relative w-10 h-10">
                        {profilePic}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="overflow-y-auto p-1 bg-white dark:bg-gray-800 backdrop-blur-sm rounded-b-lg">
                <ul className="">
                  <li>
                    <div
                      onClick={handleSwitchTheme}
                      className="cursor-pointer flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700"
                    >
                      <Button
                        htmlFor="toogleA"
                        bsIcon={
                          colorTheme == "dark"
                            ? "bi-lightbulb-off"
                            : "bi-lightbulb"
                        }
                      />
                      <span className="ml-3">Dark Mode</span>
                    </div>
                  </li>
                  <li>
                    <div
                      onClick={handleLogout}
                      className="cursor-pointer flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700"
                    >
                      <Button bsIcon="bi bi-door-open-fill" />
                      <span className="ml-3">Logout</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Box>
      )}
    </div>
  );
});

ProfileDropdown.displayName = "ProfileDropdown";

export default usewithClickOutside(ProfileDropdown);
