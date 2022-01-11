import './Head.css';
import logo from './static/my_logo.png'
import Main from './Main';
import About from './About'
import Contacts from './Contacts'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


function Head() {
    return ( 
    <div class="whole_head">
    <div class="head">
        <div class="logo">
            <img src={logo} alt="your_logo_4611"></img>
            <p>Портфолио<br />студента</p>
        </div>
        
        <nav class="nav-element">
            <a href="/">Домашняя страница</a>
            <a href="/about">Обо мне</a>
            <a href="/contacts">Контакты</a>
        </nav>
    </div>
    <hr></hr>
        <Router>
        <Switch>
            <Route exact path='/' component={Main} />
            <Route exact path='/about' component={About} />
            <Route exact path='/contacts' component={Contacts} />
        </Switch>
        </Router>
    </div>
    
    );
  }
  
export default Head;