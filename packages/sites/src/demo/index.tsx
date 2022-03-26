
import { FC } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './home'
import './index.less'

const H5Page: FC<any> = () => {
  return (<div>
    <Routes>
      <Route path="*" element={<Home />}></Route>
    </Routes>
  </div>)
}

export default H5Page