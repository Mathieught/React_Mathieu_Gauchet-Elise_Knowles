import {useState} from 'react';

function Quiz(props) {

    // pour récupérer les data du quiz : questions et réponses
    const {infoQuestion} = props;

    // UseSate
    const [ currentQuestion, setCurrentQuestion ] = useState(0);
    const [ SeeResult, setSeeResult ] = useState(false);
    const [ Score, setScore ] = useState(0);

    const handleQuestion = (e) => {

        // valeur du bouton cliqué lors du choix de la réponse
        const answerChoice = e.target.value
        // bonne réponse à la question
        const isCorrect = infoQuestion[currentQuestion].isCorrect

        // Vérifie si la réponse choisi est correct, si oui on incrémente de 1 le score
        if( isCorrect === answerChoice ){
            //console.log("Bonne réponse")
            setScore(Score + 1)
        }

        // on va a la questions suivante, si c'est la dernière question on affiche le résultat
        const next = currentQuestion + 1;
        if( next < infoQuestion.length ){
            setCurrentQuestion(next);
        } else {
            // alert("fin du quiz")
            setSeeResult(true)
        }
    }

    // on récupère les réponses de la question correspondante et au click on récupère la value de la réponse choisi 
    const AnswersOptions = () => {
        return ( 
            <div className="answerContainer"> 
                {infoQuestion[currentQuestion].answersOptions.map((answersOptions, index) => 
                    <button className="answerBtn" onClick={(e) => handleQuestion(e, "value")} value={answersOptions.answer} key={index} > {answersOptions.answer} </button>
                )}
            </div>
            )
    }

    // on affiche le quiz
    return(
        <section className="container">

            { SeeResult ? ( 
                <div className="score">  Score : {Score} / 10 </div>
            ) : (
                <>
                <div className="topContainer">
                    <div className="question-content">
                        <p> Question : { infoQuestion[currentQuestion].question} </p>
                    </div>
                    <div className="question-count">
                        <span>{currentQuestion + 1}/{infoQuestion.length}</span>
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

export default Quiz;

