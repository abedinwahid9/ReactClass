import { useState, useEffect, useRef } from "react";
function Time() {
  const [date, setDate] = useState(new Date());
  const intervalRef = useRef();

  const tick = () => {
    setDate(new Date());
  };

  useEffect(() => {
    intervalRef.current = setInterval(tick, 1000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div>
      <p>time: {date.toLocaleTimeString()}</p>
      <button
        type="button"
        onClick={() => {
          clearInterval(intervalRef.current);
        }}
      >
        cleanup
      </button>
    </div>
  );
}

export default Time;
