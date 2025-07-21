import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

import Nav from './components/Nav'
import Dashboard from './pages/Dashboard'

const App = () => {

  

  return (
    <div>
      <BrowserRouter>
      <Nav/>
        <Routes>
         <Route path='/' element = {<Home />}></Route>
         <Route path='/dashboard' element = {<Dashboard /> }></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App