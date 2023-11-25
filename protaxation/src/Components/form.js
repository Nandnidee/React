import './form.css';
import React,{useState} from 'react';

const Form=()=>{
  const [selectedOption, setSelectedOption] = useState('');
    
      const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
      };
  return(
      <>
    <div className='form_main'>
     <form>
      <p className='heading'>Free Consultation</p>
      <p className='sub'>Our Tax Experts will contact you!</p>
      <input type='text' placeholder='Full Name'className='input' required></input>
      <input type='email' placeholder='Email'className='input' required></input>
      <input type='text' placeholder='Phone Number' className='input' required></input>
      <p className='option'>Status type</p>
      <select value={selectedOption} onChange={handleOptionChange} className='option'>
          <option value=""></option>
          <option value="US Citizen / Green Card Holder">US Citizen / Green Card Holder</option>
          <option value="Foreign National Individual">Foreign National Individual</option>
          <option value="Expatriate Individual">Expatriate Individual</option>
        </select>
        <textarea placeholder='Kindly detail your circumstances to allow us to respond appropriately' className='area' rows={6} cols={20}></textarea>
      <button type="submit" className='submit'>Submit</button>
     </form>

    </div>

    </>
  );
}
export default Form;