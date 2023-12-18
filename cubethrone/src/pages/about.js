import './about.css';

import logo from '../asset/Cubethrone_Logo.png'
import Social from '../component/social';
export default function About(){
    return(
        <div className="about">
            <div className='main-about'>
               <h1 className='gradient-text'> Hello I'm </h1>
                <h1 className='cubethrone-name'>CubeThrone</h1>
                <p className='unity'>Unity Devloper</p>
                <a href=' https://www.fiverr.com/cubethrone' target='_blank' className='hire'>Hire Me</a>
             <Social/>
            </div>
            <img src={logo} alt="CUBETHRONE" className='rotating-container'/>
        </div>
    );
}