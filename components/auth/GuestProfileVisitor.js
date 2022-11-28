import Link from "next/link";

const GuestProfileVisitor = ({ user }) => {
  return (
    <div className="py-2 text-center bg-gray-200 dark:bg-gray-700 text-black border-t border-gray-300 dark:border-gray-600 dark:text-white h-14 items-center absolute bottom-0 left-0 right-0 p-4 bg-gray-100 sticky backdrop-filter backdrop-blur-md bg-opacity-80 dark:bg-opacity-80 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
      <div>{user?.fullName} is here.</div>
      <p className="text-sm flex justify-center items-center">
        <div className="cursor-pointer px-4 py-2 bg-blue-600 hover:bg-blue-500 text-gray-100">
          <Link href="/login">Login</Link>
        </div>
        <div className="px-2">or</div>
        <div className="cursor-pointer px-4 py-2 bg-green-600 hover:bg-green-500 text-gray-100">
          <Link href="/register">Register</Link>
        </div>
        <div className="px-2">to see more.</div>
      </p>
    </div>
  );
};

export default GuestProfileVisitor;
