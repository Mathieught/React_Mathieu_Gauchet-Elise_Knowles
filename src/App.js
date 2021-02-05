// import logo from './logo.svg';
import './Sass/_base.scss';
import Header from './components/Header'
import Home from './components/Home'
import quiz1 from './components/quiz1'
import quiz2 from './components/quiz2'
import {BrowserRouter as Router, Route} from 'react-router-dom'

function App() {
  return (
    
    <div className="App">
      <Router>
        <Header/>
        <Route path="/" exact component={Home}/>
        <Route path="/quiz1" exact component={quiz1}/>
        <Route path="/quiz2" exact component={quiz2}/>
      </Router>
    </div>
  );
}

export default App;
