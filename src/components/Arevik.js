import { useState } from "react"

function App() {

  const [regionN, setregionN] = useState(0)
  const regions = [
    {
      name: "Արագածոտն",
      description: " barev "

    },
    {
      name: "Արարատ",
      description: "barev"
    },
    {
      name: "Սյունիք",
      description: "barev"
    },

    {
      name: "Վայոց ձորի",
      description: " barev "

    },
    {
      name: " Տավուշ",
      description: " barev "

    },
    {
      name: "Կոտայք",
      description: " barev "

    },
    {
      name: "Լոռի",
      description: " barev "

    },
    {
      name: "Շիրակ",
      description: " barev "

    },
    {
      name: "Գեղարքունիք",
      description: " barev "

    },
    {
      name: "Արմավիր",
      description: " barev "

    },
  ]
  return (
    <div>
      <div style={{ display: 'flex' }}>
        <div>
          {regions.map(
            (x, i) => <div
              key={i}
              onClick={() => setregionN(i)}
              style={{ border: "1px solid black" }}
            >
              {x.name}
            </div>
          )}

        </div>
        <div style={{ border: "1px solid black" }}>
          {regions[regionN].description}
        </div>
      </div>
    </div>

  )
}

export default App