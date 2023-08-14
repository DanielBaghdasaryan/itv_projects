import { useState } from "react"
import { my_json } from "./daniel_json"


function App() {

  const x = my_json

  console.log(x)

  return (
    <div>
      {x}
    </div>
  )
}

export default App
