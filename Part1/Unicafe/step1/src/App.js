import { useState } from 'react'
import './App.css';
import { Statistics } from './Statistics.js'

  const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
 
 return (
<div>
  <h2> give feedback </h2>
   <button onClick={() => {setGood(good + 1);}}>good</button>
   <button onClick={() => {setNeutral(neutral +1);}}>neutral</button>
   <button onClick={() => {setBad(bad + 1);}}>bad</button>
   <h2> statistics </h2>
   <Statistics stat= {[good, neutral, bad]}></Statistics>
  
  </div>
 );
}
export default App