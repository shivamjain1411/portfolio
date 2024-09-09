import React, { useEffect } from 'react';
import { IoSendSharp } from 'react-icons/io5';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-l from-[#21073C] to-[#3A1078] text-gray-300 py-32"
    >
      <div className="flex flex-col justify-center items-center w-full h-full text-white">
        {/* Heading */}
        <p className="text-4xl font-bold inline border-b-4 border-[#00FFCA]">
          Contact
        </p>
        {/* Description */}
        <p className="py-6">
          Submit the form below or send me an email -{" "}
          <span className="font-bold">jainshivam312@gmail.com</span>
        </p>

        {/* Form */}
        <div className="">
          <form
            action="https://formcarry.com/s/PLn_X58NgyN" // Replace with your Formcarry endpoint
            method="POST"
          >
            <input
              type="text"
              placeholder="Name"
              name="name"
              className="bg-gray-100 text-gray-950 p-2 w-full rounded-md active:border-[#00FFCA] active:border-2"
              data-aos="fade-down"
              data-aos-duration="600"
              data-aos-easing="linear"
              required
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="my-4 p-2 bg-gray-100 text-gray-950 w-full rounded-md active:border-[#00FFCA] active:border-2"
              data-aos="fade-down"
              data-aos-duration="800"
              data-aos-easing="linear"
              required
            />
            <textarea
              name="message"
              className="bg-gray-100 p-2 w-full text-gray-950 rounded-md active:border-[#00FFCA] active:border-2"
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-easing="linear"
              placeholder="Message"
              rows="10"
              required
            ></textarea>
            <div className="mt-4">
              <button
                type="submit" // This will handle form submission
                className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#00FFCA] hover:border-[#00FFCA] rounded-sm hover:text-[#3A1078] font-semibold"
              >
                Send Message
                <span className="group-hover:translate-x-1 duration-300">
                  <IoSendSharp className="ml-4" />
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
