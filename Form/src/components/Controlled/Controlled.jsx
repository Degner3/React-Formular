import style from "./Controlled.module.scss"
import { useState } from "react";






export const Controlled = () => {

    const [fullName, setFullName] = useState('');
    const [phoneNubmer, setPhoneNubmer] = useState('');
    const [email, setEmail] = useState('');
    const [comments, setComments] = useState('');
    const [preferredMethod, setPreferredMethod] = useState('');

    // const [sendtData, setSendtData] = useState(false);

    function onSubmitForm(event) {
        
        event.preventDefault()
        console.log(event);
        console.log("fullname: ", fullName);
        console.log("Phonenumber: ", phoneNubmer);
        console.log("email: ", email);
        console.log("comments: ", comments);
        console.log("preferredMethod: ", preferredMethod);

    }

    const handleReset = () => {
        // Nulstil alle formularfelter og sendtData
        setFullName('')
        setPhoneNubmer('')
        setEmail('')
        setComments('')
        setPreferredMethod('')
      };
    


    return (
      <div className={style.div}>
        <form onSubmit={(event) => onSubmitForm(event)} className={style.form}>
          <label htmlFor="fullName">
            fullName:
            <input
              id="fullName"
              name="fullName"
              onChange={(e) => setFullName(e.target.value)}
              value={fullName}
              type="text"
            ></input>
          </label>

          <label htmlFor="phoneNumber">
            Phone Number:
            <input
              id="phoneNumber"
              name="phoneNumber"
              onChange={(e) => setPhoneNubmer(e.target.value)}
              value={phoneNubmer}
            />
          </label>

          <label htmlFor="email">
            Email:
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              name="email"
            ></input>
          </label>

          <label htmlFor="comments">
            Comments:
            <input
              onChange={(e) => setComments(e.target.value)}
              value={comments}
              type="comments"
              name="comments"
            ></input>
          </label>

          <label htmlFor="preferredMethod">
            Preferred contact method:
            <select
              onChange={(e) => setPreferredMethod(e.target.value)}
              value={preferredMethod}
              name="preferredMethod"
            >
              <option value="">Vælg en metode</option>
              <option value="telefon">Telefon</option>
              <option value="email">Email</option>
            </select>
          </label>
          <div>
            <input type="submit" value="Send" />
            <input type="reset" value="Reset" onClick={() => handleReset()} />
          </div>
        </form>
      </div>
    );
    
}