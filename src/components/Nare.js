import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Glxavor from './Glxavor'

const App = () => {
  return (
    <Routes>
      <Route path="/glxavor" element={<Glxavor />} />
      {/* <Route path="/:kino" element={<Kino />} /> */}
    </Routes>
  )
}

export default App

