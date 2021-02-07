import './Sass/main.sass';
import Header from './components/Header'
import Home from './components/Home'
import quiz1 from './components/Quiz1'
import quiz2 from './components/Quiz2'
import quiz3 from './components/Quiz3'
import quiz4 from './components/Quiz4'
import NotFound from './components/notFound'
import {BrowserRouter as Router, Route ,Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/Quiz1" exact component={quiz1}/>
          <Route path="/Quiz2" exact component={quiz2}/>
          <Route path="/Quiz3" exact component={quiz3}/>
          <Route path="/Quiz4" exact component={quiz4}/>
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
