import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
import './contact.css';
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_xyy4xpn',
        'template_72bkfvb',
        form.current,
        '86ngCS9CSOe-xB25m'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section id='contact'>
      <div className='text_container'>
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>
      </div>
      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
            <MdOutlineEmail className='contact_option-icon' />
            <h4>Email</h4>
            <h5>gabechipaya@gmail.com</h5>
            <a href='mailto:gabechipaya@gmail.com'>Send a message</a>
          </article>
          <article className='contact_option'>
            <RiMessengerLine className='contact_option-icon' />
            <h4>Messenger</h4>
            <h5>Gabriel Chipaya</h5>
            <a
              href='https://m.me/GabbyChipaya'
              target='_blank'
              rel='noreferrer'
            >
              Send a message
            </a>
          </article>
          <article className='contact_option'>
            <BsWhatsapp className='contact_option-icon' />
            <h4>WhatsApp</h4>
            <h5>+260 97 9788911</h5>
            <a
              href='https://api.whatsapp.com/send?phone+260979788911'
              target='_blank'
              rel='noreferrer'
            >
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type='text'
            name='name'
            placeholder='Your Full Name'
            required
          />
          <input type='email' name='email' placeholder='Your Email' required />
          <input type='text' name='subject' placeholder='Subject' required />
          <textarea
            name='message'
            rows='7'
            placeholder='Your Message'
            required
          ></textarea>
          <button type='submit' className='btn primary'>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
