const Box = ({ className, children }) => {
  return (
    <div
      className={
        "border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition shadow " +
        className
      }
    >
      {children}
    </div>
  );
};

export default Box;
