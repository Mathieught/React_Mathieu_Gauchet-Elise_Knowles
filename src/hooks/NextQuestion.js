import React, {useState} from 'react';
import data from '../data/quiz1.json'

function NextQuestion() {

    const [ currentQuestion, setCurrentQuestion ] = useState(0);

    // arret a la fin du quiz 
    const setNextQuestion = () => {
        const nextQuestion = currentQuestion + 1;
        if( nextQuestion < data.questions.lenght ){
            setCurrentQuestion(nextQuestion);
        } else {
            console.log("fin du quiz")
            // setScore(true)
        }
    }

    const AnswersOptions = () => {
        return ( 
            <div> 
                {data.questions[currentQuestion].answersOptions.map((answersOptions) => 
                    <button onClick={() => setCurrentQuestion(currentQuestion + 1)} > {answersOptions.answer} </button>
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

