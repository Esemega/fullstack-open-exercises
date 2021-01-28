import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

      
  const Header = ({text}) => <h1>{text}</h1>
  const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>

  const Statistic = ({text, value}) => {
    return(
      <div>
      {`${text} ${value}`}
      </div>
    )
  }

  const increaseGood = () => setGood(good + 1);
  const increaseNeutral = () => setNeutral(neutral + 1);
  const increaseBad = () => setBad(bad + 1);
  const total = () => good + neutral + bad;
  const average = () => (good*1 + neutral*0 + bad*-1)/total();
  const positive = () => `${(good/total())*100} %`;

  return (
    <div>
      <Header text = {'give feedback'}/>
      <Button handleClick={increaseGood} text = {'good'}/>
      <Button handleClick={increaseNeutral} text = {'neutral'}/>
      <Button handleClick={increaseBad} text = {'bad'}/>
      <Header text = {'statistics'}/>
      <Statistic text={'good'} value={good}/>
      <Statistic text={'neutral'} value={neutral}/>
      <Statistic text={'bad'} value={bad}/>
      <Statistic text={'all'} value={total()}/>
      <Statistic text={'average'} value={average()}/>
      <Statistic text={'positive'} value={positive()}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)