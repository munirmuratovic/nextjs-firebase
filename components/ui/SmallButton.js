const SmallButton = ({ bsIcon, text, onClick, className = "" }) => {
    return (
      <button onClick={onClick} className="flex flex-row items-center focus:outline-none focus:shadow-outline py-1 px-2 ml-3 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700">
        <i className={bsIcon}></i>
        <span className="ml-2">{text}</span>
      </button>
    );
  };
  
  export default SmallButton;
  