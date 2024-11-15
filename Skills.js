import './Skills.css'
import html from './images/html.png'
import css from './images/css.png'
import js from './images/js.png'
import jquery from './images/jquery.png'
import bootstrap from './images/bootstrap.png'
import react from './images/react.png'
import {  useNavigate } from 'react-router-dom'

const Skills = () => {
    const usenavigate=useNavigate()
    usenavigate('/skills')

    return (
        <div id='skill'>
            <h3>Skills</h3>
            
            <hr></hr>
            <h1></h1>
           

            <div id='skill-grid'>
                <div class="grid"><img  src={html} height={200} width={200}></img></div>
                <div class="grid"><img  src={css} height={200} width={200}></img></div>
                <div class="grid"><img  src={js} height={200} width={200}></img></div>
                <div class="grid"><img  src={jquery} height={200} width={200}></img></div>
                <div class="grid"><img  src={bootstrap} height={200} width={200}></img></div>
                <div class="grid"><img  src={react} height={200} width={200}></img></div>
            </div>
        </div>

       
    )
}
export default Skills