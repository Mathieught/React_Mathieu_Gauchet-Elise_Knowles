import React, {useState} from 'react';
import data from '../data/quiz1.json'

function NextQuestion() {

    const [ currentQuestion, setCurrentQuestion ] = useState(0);
    const [ SeeResult, setSeeResult ] = useState(false);
    const [ Score, setScore ] = useState(0);

    // arret a la fin du quiz 
    const handleQuestion = (e) => {

        const answerChoice = e.target.value
        const isCorrect = data.questions[currentQuestion].isCorrect

        if( isCorrect === answerChoice ){
            console.log("Bonne réponse")
            setScore(Score + 1)
        } else {
            console.log("Mauvaise réponse")
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
        return ( 
            <div class="answerContainer"> 
                {data.questions[currentQuestion].answersOptions.map((answersOptions) => 
                    <button class="answerBtn" onClick={(e) => handleQuestion(e, "value")} value={answersOptions.answer} > {answersOptions.answer} </button>
                )}
            </div>
            )
    }

    return(
        <section class="container">
            {/* <h1 class="title">quiz1</h1> */}
            { SeeResult ? ( 
                <div class="score">  score : {Score} </div>
            ) : (
                <>
                <div class="topContainer">
                    <div className="question-content">
                        <p> Question : { data.questions[currentQuestion].question} </p>
                    </div>
                    <div className="question-count">
                        <span>{currentQuestion + 1}/{data.questions.length}</span>
                    </div>
                </div>
                <div className="answers-section">
                    <AnswersOptions/>
                </div>
                </>
            ) }
        </section>
    );

}

export default NextQuestion;

