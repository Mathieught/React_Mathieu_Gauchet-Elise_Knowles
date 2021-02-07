import Quiz from '../hooks/Quiz'
import data from '../data/quiz.json'

function Quiz3(){
  return(
      <div>
          <h1 className="title"> Quiz n°3 - Culture Générale</h1>
          <Quiz infoQuestion={data.questions3}/>
      </div>
  )
}

export default Quiz3;