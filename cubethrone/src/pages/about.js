import './about.css';
import logo from '../asset/Cubethrone_Logo.png'
export default function About(){
    return(
        <div className="about">
            <div className='main-about'>
               <h1 className='gradient-text'> Hello I'm </h1>
                <h1 className='cubethrone-name'>CubeThrone</h1>
                <p className='unity'>Unity Devloper</p>
                <a href='#' className='hire'>Hire Me</a>
            </div>
            <img src={logo} alt="IMAGE" className='rotating-container'></img>
        </div>
    );
}