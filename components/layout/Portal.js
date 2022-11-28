import { useEffect } from "react";
import { createPortal } from "react-dom";

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onConfirm} />;
};

const Portal = (props) => {
  useEffect(() => {
    // Anything in here is fired on component mount.
    document.body.style.overflow = "hidden";

    return () => {
      // Anything in here is fired on component unmount.
      document.body.style.overflow = null;
    };
  }, []);

  return (
    <>
      {createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop")
      )}
    </>
  );
};

export default Portal;
