import React, { useRef } from "react";
import emailjs from '@emailjs/browser';

export const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
      
        emailjs.sendForm('service_8d2wizl', 'template_b6x3ypw', form.current, '3bmVVctHhq1VIzvTb')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
    
    return (
        <div>
            <form ref={form} onSubmit={sendEmail} className='grid p-7 rounded-2xl bg-indigo-100 dark:text-gray-300 dark:bg-gray-700'>
            <label className="pb-2 pl-1 font-medium">Name</label>
            <input type="text" name="user_name" className="h-10 p-2 rounded-md"/>
            <label className="py-2 mt-4 pl-1 font-medium">Email</label>
            <input type="email" name="user_email" className="h-10 p-2 rounded-md" />
            <label className="py-2 mt-4 pl-1 font-medium">Message</label>
            <textarea name="message" className="h-32 p-2 rounded-md" />
            <input type="submit" value="Send" className="font-medium w-20 p-2 mt-5 cursor-pointer bg-green-500 text-gray-50 rounded-md hover:bg-green-600" />
            </form>
        </div>
    )
}