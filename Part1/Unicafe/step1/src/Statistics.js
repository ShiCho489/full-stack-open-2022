
export const Statistics = (props) => {
    const [good, neutral, bad] = props.stat
    if (good || neutral || bad){
  return (
    <div>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad{bad}</p>
        <p>all {good + neutral + bad}</p>
        <p> average {(good -bad) / (good + neutral + bad)}</p>
        <p>positive {good / (good + bad + neutral) * 100}</p>

    </div>
  )
}

return (
    <p>No feedback given</p>
)
}


export default Statistics