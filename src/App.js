import React from 'react';
import Nav from './components/Nav'
import Home from './components/Home'
import Details from './components/DetailClass'
import About from './components/About'
import Footer from './components/Footer'
import {BrowserRouter as Router, Switch,Route} from "react-router-dom"

function App() {
  return (
    
    <Router>
        
        <Nav />
        <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/detail/:id" component={Details}/>
        <Route path="/aboutme" component={About}/>        
        </Switch>
        <Footer/>
    </Router>
   
  );
}

export default App;
