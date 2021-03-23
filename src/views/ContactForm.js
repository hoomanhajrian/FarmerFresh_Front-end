import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("mpzkadle");
  if (state.succeeded) {
      return <p>Thanks for entering in contact! You will hear from us soon!</p>;
  }
  return (
      <div className="contactForm">
          <form onSubmit={handleSubmit}>
           <input
                  id="name"
                  type="name"
                  name="name"
                  placeholder="Name"
          />
          <ValidationError
            prefix="name"
            field="name"
            errors={state.errors}
              />
          
          <input
            id="email"
            type="email"
                  name="email"
                  placeholder="Email"
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
          />
          
          <textarea
            id="message"
                  name="message"
                  placeholder="Message"
                  rows="6"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button type="submit" disabled={state.submitting}>
            Send Message
          </button>
              </form>
      </div>
  );
}

export default ContactForm
