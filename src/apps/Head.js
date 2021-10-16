import './Head.css';
import logo from './my_logo.png'

function Head() {
    return (
    <div class="whole_head">
    <div class="head">
        <div class="logo">
            <img src={logo} alt="your_logo_4611"></img>
            <p>Портфолио<br />студента</p>
        </div>
        
        <nav class="nav-element">
            <a href="">Домашняя страница</a>
            <a href="">Обо мне</a>
            <a href="">Контакты</a>
        </nav>
    </div>
    <hr></hr>
    </div>
    );
  }
  
export default Head;