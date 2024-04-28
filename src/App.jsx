import { useState } from 'react'

import './App.css'
import Navbar from './Components/Navbar'
import NewsBoard from './Components/NewsBoard'
import NewsItem from './Components/NewsItem'

function App() {
  
  const [category,setCategory] = useState("general");
  return (
    <div>
     <Navbar setCategory={setCategory}/>
     <NewsBoard category={category} />
    </div>
  )
}

export default App
