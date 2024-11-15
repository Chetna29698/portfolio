import './Certificate.css'
import certificate from './images/certificate.png'
import { useNavigate } from 'react-router-dom'

const Certificate = () => {
    const usenavigate=useNavigate()
    usenavigate('/certificates')
    return (
        <div id="certificate">
            <h3>Certificate</h3>
            <hr></hr>

            <div id='content'>
                <img src={certificate} height={350} width={700} className='certi1'></img>
                <h4>Web Designing</h4>

                <img src={certificate} height={350} width={700} className='certi1'></img>
                <h4>React Js</h4>
            </div>
        </div>
    )
}
export default Certificate