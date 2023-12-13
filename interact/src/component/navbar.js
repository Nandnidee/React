import './navbar.css'
import  logo from '../assest/png/logo-no-background.png';
import { useAuth0 } from "@auth0/auth0-react";
export default function Navbar(){
  const { loginWithRedirect } = useAuth0();
  return(
<div className='navbar'>
        
    <img src={logo} className='logo'/>
    <div className='link'>
   <p className='signin' onClick={() => loginWithRedirect()}>Sign In</p>
    <p className='signup'>Sign Up</p>
    </div>
    </div>
  );
}