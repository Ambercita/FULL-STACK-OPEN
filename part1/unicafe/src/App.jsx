import { useState } from "react";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  return (
    <div>
      <h2>give feedback</h2>
      <Button onClick={() => setGood(good + 1)} text="good" />
      <Button onClick={() => setBad(bad + 1)} text="bad" />
      <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

const Statistics = ({ good, bad, neutral }) => {
  const all = good + neutral + bad;
  if (all === 0) return <div>No feedback given</div>;
  return (
    <>
      <div>good {good}</div>
      <div>neutral {neutral}</div>
      <div>bad {bad}</div>
      <div>all {all}</div>
      <div>average {(1 * good + 0 * neutral + -1 * bad) / all}</div>
      <div>positive {(good / all) * 100} %</div>
    </>
  );
};

const Button = (props) => {
  return <button onClick={props.onClick}>{props.text}</button>;
};
export default App;
