import React, {useState} from 'react';
import data from '../data/quiz1.json'

function NextQuestion() {

    const [ currentQuestion, setCurrentQuestion ] = useState(0);

    // arret a la fin du quiz 
    const handleNextQuestion = () => {
        const next = currentQuestion + 1;

        if( next < data.questions.length ){
            setCurrentQuestion(next);
        } else {
            alert("fin du quiz")
            // setScore(true)
        }
    }

    const AnswersOptions = () => {
        return ( 
            <div> 
                {data.questions[currentQuestion].answersOptions.map((answersOptions) => 
                     <button onClick={handleNextQuestion} > {answersOptions.answer} </button>
                    // <button onClick={() => setCurrentQuestion(currentQuestion + 1)} > {answersOptions.answer} </button>
                )} 
            </div>
            )
    }

    return(
        <div>
            <p> Question : { data.questions[currentQuestion].question} </p>
            <div className="answers-section">
                <AnswersOptions/>
            </div>
        </div>
    );

}

export default NextQuestion;

