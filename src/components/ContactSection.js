import React from "react";
import Lottie from "lottie-react";
import { FaTelegram, FaWhatsapp, FaDiscord } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io"
import contactAnimation from "../assets/contactAnimation.json";
import { ContactForm } from "./ContactForm";
import FadeInWhenVisible from "./FadeInWhenVisible";

export const ContactSection = () => {
  return (
    <>
      <div className="lg:flex">
        <div className="lg:w-1/2 mt-3">
          <FadeInWhenVisible>
            <p className="pb-5 dark:text-gray-300">I'm always open to talk about any enquiries or simply just chat about my past experiences and projects. Feel free to reach out to me on any of my social media platforms!</p>
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <ContactForm />
          </FadeInWhenVisible>
        </div>
        <div className="lg:w-1/2">
          <FadeInWhenVisible>
            <Lottie animationData={contactAnimation} className="w-5/6 mx-auto" />
          </FadeInWhenVisible>
        </div>
      </div>

        <div className="lg:flex gap-5  dark:text-white">  
          <div className="flex-1 bg-indigo-100 rounded-xl p-10 my-10 text-center dark:bg-gray-700">
            <FadeInWhenVisible>
              <div className="flex justify-center">
                <IoIosMail className="text-4xl" />
              </div>
              <h4 className="py-1 font-medium">Email</h4>
              <p className="text-gray-600 dark:text-gray-300">bertrandoch@gmail.com</p>
            </FadeInWhenVisible>
          </div>
          
          <div className="flex-1 bg-indigo-100 rounded-xl p-10 my-10 text-center dark:bg-gray-700">
            <FadeInWhenVisible>
              <div className="flex justify-center">
                <FaTelegram className="text-4xl" />
              </div>
              <h4 className="py-1 font-medium">Telegram</h4>
              <p className="text-gray-600 dark:text-gray-300">@bertshitt</p>
            </FadeInWhenVisible>
          </div>
          
          <div className="flex-1 bg-indigo-100 rounded-xl p-10 my-10 text-center dark:bg-gray-700">
            <FadeInWhenVisible>
              <div className="flex justify-center">
                <FaDiscord className="text-4xl" />
              </div>
              <h4 className="py-1 font-medium">Discord</h4>
              <p className="text-gray-600 dark:text-gray-300">Frostic#3654</p>
            </FadeInWhenVisible>
          </div>
          
          <div className="flex-1 bg-indigo-100 rounded-xl p-10 my-10 text-center dark:bg-gray-700">
            <FadeInWhenVisible>
              <div className="flex justify-center">
                <FaWhatsapp className="text-4xl" />
              </div>
              <h4 className="py-1 font-medium">WhatsApp</h4>
              <p className="text-gray-600 dark:text-gray-300">+65 9320 2710</p>
            </FadeInWhenVisible>
          </div>
        </div>
    </>
  )
}