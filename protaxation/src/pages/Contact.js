import './contact.css'
export default function Contact(){

    return(
        <>
        <p className="main-head">Contact US</p>
        <hr/><br/>
        <p className="head">CONTACT US WITH QUESTIONS</p>
        <form className="for">
        <p className="text">First Name</p>
        <input type="text" className="input"></input>
        <p className="text">Last Name</p>
        <input type="text" className="input"></input>
        <p className="text">Phone Number</p>
        <input type="text" className="input"></input>
        <p className="text">Fax </p>
        <input type="text" className="input"></input>
        <p className="text">Address</p>
        <input type="text" className="input"></input>
        <p className="text">Email</p>
        <input type="email" className="input"></input>
        <p className="text">Client Type</p>
        <div>
        <input type="radio" className="input" value={'US Citizen / Green Card Holder'}/> US Citizen / Green Card Holder</div>
        <div><input type="radio" className="input" value={'Foreign National Individual'}/> Foreign National Individual</div>
        <div><input type="radio" className="input" value={'Expatriate Individual'}/> Expatriate Individual</div>
        <div><input type="radio" className="input" value={'Corporate'}/> Corporate</div>
        <div><input type="radio" className="input" value={'Partnership'}/> Partnership</div>

        <p className="text">Please tell us where you heard about us.</p>
        <input type="text" className="input"></input>

        <p className="text">QUESTIONS</p>
        <textarea cols={5} rows={5} className="input">

        </textarea>
        </form>
        <br/> <br/>
        </>
    );
}