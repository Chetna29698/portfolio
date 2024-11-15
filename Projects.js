import './Projects.css'

import weddimg from './images/weddimg.png'
import kidimg from './images/kidimg.png'
import coffeeimg from './images/coffeeimg.png'
import html from './images/html.png'
import css from './images/css.png'
import js from './images/js.png'
import bootstrap from './images/bootstrap.png'
import { useNavigate } from 'react-router-dom'


const Project = () => {

    const usenavigate=useNavigate()
    usenavigate('/projects')
    const onCardClick = () => {
        const pdfUrl = "https://github.com/Chetna29698/Wedding-invitation-card";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "https://github.com/Chetna29698/Wedding-invitation-card"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    const onKidClick = () => {
        const pdfUrl = "https://github.com/Chetna29698/Kidkinder-Project";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "https://github.com/Chetna29698/Kidkinder-Project"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    const onCoffeeClick = () => {
        const pdfUrl = "https://github.com/Chetna29698/Coffee-Shop-Project";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "https://github.com/Chetna29698/Coffee-Shop-Project"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    return (
        <div id='project'>
            <h3>Projects</h3>
            <hr></hr>

            <div id='first-project'>
                <img src={weddimg} height={320} width={450}></img>
                <div class='text'>
                    <h2>Wedding Invitation Card</h2>
                    <p>Welcome to Param Computers, where students and clients alike can register effortlessly through our intuitive MERN stack website. Seamlessly combining MongoDB, Express, React, and Node.js, our platform offers a user-friendly experience for registering and managing accounts. Join our community today and unlock access to exclusive resources tailored to your needs.</p>
                    <button type="button" class="btn btn-dark blood-btn" onClick={onCardClick}>Github</button>
                    <div className='icons'>
                        <img src={html} height={60} width={60}></img>
                        <img src={css} height={60} width={60}></img>
                        <img src={bootstrap} height={60} width={60}></img>
                    </div>
                </div>
            </div>


            <div id='second-project'>
                <img src={kidimg} height={320} width={450}></img>
                <div class='text'>
                    <h2>KidKinder</h2>
                    <p>Welcome to Param Computers, where students and clients alike can register effortlessly through our intuitive MERN stack website. Seamlessly combining MongoDB, Express, React, and Node.js, our platform offers a user-friendly experience for registering and managing accounts. Join our community today and unlock access to exclusive resources tailored to your needs.</p>
                    <button type="button" class="btn btn-dark blood-btn" onClick={onKidClick}>Github</button>
                    <div className='icons'>
                        <img src={html} height={60} width={60}></img>
                        <img src={css} height={60} width={60}></img>
                        <img src={bootstrap} height={60} width={60}></img>
                    </div>
                </div>
            </div>

            <div id='third-project'>
                <img src={coffeeimg} height={320} width={450}></img>
                <div class='text'>
                    <h2>Grand Coffee Shop</h2>
                    <p>Welcome to Param Computers, where students and clients alike can register effortlessly through our intuitive MERN stack website. Seamlessly combining MongoDB, Express, React, and Node.js, our platform offers a user-friendly experience for registering and managing accounts. Join our community today and unlock access to exclusive resources tailored to your needs.</p>
                    <button type="button" class="btn btn-dark blood-btn" onClick={onCoffeeClick}>Github</button>
                    <div className='icons'>
                        <img src={html} height={60} width={60}></img>
                        <img src={css} height={60} width={60}></img>
                        <img src={js} height={60} width={60}></img>
                        <img src={bootstrap} height={60} width={60}></img>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Project