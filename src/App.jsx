import { useState } from 'react';
import learners from './utilities/data.mjs';

import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const [learnerData, setLearnerData] = useState({
    learners: []
  })
  let newLearnerArr = [...learners];
   console.log(newLearnerArr[0].scores[0])

  return (
    <>
      
    </>
  )
}

export default App


