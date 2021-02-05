import data from '../data/quiz1.json'

const AnswersOptions = () => {
    return ( 
    <div> 
        {data.questions[0].answersOptions.map((answersOptions) => 
            <button> {answersOptions.answer} </button>
        )} 
    </div>
    )
}

export default AnswersOptions;
