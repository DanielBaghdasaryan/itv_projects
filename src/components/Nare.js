import React, { useState, useEffect } from "react"
import { names } from "./Nare_json"
import { mambers } from "./Nare_json1"

function App() {

  const [arqa, setArqa] = useState("")

  const [open, setOpen] = useState(false)

  const [hrashaliq, setHrashaliq] = useState(0)
  useEffect(() => {
    setOpen(false)
  }, [arqa])



  return (
    <div>
      <h1 style={{
        flexDirection: "row", justifyContent: "center",
        display: "flex",
        border: "1px solid aqua",
        borderRadius: "10px", padding: "20px"
      }}>
        Հայաստանի մի փոքրիկ անկյուն
      </h1>
      <h2 style={{
        border: "1px solid #F0A827",
        marginBottom: "30px", display: "flex",
        flexDirection: "row", justifyContent: "center",
        margin: "15px", padding: "20px",
      }} >
        Նշանավոր եկեղեցիներ Հայաստանի և Արցախի տարածքում
      </h2>

      <div style={{ width: "100%", display: "flex" }}>
        <table style={{ minWidth: "424px" }}>
          <tbody>
            {names.map((king, index) => <tr key={index}>
              <td style={{
                border: "1px solid black", padding:
                  "10px", backgroundColor: JSON.stringify(arqa) === JSON.stringify(king) ? "aquamarine" : null,
                cursor: "pointer",
              }}
                onClick={() => {
                  setArqa(arqa.name === king.name ? "" : king)
                }}>
                {king.name}
              </td>
              <td style={{ border: "1px solid black", padding: "10px" }}>{king.construction}</td>
            </tr>
            )}
          </tbody>

        </table>
        {
          arqa !== ""
            ?
            <div style={{ border: "1px solid black", padding: "10px" }}>
              {arqa.img.map(
                x => <img style={{ float: "left", padding: "0 15px" }}
                  src={x} height={"150px"} alt="" />
              )
              }

              <p style={{ float: "none" }}>
                {!open ? arqa.description.slice(0, 500) : arqa.description}
                {!open ? "..." : ""}
                <span style={{ color: "#0066CC", cursor: 'pointer' }}
                  onClick={() => { setOpen(!open) }}>Show {open ? "less" : "more"}</span>
              </p>
            </div>
            :
            <></>
        }
      </div>
      <h2 style={{
        border: "1px solid #88F04F",
        marginBottom: "30px", display: "flex",
        flexDirection: "row", justifyContent: "center",
        margin: "15px", padding: "20px",
      }} >
        Հայկական բնաշխարհի հրաշալիքները
      </h2>
      <div style={{ display: "flex", flexDirection: "row-reverse" }}>
        {mambers.map((y, i) =>
          <div
            key={i}
            style={{
              border: "1px solid black", padding: "10px",
              width: "302px", margin: "2px", cursor: "pointer"
            }}
            onClick={() => {
              setHrashaliq(i)

            }}>
            {y.anun}
          </div>
        )}
        <div style={{ border: "1px solid black" }}>
          {mambers[hrashaliq].content}
        </div>
      </div>
    </div>
  )
}

export default App;






