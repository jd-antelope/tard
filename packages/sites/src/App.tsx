import { Route, Routes } from 'react-router-dom' 
import Portal from './pages/portal'
import LayoutComponent from './layouts'
import './index.less'

export default function IndexPage () {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <Portal /> } />
        <Route
          path="*" element={
            <LayoutComponent />
          }
        />
      </Routes>
    </div>
  )
}
