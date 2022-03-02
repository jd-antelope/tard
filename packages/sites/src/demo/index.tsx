
import React, { FC } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './home'
import DropdownMenuDemo from '@ui/dropdown-menu/demo'
import './index.less'

const H5Page: FC<any> = () => {
  return (<div>
    <Routes>
      {/* <Route path='button' element={ <H5Button />}></Route> */}
      <Route path="*" element={<Home />}></Route>
    </Routes>
  </div>)
}

export default H5Page