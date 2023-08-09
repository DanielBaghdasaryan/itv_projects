import { useState } from "react"


function App() {

  const [n, setN] = useState(0)

  const cucak = [
    "vazgen", "babken", "tigran"
  ]

  return (
    <div>
      {
        cucak.map(
          (x, i) => <div
            onClick={() => setN(i)}
            style={{ backgroundColor: i === n ? "red" : "white", cursor: 'pointer' }}
          >{x}</div>)
      }
    </div>
  )
}

export default App
