import React, { useState, useRef, useEffect } from "react";

export default function withClickOutside(WrappedComponent) {
  const Component = (props) => {
    const [open, setOpen] = useState(false);

    const ref = useRef();

    useEffect(() => {
      const handleClickOutside = (event) => {
        try {
          if (ref && ref.current && !ref.current.contains(event.target)) {
            setOpen(false);
          }
        } catch (error) {}
      };
      document.addEventListener("mousedown", handleClickOutside);
    }, [ref]);

    return <WrappedComponent open={open} setOpen={setOpen} ref={ref} props={{...props}} />;
  };

  return Component;
}
