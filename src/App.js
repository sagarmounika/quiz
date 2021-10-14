import React, { useEffect, useState } from "react"
import "./style.css"

export default function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=10")
      .then(response => response.json())
      .then(res => setData(res.results))
  }, [])
  console.log(data, "dat")
  return (
    <div className="App">
      <div>Quiz</div>
      {data &&
        data?.map(x => (
          <div>
            <div>
              {x.question}
              <span>{x.difficulty}</span>
            </div>

            <div>{x.correct_answer}</div>
          </div>
        ))}
    </div>
  )
}
