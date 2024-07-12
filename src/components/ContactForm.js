import React, { useRef } from "react";
import emailjs from '@emailjs/browser';

export const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
      
        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_SERVICE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
    
    return (
        <div>
            <form ref={form} onSubmit={sendEmail} className='grid p-7 rounded-2xl bg-indigo-100 dark:bg-gray-700'>
              <label className="pb-2 pl-1 font-medium dark:text-gray-300">Name</label>
              <input type="text" name="user_name" className="h-10 p-2 rounded-md w-auto"/>
              <label className="py-2 mt-4 pl-1 font-medium dark:text-gray-300">Email</label>
              <input type="email" name="user_email" className="h-10 p-2 rounded-md" />
              <label className="py-2 mt-4 pl-1 font-medium dark:text-gray-300">Message</label>
              <textarea name="message" className="h-32 p-2 rounded-md" />
              <input type="submit" value="Send" className="font-medium w-20 p-2 mt-5 cursor-pointer bg-green-500 text-gray-50 rounded-md hover:bg-green-600" />
            </form>
        </div>
    )
}