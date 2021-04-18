import './App.css'
import PageComponent from './components/PageComponent'
import Home from './components/Home'
import { BrowserRouter as Router, Route} from 'react-router-dom'


function App() {
  return (
    <Router>
    <div className="App">
     <Route exact path='/' component={Home}/>
     <Route path='/:id' component={PageComponent}/>
    </div>
    </Router>
  )
}

export default App;
