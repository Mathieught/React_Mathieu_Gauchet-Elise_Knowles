import React, {useState} from 'react';
import data from '../data/quiz1.json'

function NextQuestion() {

    const [ currentQuestion, setCurrentQuestion ] = useState(0);

    const [ SeeResult, setSeeResult ] = useState(false);

    // arret a la fin du quiz 
    const handleQuestion = () => {

        // const Ok = data.questions[currentQuestion].answersOptions.map((answersOptions) => answersOptions.isCorrect)
        const Ok = data.questions[currentQuestion].isCorrect
        console.log(Ok)

        const Test = data.questions[currentQuestion].answersOptions.map((answersOptions) => answersOptions.answer)
        console.log(Test)

        if( Ok === Test ){
            console.log("Bonne réponse")
        } else {
            console.log("nop")
        }

        const next = currentQuestion + 1;
        if( next < data.questions.length ){
            setCurrentQuestion(next);
        } else {
            // alert("fin du quiz")
            setSeeResult(true)
        }
    }

    const AnswersOptions = () => {

        const [ value, setValue] = useState();
        const selectValue = selectedValue => {
            setValue(selectedValue)
            console.log(value)
        }

        return ( 
            <div> 
                {data.questions[currentQuestion].answersOptions.map((answersOptions) => 
                    // <button onClick={handleNextQuestion} > {answersOptions.answer} </button>
                    <button onClick={() => handleQuestion()} value={answersOptions.answer} > {answersOptions.answer} </button>
                    // <button onClick={() => handleNextQuestion(currentQuestion + 1)} > {answersOptions.answer} </button>
                )}
            </div>
            )
    }

    return(
        <div>
            { SeeResult ? ( 
                <div>  score : </div>
            ) : (
                <>
                    <div className="question-count">
                        <span>Question {currentQuestion + 1} / {data.questions.length} </span>
                    </div>

                    <div className="question-content">
                        <p> Question : { data.questions[currentQuestion].question} </p>
                    </div>

                    <div className="answers-section">
                        <AnswersOptions/>
                    </div>
                </>
            ) }

        </div>
    );

}

export default NextQuestion;

