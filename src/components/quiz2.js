import Quiz from '../hooks/Quiz'
import data from '../data/quiz.json'

function Quiz2(){
  return(
    <div>
      <h1 className="title"> Quiz n°2 : RGPD - maîtrisez-vous les grandes règles sur la protection de vos données ? </h1>
      <Quiz infoQuestion={data.questions2}/>
    </div>
  )
}

export default Quiz2;