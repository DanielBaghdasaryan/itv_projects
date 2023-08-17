import { useState } from "react"

function App() {

  const [regionN, setRegionN] = useState(0)

  const regions = [{
    name: 'ararat',
    description: [
      {
        type: 'text',
        title: "title 1",
        paragraph: "paraghraph 1"
      },
      {
        type: 'img',
        title: "title 1",
        src: "https://images.openai.com/blob/b4871bfc-8429-4a93-a5a1-66e1dd60e3f8/gpt-4-92586ac_1080p60-poster.jpg?trim=0,0,0,0&width=2000"
      },
      {
        type: 'text',
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
            x.type === "text"
              ? <div key={i} style={{ backgroundColor: i % 2 ? 'red' : null }}>
                <div>{x.title}</div>
                <div>{x.paragraph}</div>
              </div>
              : <div key={i} style={{ backgroundColor: i % 2 ? 'red' : null }}>
                <img src={x.src} />
                <div>{x.title}</div>
              </div>

          )
        )
      }
    </div>
  )
}

export default App
