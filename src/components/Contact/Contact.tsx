import React, { RefObject, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';

import './Contact.scss';

type ContactProps = {
  sectionRef: RefObject<HTMLElement>;
};

export default function Contact({ sectionRef }: ContactProps) {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_91onskg',
        'template_j4pd9wj',
        form.current!,
        'ckYQsaKiHayd6Sw9N'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  useEffect(() => {
    const sectionElement = sectionRef.current;
    // Use sectionElement for calculations or manipulations
  }, [sectionRef]);

  return (
    <section className='contact' id='contact'>
      <h1>Let's get in touch!</h1>


      <form action='submit' ref={form} onSubmit={sendEmail}>
        <div className='input'>
          <label>Your Name</label>
          <input type='text' placeholder='Enter Your Name' name='user_name' required />
        </div>
        <div className='input'>
          <label>Your Email</label>
          <input type='email' placeholder='Enter Your Email Address' name='user_email' required />
        </div>
        <div className='input'>
          <label>Your Messaage</label>
          <textarea placeholder="Hi, I'd like to talk to you about an open position at Company X. How soon can you hop on to discuss this?" name="message" required />
        </div>
        <input type="submit" value="Send Message" className='button' />

        {/* <button type='submit'>Send Message</button> */}
      </form>
    </section>
  );
}
