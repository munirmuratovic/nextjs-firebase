const Loading = () => {
  return (
    <>
      <div className="absolute top-0 flex items-center w-full h-screen"></div>
      <div className="absolute top-0 flex items-center w-full h-screen animate-pulse">
        <div className="mx-auto my-auto text-gray-700 dark:text-gray-300">
          <span className="relative flex text-purple-500">
            <span className="animate-ping absolute inline-flex h-full z-50 w-full p-8 shadow-sm bg-purple-500 rounded-full opacity-75"></span>
            <span className="relative inline-flex rounded-full p-8 bg-purple-500"></span>
          </span>
        </div>
      </div>
    </>
  );
};

export default Loading;
