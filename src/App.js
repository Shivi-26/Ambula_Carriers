import React from 'react'
import TodoList from './component/TodoList'
import ShoppingCart from './component/ShoppingCart'
import About from './component/About'
import Contact from './component/Contact'
import Home from './component/Home'
import Weather from './component/Weather'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/About" element={<About/>}></Route>
        <Route path="/Contact" element={<Contact/>}></Route>
        <Route path="/TodoList" element={<TodoList/>}></Route>
        <Route path="/ShoppingCart" element={<ShoppingCart/>}></Route>
        <Route path="/Weather" element={<Weather/>}></Route>
      </Routes>
    </Router>
    
  )
}

export default App
