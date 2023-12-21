import playstore from '../asset/vecteezy_google-play-store-icon-logo-symbol_22613026.png';
import insta from '../asset/vecteezy_instagram-icon-logo-png_17743717.png'
import what from '../asset/vecteezy_whatsapp-png-icon_16716468.png'
import fiver from '../asset/png-transparent-fiverr-hd-logo-removebg-preview.png'
import you from '../asset/gratis-png-logo-de-youtube-logo-de-youtube-marketing-en-internet-suscribirse.png'
 import './social.css';
 import git from '../asset/pngimg.com - github_PNG80.png'
 export  default function Social(){
return(
    <div className='social' >

    <div className='instagram'> <a href='https://www.instagram.com/cubethrone/?hl=en' target='_blank' className='mid'> <img src={insta} alt='instagram' className='insta' /> </a></div>

    <div className='whatsapp'> <a href='https://wa.me/+919599471440' target='_blank' className='mid'> <img src={what} alt='whatsapp' className='what' /> </a></div>

    {/* <div className='playstore'><a href='https://play.google.com/store/apps/developer?id=Cubethrone&hl=en_IN&gl=US' target='_blank' className='mid'> <img src={playstore} alt='Playstore' className='play'/> </a></div> */}
    
     <div className='fiverr'><a href='https://www.fiverr.com/cubethrone' target='_blank' className='mid'> <img src={fiver} alt='fiverr' className='fiver' /> </a></div>
     <div className='youtube'><a href='https://www.youtube.com/@cubethrone' target='_blank' className='mid'> <img src={you} alt='Youtube' className='you' /> </a></div>
    
     <div className='github'> <a href='https://github.com/Ashutosh2077' target='_blank' className='mid'> <img src={git} alt='github' className='git' /> </a></div>
 </div>
);

 }