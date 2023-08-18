import { useState } from "react"

function App() {

  const [x, setX] = useState(0)
  const [page, setPage] = useState('main')

  const rivers = ['arpa', 'vorotan', 'debed']
  const lakes = ['sevan', 'parz lich', 'kari lich']

  let body = <div></div>
  if (page === 'main') {
    body = <div>
      <div onClick={() => setPage('rivers')} style={{ padding: 20, backgroundColor: 'blue' }}>geter</div>
      <div onClick={() => setPage('lakes')} style={{ padding: 20, backgroundColor: 'aqua' }}>lcher</div>
    </div>
  } else if (page === 'rivers') {
    body = <div>
      {rivers.map(x => <div>{x}</div>)}
    </div>
  } else if (page === 'lakes') {
    body = <div>
      {lakes.map(x => <div>{x}</div>)}
    </div>
  }

  return (
    <div>
      <div style={{ display: 'flex' }}>
        <div onClick={() => setPage('main')} style={{ border: '1px solid black', padding: 10 }}>glkhavor</div>
        <div onClick={() => setPage('rivers')} style={{ border: '1px solid black', padding: 10 }}>geter</div>
        <div onClick={() => setPage('lakes')} style={{ border: '1px solid black', padding: 10 }}>lcher</div>
      </div>
      {body}
    </div>
  )
}

export default App
