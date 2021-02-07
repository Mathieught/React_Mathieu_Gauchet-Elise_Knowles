import Quiz from '../hooks/Quiz'
import data from '../data/quiz.json'

function Quiz2(){
  return(
    <div>
      <p> Quiz n°2 : RGPD - maîtrisez-vous les grandes règles sur la protection de vos données ? </p>
      <Quiz infoQuestion={data.questions2}/>
    </div>
  )
}

export default Quiz2;