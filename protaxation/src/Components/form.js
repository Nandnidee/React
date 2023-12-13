import './form.css';
import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Form = () => {
  const form = useRef();

  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    Num: '',
    select: '',
    message: '',
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_9uom5vk', 'template_h5849x5', form.current, 'MdscHydgn47pl7Hll')
      .then(
        (result) => {
          console.log(result.text);
          alert('Form Submitted Successfully');
          // Clear the form fields after submission
          setFormData({
            user_name: '',
            user_email: '',
            Num: '',
            select: '',
            message: '',
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleOptionChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <div className="form_main">
        <form ref={form} onSubmit={sendEmail}>
          <p className="heading">Free Consultation</p>
          <p className="sub">Our Tax Experts will contact you!</p>
          <input
            type="text"
            placeholder="Full Name"
            className="input"
            name="user_name"
            value={formData.user_name}
            onChange={(e) => setFormData({ ...formData, user_name: e.target.value })}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="input"
            name="user_email"
            value={formData.user_email}
            onChange={(e) => setFormData({ ...formData, user_email: e.target.value })}
            required
          />
          <input
            type="text"
            name="Num"
            placeholder="Phone Number"
            className="input"
            value={formData.Num}
            onChange={(e) => setFormData({ ...formData, Num: e.target.value })}
            required
          />
          <p className="option">Status type</p>
          <select
            value={formData.select}
            name="select"
            onChange={handleOptionChange}
            className="option"
          >
            <option value=""></option>
            <option value="US Citizen / Green Card Holder">US Citizen / Green Card Holder</option>
            <option value="Foreign National Individual">Foreign National Individual</option>
            <option value="Expatriate Individual">Expatriate Individual</option>
          </select>
          <textarea
            name="message"
            placeholder="Kindly detail your circumstances to allow us to respond appropriately"
            className="area"
            rows={6}
            cols={20}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          ></textarea>
          <button type="submit" className="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
