import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Title from '../layouts/Title';
import ContactLeft from './ContactLeft';

const Contact = () => {
  const form = useRef();
  const [errMsg, setErrMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const emailValidation = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const formValues = {
      from_name: formData.get('from_name'),
      from_email: formData.get('from_email'),
      user_subject: formData.get('user_subject'),
      message: formData.get('message'),
    };

    // Debugging: Log the form data
    console.log('Form data:', formValues);

    if (formValues.from_name === '') {
      setErrMsg('From name is required!');
    } else if (formValues.from_email === '') {
      setErrMsg('Please give your Email!');
    } else if (!emailValidation(formValues.from_email)) {
      setErrMsg('Give a valid Email!');
    } else if (formValues.user_subject === '') {
      setErrMsg('Please give your Subject!');
    } else if (formValues.message === '') {
      setErrMsg('Message is required!');
    } else {
      emailjs
        .sendForm('service_jndm8ho', 'template_fmtkwqz', form.current, 'bpHSDYdHgv4Sbe9jv')
        .then(
          () => {
            console.log('SUCCESS!');
            setSuccessMsg(`Thank you dear ${formValues.from_name}, Your Messages has been sent Successfully!`);
            setErrMsg('');
            form.current.reset();
          },
          (error) => {
            console.log('FAILED...', error.text);
            setErrMsg('An error occurred, please try again');
          }
        );
    }
  };

  return (
    <section id="contact" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="CONTACT" des="Contact With Me" />
      </div>
      <div className="w-full">
        <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
          <ContactLeft />
          <div className="w-full lgl:w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne">
            <form ref={form} onSubmit={sendEmail} className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5">
              {errMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                  {errMsg}
                </p>
              )}
              {successMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                  {successMsg}
                </p>
              )}
              <div className="w-full flex flex-col lgl:flex-row gap-10">
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">Your name</p>
                  <input name="from_name" className={`contactInput ${errMsg === 'From name is required!' && 'outline-designColor'}`} type="text" />
                </div>
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">Phone Number</p>
                  <input name="user_phone" className={`contactInput ${errMsg === 'Phone number is required!' && 'outline-designColor'}`} type="text" />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">Email</p>
                <input name="from_email" className={`contactInput ${errMsg === 'Please give your Email!' && 'outline-designColor'}`} type="email" />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">Subject</p>
                <input name="user_subject" className={`contactInput ${errMsg === 'Please give your Subject!' && 'outline-designColor'}`} type="text" />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">Message</p>
                <textarea name="message" className={`contactTextArea ${errMsg === 'Message is required!' && 'outline-designColor'}`} cols="30" rows="8"></textarea>
              </div>
              <div className="w-full">
                <button type="submit" className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
