
// React + Gatsby
import React from 'react'

const Popup = () => (
  <div id="popup" className="popup-nav">
    <div className="heading">
      Ask a Question
    </div>
    <form action="" method="post">
      <label for="name">
        <span>
          Name <span className="required">*</span>
        </span>
        <input type="text" className="input-field" name="name" placeholder="Your full name.." />
      </label>
      <label for="email">
        <span>
          Email <span className="required">*</span>
        </span>
        <input type="email" className="input-field" name="email" placeholder="user@email.com" />
      </label>
      <label>
        <span>Telephone</span>
        <input type="text" className="tel-number-field" name="tel_no_3" placeholder="1234567890" maxlength="15"  />
      </label>
      <label for="subject">
        <span>Regarding</span>
        <select name="subject" className="select-field">
          <option value="General">General</option>
          <option value="Pay">Pay</option>
          <option value="Medical">Medical</option>
          <option value="Other">Other</option>
        </select>
      </label>
      <label for="message">
        <span>Message <span className="required">*</span>
        </span>
        <textarea name="message" className="textarea-field" />
      </label>
      <label>
        <span>&nbsp;</span>
        <input type="submit" value="Submit" />
      </label>
    </form>
  </div>
)

export default Popup
