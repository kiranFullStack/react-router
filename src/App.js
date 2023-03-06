import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Notfound from './Notfound'
import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'

function App() {
  return (
    <div className='App'>
      <h1>React Router Starter</h1>
      <Routes>
        <Route
          path='/'
          element={<Page1 />}
        />

        <Route path='/page2'>
          <Route
            index
            element={<Page2 />}
          />
          <Route
            path='subpage'
            element={<Page2 />}
          />
          <Route
            path=':id'
            element={<Page2 />}
          />
          <Route
            path='subpage/sub-subpage'
            element={<Page2 />}
          />
        </Route>

        <Route
          path='/page3'
          element={<Page3 />}
        />
        <Route
          path='*'
          element={<Notfound />}
        />
      </Routes>
    </div>
  )
}

export default App
