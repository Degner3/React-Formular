import style from "./Uncontrolled.module.scss"

import { useState } from "react"


// Uncontrolled input:

// Uncontrolled (ukontrolleret): Er en form hvor man "samler" alle input felternes værdier til sidst når brugeren trykker submit. 

export const Uncontrolled = () => {

   

    return (
      <div className={style.div}>
        <form className={style.form}>
          <label htmlFor="fullName">
            fullName:
            <input
              id="fullName"
              name="fullName"
              type="text"
            ></input>
          </label>

          <label htmlFor="phoneNumber">
          Phone Number:
          <input
            id="phoneNumber"
            name="phoneNumber"
            type="number"
          />
        </label>

        <label htmlFor="email">
          Email:
          <input
            id="email"
            name="email"
            type="email"
          ></input>
        </label>

        <label htmlFor="comments">
          Comments:
          <textarea
            id="comments"
            name="comments"
            type="comments"
          ></textarea>
        </label>

        <label htmlFor="preferredMethod">
          Preferred contact method:
          <select
            id="preferredMethod"
            name="preferredMethod"
          >
            <option value="">Choose a method</option>
            <option value="phoneNumber">Phone Number</option>
            <option value="email">Email</option>
          </select>
        </label>



        </form>
      </div>
    );


}