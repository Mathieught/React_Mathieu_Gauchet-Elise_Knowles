// import logo from './logo.svg';
import './Sass/_base.scss';
import Header from './components/Header'
import Home from './components/Home'
import quizz1 from './components/quizz1'
import quizz2 from './components/quizz2'
import {BrowserRouter as Router, Route} from 'react-router-dom'

function App() {
  return (
    
    <div className="App">
      <Router>
        <Header/>
        <Route path="/" exact component={Home}/>
        <Route path="/quizz1" exact component={quizz1}/>
        <Route path="/quizz2" exact component={quizz2}/>
      </Router>
    </div>
  );
}

export default App;
