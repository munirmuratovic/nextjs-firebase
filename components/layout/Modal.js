import React, { forwardRef } from "react";
import usewithClickOutside from "./withClickOutside";

const Modal = forwardRef(({ open, setOpen, props }, ref) => {
  const trigger = props.trigger;
  const modal = props.modal;
  return (
    <div ref={ref}>
      <div onClick={() => setOpen(!open)}>{trigger}</div>

      {open && <>{modal}</>}
    </div>
  );
});

Modal.displayName = "Modal";

export default usewithClickOutside(Modal);
