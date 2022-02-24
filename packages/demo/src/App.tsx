import { HashRouter, Route, Routes } from 'react-router-dom' 
import { useState } from 'react'
import routes from './router'
import Home from './components/home'
import './App.css'

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/">
            1111
          </Route>
          <Route 
            path="/docs"
            element={<Home />}
          />
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
