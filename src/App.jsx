import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'

function App() {
  return (
   <div className="w-screen h-screen">
<Routes>
  <Route path='/' element={<Home/>} />
</Routes>

   </div>
  )
}

export default App
