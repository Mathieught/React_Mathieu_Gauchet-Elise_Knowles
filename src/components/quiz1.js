// import AnswersOption from '../components/Answers'
// import data from '../data/quiz1.json'
import NextQuestion from '../hooks/NextQuestion'
// import { useState } from 'react'
// import currentQuestion from '../hooks/NextQuestion'

function Quiz1(){

  // const [ score, setScore ] = useState(false);

  return(
    <div>
      <h1>quiz1</h1>

          <div className="question-section">
            <NextQuestion/>
          </div>

    </div>
  )
}

export default Quiz1