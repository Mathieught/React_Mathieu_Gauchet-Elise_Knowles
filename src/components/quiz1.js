import Quiz from '../hooks/Quiz'
//import data from '../data/quiz1.json'
import data from '../data/quiz.json'

function Quiz1(){

  return(
    <div>
      <p> Quiz n°1 : Géographie - Les capitales</p>
      <Quiz infoQuestion={data.questions1}/>
    </div>
  )
}

export default Quiz1