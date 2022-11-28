const Button = ({ bsIcon, text, className, children, onClick }) => {
  const btnStyles =
    "rounded-md bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 h-10 cursor-pointer " +
    (text && " px-4 ") +
    (bsIcon && text
      ? " flex gap-2 justify-between items-center px-4 py-2 "
      : " flex items-center py-2 px-3 ") +
    (className ? className : "");

  return (
    <div className={btnStyles} onClick={onClick}>
      <i className={bsIcon}></i> {text} {children}
    </div>
  );
};

export default Button;
