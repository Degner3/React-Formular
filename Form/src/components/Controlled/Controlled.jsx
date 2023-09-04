import style from "./Controlled.module.scss";
import { useState } from "react";

export const Controlled = () => {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [comments, setComments] = useState("");
  const [preferredMethod, setPreferredMethod] = useState("");

  const [sendtData, setSendtData] = useState(false);

  function onSubmitForm(event) {
    event.preventDefault();
    
    const data = {
      fullName,
      phoneNumber,
      email,
      comments,
      preferredMethod,
    };

    
    setSendtData(data);
  }

  const handleReset = () => {
    
    setFullName("");
    setPhoneNumber("");
    setEmail("");
    setComments("");
    setPreferredMethod("");
    setSendtData(false);
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
            onChange={(e) => setPhoneNumber(e.target.value)}
            value={phoneNumber}
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
          <textarea
            onChange={(e) => setComments(e.target.value)}
            value={comments}
            type="comments"
            name="comments"
          ></textarea>
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
          <input
            type="reset"
            value="Reset"
            onClick={() => handleReset()}
          />
        </div>

        <div className={style.info}>
          {sendtData && (
            <ul>
              <li><h2>Informations:</h2></li>
              <li>Fulde navn: <p>{sendtData.fullName}</p></li>
              <li>Telefonnummer: <p>{sendtData.phoneNumber}</p></li>
              <li>Email: <p>{sendtData.email}</p></li>
              <li>Kommentar: <p>{sendtData.comments}</p></li>
              <li>
                Foretrukken kontaktmetode: <p>{sendtData.preferredMethod}</p>
              </li>
            </ul>
          )}
        </div>
      </form>
    </div>
  );
};