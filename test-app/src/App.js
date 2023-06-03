
import './index.css'
import './App.css'
import react from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Home from './Home.js'
import About from './Components/About.js'
import Forms from './Components/Forms.js'
import Question from './Components/Page.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Component } from 'react';
import Section from './Home.js';
import Empty from './Components/counter';



  
  
  
  

  

export default function App (){
  return (
    
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Homepage</Link>
            </li>
            <li>
              <Link to="/about">About the course</Link>
            </li>
            <li>
              <Link to="/forms">Questions</Link>
            </li>
            <li>
            <Link to="/Learn">What we learned</Link>
            </li>
          </ul>
        </nav>
 
        <Switch>
          
          <Route path="/forms">
           <Forms/>
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/">
            <Home />
          </Route>

          <Route path="/Learn">
            <Empty/>
          </Route>

        </Switch>
      </div>
    </Router>
  )
}

