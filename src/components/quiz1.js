// import AnswersOption from '../components/Answers'
import data from '../data/quiz1.json'
import AnswersOptions from './Answers'
import NextQuestion from '../hooks/NextQuestion'
// import { useState } from 'react'
// import currentQuestion from '../hooks/NextQuestion'

function Quiz1(){

  // const [ score, setScore ] = useState(false);

  return(
    <div>
      <h1>quiz1</h1>
      
        <div className="score-count"> Score :  </div>
      
        <>

        <div className="question-section">

          <div className="question-count">
            <span>Question 1 / {data.questions.length} </span>
          </div>

          <div className="question-content">
            <NextQuestion/>
            {/* Questions : {data.questions[0].question} */}
          </div>

        </div>

        <div className="answers-section">
          <AnswersOptions/>
        </div>

        </>
      

      

    </div>
  )
}

export default Quiz1