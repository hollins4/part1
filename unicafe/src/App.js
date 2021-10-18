import { render } from '@testing-library/react';
import React, { useState } from 'react';
import './App.css';


const Button = ({ onClick, text}) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const Statistics = ({good, neutral, bad}) => {
  let all = good + neutral + bad
  let avg = ((good - bad) / all).toFixed(2)
  let positiveAvg = ((good / all ) * 100).toFixed(1)

  if (all === 0) {
    return(
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
  return(
    <table>
      <tbody>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="all" value={all} />
      <StatisticLine text="average" value={avg} />
      <StatisticLine text="positive" value={positiveAvg} /> 
      </tbody>
    </table>
  )
}

const StatisticLine = ({ text, value }) => {
  if (text === "positive") {
    return(
      <tr><td>{text}</td><td>{value} %</td></tr>
    )
  }
  return(
    <tr><td>{text}</td><td>{value}</td></tr>
  )
}


function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  return (
    <div>
        <h1>give feedback</h1>
        <Button onClick={() => setGood(good + 1)} text="good" />
        <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
        <Button onClick={() => setBad(bad + 1)} text="bad" />
        <br />
        <h1>statistics</h1>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
        />
    </div>
  );

}



export default App;
