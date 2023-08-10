import { useState } from "react"


function App() {

  const [n, setN] = useState(0)

  const regions = [
    {
      name: "ararat",
      description: "blablabla"
    },
    {
      name: "ararat",
      description: "blablabla"
    },
    {
      name: "ararat",
      description11: "blablabla",
      photo: "https://ksjfbck.jpg"
    },
  ]


  return (
    <div>
      {
        regions.map(
          (x, i) => <div
            onClick={() => setN(i)}
            style={{ backgroundColor: i === n ? "red" : "white", cursor: 'pointer' }}
          >{x.name}</div>)
      }
      <div>
        <div>"blablabla"</div>
        <img src="https://ksjfbck.jpg" />
      </div>


    </div>
  )
}

export default App
