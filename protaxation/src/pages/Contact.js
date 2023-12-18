import './contact.css'
import whatsapp from '../asset/icons8-whatsapp-48.png';
import location from '../asset/icons8-location-50.png';
export default function Contact(){

    return(
        <>
        <p className="main-head ">Contact US</p>
        <div className='m'>
        <a href='https://wa.me/+16072951196' target='_blank' ><div className='for'>

        <img src={whatsapp}  />+16072951196
        </div></a>
        <a href='https://wa.me/+12092004304' target='_blank' > <div className='for'>
        <img src={whatsapp}/>+12092004304
        </div></a>
        <div className='for'>
            <img src={location}/>4795 Commercial Drive
New Hartford, NY 13413
         </div>
         </div>
        </>
    );
}