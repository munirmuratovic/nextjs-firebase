import { useRef, useState } from "react";
import Portal from "../layout/Portal";

const FlyForm = ({ recipientId, onCreatePost }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState(null);

  const inputEl = useRef("");

  const switchIsOpen = () => {
    setIsOpen(!isOpen);
  };

  

  return <>{isOpen && <Portal onConfirm={() => setIsOpen(false)} />}</>;
};

export default FlyForm;
