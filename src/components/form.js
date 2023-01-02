import { useEffect, useRef } from "react";
import Input from "../components/input";
function Form() {
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <Input ref={inputRef} type="text" placeholder="Enter text" />
    </div>
  );
}

export default Form;
