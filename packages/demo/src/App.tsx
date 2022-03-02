/* eslint-disable react/jsx-curly-brace-presence */
import { HashRouter, Route, Routes } from 'react-router-dom' 
import { useState } from 'react'
import routes from './router'
import Home from './components/home'
import './App.css'

function App () {
  return (
    <div className="app">
      <Routes>
         
        <Route 
          path="/docs"
          element={ <Home /> }
        />
        <Route path="/comps/**">
            1111
        </Route>
      </Routes>
    </div>
  )
}

export default App
