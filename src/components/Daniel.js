import { useState } from "react"
import { x } from "./daniel_json"

function App() {

  const [regionN, setRegionN] = useState(0)

  const regions = [{
    name: 'ararat',
    description: [
      {
        title: "title 1",
        paragraph: "paraghraph 1"
      },
      {
        title: "title 2",
        paragraph: "paraghraph 2"
      },
    ]
  }]

  return (
    <div>
      {
        regions[regionN].description.map(
          (x, i) => (
            <div key={i} style={{ backgroundColor: i % 2 ? 'red' : null }}>
              <div>{x.title}</div>
              <div>{x.paragraph}</div>
            </div>
          )
        )
      }
    </div>
  )
}

export default App
