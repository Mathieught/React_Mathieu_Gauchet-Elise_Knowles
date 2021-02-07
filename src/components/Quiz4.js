import Quiz from '../hooks/Quiz'
import data from '../data/quiz.json'

function Quiz4(){
  return(
    <div>
        <p> Quiz n°4 : Musique </p>
        <Quiz infoQuestion={data.questions4}/>
    </div>
  )
}

export default Quiz4;