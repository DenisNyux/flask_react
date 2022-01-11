import my_photo from './static/my_photo.jpg'
import './About.css'

function About() {
    return (
    <div class="all_about">
    <div class="about">
      <img src={my_photo} alt="your_logo_4611" class="my_ph"></img>
      <div class="desc_area">
      <h1>Нюхалов Денис</h1>
      <p>Студент 4ого курса РГПУ им. Герцена. ИИТиТО, ИВТ.</p>
      </div>
    </div>
    </div>
    );
  }
  
export default About;