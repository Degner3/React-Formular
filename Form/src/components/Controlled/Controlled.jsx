import style from "./Controlled.module.scss";
import { useState } from "react";

// Controlled input:

// Controller (kontrolleret): Er en form hvor man ved hver tast "lytter" efter på input felter med et onChange event og opdaterer tilstanden løbende.

export const Controlled = () => {

  // States til at gemme strings fra input felter
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [comments, setComments] = useState("");
  const [preferredMethod, setPreferredMethod] = useState("");

  const [sendtData, setSendtData] = useState(false);

  function onSubmitForm(event) {
    event.preventDefault();
    
     // funktion der tager name og email og sender dem med en post....
    const data = {
      fullName,
      phoneNumber,
      email,
      comments,
      preferredMethod,
    };

    // Opdater sendtData med de indtastede oplysninger
    setSendtData(data);

    console.log(event);
    console.log("fullname: ", setFullName);
    console.log("Phonenumber: ", setPhoneNumber);
    console.log("email: ", setEmail);
    console.log("comments: ", setComments);
    console.log("preferredMethod: ", setPreferredMethod);
  }

  const handleReset = () => {
    // Nulstil alle formularfelter og sendtData
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
          Full Name:
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
            type="number"
          />
        </label>

        <label htmlFor="email">
          Email:
          <input
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            name="email"
          ></input>
        </label>

        <label htmlFor="comments">
          Comments:
          <textarea
          id="comments"
            onChange={(e) => setComments(e.target.value)}
            value={comments}
            type="comments"
            name="comments"
          ></textarea>
        </label>

        {/* <label htmlFor="preferredMethod">
          Preferred contact method:
          <select
            id="preferredMethod"
            value={preferredMethod}
            name="preferredMethod"
            type="radio"
          >
            <option value="">Choose a method</option>
            <option value="phoneNumber">Phone Number</option>
            <option value="email">Email</option>
          </select>
        </label> */}
        <div className={style.method}>
          <span>Preferred contact method:</span>
          <label htmlFor="preferredMethod">
            Phone
            <input
              id="phoneNumber"
              name="preferredMethod"
              type="radio"
              checked={preferredMethod === "phone"}
              onClick={() => setPreferredMethod("phone")}
            />
          </label>
          <label htmlFor="emailMethod">
            Email
            <input
              id="email"
              name="contactMethod"
              type="radio"
              checked={preferredMethod === "email"}
              onClick={() => setPreferredMethod("email")}
            />
          </label>
        </div>

        <div>
          <input type="submit" value="Send" />
          <input type="reset" value="Reset" onClick={() => handleReset()} />
        </div>

        <div className={style.info}>
          {sendtData && (
            <ul>
              <li>
                <h2>Informations:</h2>
              </li>
              <li>
                Fulde navn: <p>{sendtData.fullName}</p>
              </li>
              <li>
                Telefonnummer: <p>{sendtData.phoneNumber}</p>
              </li>
              <li>
                Email: <p>{sendtData.email}</p>
              </li>
              <li>
                Kommentar: <p>{sendtData.comments}</p>
              </li>
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