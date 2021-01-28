import React, { useState } from "react";
import ReactDOM from "react-dom";

const Header = ({ text }) => <h1>{text}</h1>;
const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const total = (good, neutral, bad) => good + neutral + bad;
const average = (good, neutral, bad) =>
  (good * 1 + neutral * 0 + bad * -1) / total(good, neutral, bad);
const positive = (good, neutral, bad) =>
  `${(good / total(good, neutral, bad)) * 100} %`;

const Statistic = ({ text, value }) => {
  return <div>{`${text} ${value}`}</div>;
};

const Statistics = ({ good, neutral, bad }) => {
  if (total(good, neutral, bad) === 0) {
    return <p>No feedback given</p>;
  }
  return (
    <div>
      <Statistic text={"good"} value={good} />
      <Statistic text={"neutral"} value={neutral} />
      <Statistic text={"bad"} value={bad} />
      <Statistic text={"all"} value={total(good, neutral, bad)} />
      <Statistic text={"average"} value={average(good, neutral, bad)} />
      <Statistic text={"positive"} value={positive(good, neutral, bad)} />
    </div>
  );
};
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <Header text={"give feedback"} />
      <Button handleClick={() => setGood(good + 1)} text={"good"} />
      <Button handleClick={() => setNeutral(neutral + 1)} text={"neutral"} />
      <Button handleClick={() => setBad(bad + 1)} text={"bad"} />
      <Header text={"statistics"} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
