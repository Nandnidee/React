import './LandingPage.css';
import img from '../assest/12085233_20944038.jpg'
import Navbar from '../component/navbar';
import { Link} from 'react-router-dom';
function Landing() {

  return (
  <div className='landing'>
    <Navbar/>
  <div className='content'>
    <p className='interact'>A Platform for Getting Answer To Your QUESTIONS.</p>
    <ul>
      <li>Find your Alumni.</li>
      <li>Take guidance</li>
      <li>Build Connection and many more</li>
    </ul>
    <button className='lan-butn' >Log In</button>
  </div>
  </div>
  );
}

export default Landing;
