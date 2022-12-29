import { useState, useCallback } from "react";
import Title from "./components/Title";
import Button from "./components/Button";
import ShowCount from "./components/ShowCount";

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const incrementByOne = useCallback(() => {
    setCount1((prevCount) => prevCount + 1);
  }, []);
  const incrementByFive = useCallback(() => {
    setCount2((prevCount) => prevCount + 5);
  }, []);

  return (
    <div>
      <Title />
      <ShowCount count={count1} title="Counter  1" />
      <Button handleClick={incrementByOne}>Increment by One</Button>
      <hr />
      <ShowCount count={count2} title="counter 2" />
      <Button handleClick={incrementByFive}>Increment by Five</Button>
    </div>
  );
}

export default App;
