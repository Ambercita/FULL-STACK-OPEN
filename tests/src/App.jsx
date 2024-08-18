import { useState } from "react";

const Display = ({counter}) => <div>{counter}</div>

const Button = ({ onClick, text }) =>  <button onClick={onClick}>{text}</button>

const App = () => {
  const [counter, setCounter] = useState(0);
  console.log("render with counter value", counter);

  const increaseByOne = () => {
    console.log("increase, value before", counter);
    setCounter(counter + 1);
  };

  const descreaseByOne = () => {
    console.log("descrese, value before", counter);
    setCounter(counter - 1);
  };

  const setToZero = () => {
    console.log("resetting to zero, value before", counter);
    setCounter(0);
  };

  return (
    <div>
      <Display counter={counter} />
      <Button onClick={increaseByOne} text="plus" />
      <Button onClick={descreaseByOne} text="minus" />
      <Button onClick={setToZero} text="zero" />
    </div>
  );
};

export default App;
