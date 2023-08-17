import { useState } from 'react'
import { regions } from "./Gegham _json"
function App() {

  const [regionN, setRegionN] = useState(0)


  return (
    <div>
      <div style={{ display: "flex" }}>
        <div>
          {regions.map(
            (x, i) => <div
              key={i}
              onClick={() => setRegionN(i)}
              style={{
                height: 30, width: 120, border: "2px solid black", padding: 20, margin: 20, backgroundColor: i === regionN ? "rgb(0,136,255)" : null, color: i === regionN ? null : "rgb(15, 12, 12)",
              }}
            >
              {x.name}
            </div>
          )}'
        </div>
        <div style={{ height: 940, border: "2px solid black", margin: 20, padding: 20, backgroundColor: "aliceblue" }}>
          {regions[regionN].description}{regions[regionN].Image}{regions[regionN].Img}



        </div>

      </div>

    </div >
  )
}

export default App