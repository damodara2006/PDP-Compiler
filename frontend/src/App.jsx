import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Compiler from './Compiler'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Compiler/>}/> 
      </Routes>
    </BrowserRouter>
  )
}

export default App
