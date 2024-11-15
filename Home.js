import './Home.css'
import img from './images/profile.png'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const usenavigate=useNavigate()
    usenavigate('/home')
    const onButtonClick=()=>{
        const pdfUrl = "https://drive.google.com/file/d/1Xz4EhhJqHZ18qC3toVpf9JSiuLmumz4S/view?pli=1";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "https://drive.google.com/file/d/1Xz4EhhJqHZ18qC3toVpf9JSiuLmumz4S/view?pli=1"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
       
    }
    
    return (
        <div id="home">
            <img className='image' src={img} height={350} width={350}></img>
            <div id='content'>
                <h2>CHETNA DEKHANE</h2>
                <small className='typing-container'>FRONTEND DEVELOPER
                    <span className='cursor'></span>
                </small>
                <p>Experienced frontend developer proficient in HTML, CSS, and JavaScript, with a solid foundation in React, Redux, Redux Toolkit, Bootstrap, and Tailwind CSS. Backed by 3 months of hands-on experience in PHP, JavaScript, and WordPress development, I bring a versatile skill set to craft engaging and dynamic web experiences</p>
                <button type="button" class="btn-home" onClick={onButtonClick}>Download Resume</button>
            </div>    
        </div>
    )
}
export default Home