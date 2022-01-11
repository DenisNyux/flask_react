import './Main.css'
import myJson from './static/jsem_links3.js'
import myJson2 from './static/jsem_links4.js'


function ListVal(props) {
    return <li><a href={props.link}>{props.name}</a></li>
}

function Post(props) {   
    return (
        <div class="post">
            <h3>Лабораторные работы за семестр №{props.sem_num}</h3>
            <ul>
                {
                    props.json_file.map((el) => <ListVal link={el.link} name={el.name} />)
                }
            </ul>
        </div>
    )
}


function Main() {
    return (
        <div>
            <div class="body_area">
                <Post sem_num="3" json_file={myJson}/>
                <Post sem_num="4" json_file={myJson2}/>
            </div>
        </div>
    );
  }
  
export default Main;