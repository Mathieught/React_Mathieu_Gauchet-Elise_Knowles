import './Sass/main.sass';
import Header from './components/Header'
import Home from './components/Home'
import quiz1 from './components/quiz1'
import quiz2 from './components/quiz2'
import NotFound from './components/notFound'
import {BrowserRouter as Router, Route ,Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/quiz1" exact component={quiz1}/>
          <Route path="/quiz2" exact component={quiz2}/>
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
