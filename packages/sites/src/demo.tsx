import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import H5Demo from './demo/index'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <H5Demo />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('demo')
)
