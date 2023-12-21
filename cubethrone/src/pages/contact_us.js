import Social from '../component/social.js'
import './contact.css'
import git from '../asset/pngimg.com - github_PNG80.png'
import './contact.css'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6togqqd', 'template_tjcrzhz', form.current, 'MdscHydgn47pl7Hll')
      .then((result) => {
        const inputs = form.current.getElementsByClassName('input');
        Array.from(inputs).forEach((input) => (input.value = ""));
        alert('Email Sent Successfully');
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="connect">       
    <div className='socialmedia'>
    Social Media
      <Social/>
    </div>
    <p className='con'>Contact Me</p>
    <form ref={form} onSubmit={sendEmail} className='form'>
      <label className='name'>Name</label>
      <input className='input' type="text" name="user_name" />
      <label className='name' >Email</label>
      <input   className='input' type="email" name="user_email" />
      <label className='name'>Message</label>
      <textarea  className='input' name="message" />
      <input  className='butt' type="submit" value="Send" />
    </form>
    <a href='https://www.fiverr.com/deepika_singh25?up_rollout=true' target='_blank' className='dee'>Made By Deepika Singh</a>
    </div>
  );
};