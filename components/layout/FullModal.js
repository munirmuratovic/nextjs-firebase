const FullModal = ({ top, children }) => {
  return (
    <div className="absolute top-1/2 h-full sm:h-min left-1/2 transform bg-blue -translate-x-1/2 -translate-y-1/2 z-50 overflow-y-auto shadow-large sm:w-7/12 md:w-5/12 w-full rounded-0 sm:rounded-xl">
      <div className="h-full bg-white dark:bg-gray-800">
        <div className="border-b border-gray-200 dark:border-gray-700 px-4 py-2">
          {top}
        </div>
        <div className="px-4 py-2">{children}</div>
      </div>
    </div>
  );
};

export default FullModal;
