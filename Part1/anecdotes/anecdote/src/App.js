import './App.css';
import { useState } from 'react'


const App = () => {

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]

  // const Anecdote = ({text}) =>
  // {
  //     const [votes, setVotes] = useState(0);
  
  //     return (
  //         <div>
  //             <p>{text}</p>
  //             <p>Votes: {votes}</p>
  //             <button onClick={() => setVotes(votes + 1)}>vote</button>
  //         </div>
  //     )
  // }

  const points = [1, 4, 6, 3]

  const copy = [...points]
// increment the value in position 2 by one
   copy[2] += 1
  
const [selected, setSelected] = useState(0)
  

  const randomNumber = () => Math.floor(Math.random() * anecdotes.length);
  
   return (
    <div>
     {anecdotes[selected]}
      <br></br>
    <button onClick ={() => setSelected(randomNumber)} >next anecdote</button>
   </div>
  );
}

export default App;
