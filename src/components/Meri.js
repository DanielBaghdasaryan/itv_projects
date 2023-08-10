import { useState } from 'react'
function App() {
  const [regionN, setRegionN] = useState(0)
  const regions = [
    {
      name: "Մերի",
      surname: "Հարությունյան"
    },
    {
      name: "Մերի",
      surname: "Քերոբյան"
    },
    {
      name: "Վիկտորիա",
      surname: "Պիրոյան"
    },
    {
      name: "Գոհար",
      surname: "Մնոյան"
    },
    {
      name: "Զոյա",
      surname: "Այվազյան"
    },
    {
      name: "Լիաննա",
      surname: "Թորոսյան"
    },
    {
      name: "Ալվարդ",
      surname: "Կուրղինյան"
    },
    {
      name: "Գոռ",
      surname: "Հովհաննիսյան"
    },
    {
      name: "Էդգար",
      surname: "Հովհաննիսյան"
    },
    {
      name: "Վաղինակ",
      surname: "Մնացականյան"
    },
    {
      name: "Գագիկ",
      surname: "Հալաջյան"
    },
    {
      name: "Յուրիկ",
      surname: "Լուսիկյան"
    },
    {
      name: "Մհեր",
      surname: "Մինասյան"
    },
    {
      name: "Սարգիս",
      surname: "Թերջյան"
    },
    {
      name: "Արմեն",
      surname: "Նազարեթյան"
    },
    {
      name: "Դավիթ",
      surname: "Սուքիասյան"
    },
  ]
  return (
    <div>
      <div style={{ border: "4px solid green", "width": "207px" }}>8-րդ դասարան</div>
      <div style={{ display: "flex" }}>
        <div>
          {regions.map(
            (x, i) => <div
              key={i}
              onClick={() => setRegionN(i)}
              style={{ border: "5px solid green" }}
            >
              {x.name}
            </div>
          )}
        </div>
        <div style={{ border: "4px solid green" }}>
          {regions[regionN].surname}
        </div>
      </div>
    </div>
  )
}
export default App













