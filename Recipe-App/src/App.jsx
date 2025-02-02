import { useState } from 'react'
import { Route , Routes} from 'react-router-dom'

import './App.css'
import Mainpage from './components/Mainpage'
import MealInfo from './components/MealInfo'

function App() {

  return (
    
      // <Mainpage />
      <Routes>
          <Route path='/' element={<Mainpage />} />
          <Route path='/:mealid' element={<MealInfo />}/>
      </Routes>
  )
}

export default App
