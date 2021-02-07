import Quiz from '../hooks/Quiz'
import data from '../data/quiz.json'

function Quiz1(){

  return(
    <div>
      <h1 className="title"> Quiz n°1 : Géographie - Les capitales</h1>
      <Quiz infoQuestion={data.questions1}/>
    </div>
  )
}

export default Quiz1
