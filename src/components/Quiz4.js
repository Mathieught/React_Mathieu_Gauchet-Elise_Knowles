import Quiz from '../hooks/Quiz'
import data from '../data/quiz.json'

function Quiz4(){
  return(
    <div>
        <h1 className="title"> Quiz n°4 : Musique </h1>
        <Quiz infoQuestion={data.questions4}/>
    </div>
  )
}

export default Quiz4;