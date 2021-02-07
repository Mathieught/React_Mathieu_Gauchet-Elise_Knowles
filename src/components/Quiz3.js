import Quiz from '../hooks/Quiz'
import data from '../data/quiz.json'

function Quiz3(){
  return(
      <div>
          <p> Quiz n°3 - Culture Générale</p>
          <Quiz infoQuestion={data.questions3}/>
      </div>
  )
}

export default Quiz3;