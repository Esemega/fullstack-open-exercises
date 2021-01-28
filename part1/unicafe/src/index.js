import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

      
  const Header = ({text}) => <h1>{text}</h1>

  const increaseGood = () => setGood(good + 1);
  const increaseNeutral = () => setNeutral(neutral + 1);
  const increaseBad = () => setBad(bad + 1);

  const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>

  const Counter = ({name, value}) => {
    return(
      <div>
      {`${name} ${value}`}
      </div>
    )
  }

  return (
    <div>
      <Header text = {'give feedback'}/>
      <Button handleClick={increaseGood} text = {'good'}/>
      <Button handleClick={increaseNeutral} text = {'neutral'}/>
      <Button handleClick={increaseBad} text = {'bad'}/>
      <Header text = {'statistics'}/>
      <Counter name={'good'} value={good}/>
      <Counter name={'neutral'} value={neutral}/>
      <Counter name={'bad'} value={bad}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)