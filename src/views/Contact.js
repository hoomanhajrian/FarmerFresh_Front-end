import React from 'react'
import ContactForm from './ContactForm'

function Contacts() {
    return (
    
      <div id="contactus">
         <div className="Contacts_Title">
          <div><h2>Get in touch with us</h2></div>
          <div className="lineDiv_horizontal">
            <div className="lineDiv"></div>
          </div>
        </div>
        <div className="Contacts">
          <h2>IF YOU HAVE ANY QUESTIONS PLEASE DO NOT HESITATE TO SEND US A MESSAGE</h2>
         <ContactForm />
      </div>
    </div>
  );
}

export default Contacts