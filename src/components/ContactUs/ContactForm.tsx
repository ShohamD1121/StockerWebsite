import React, { useRef } from "react";
import emailjs from "emailjs-com";

const ContactForm: React.FC = () => {
  const form: React.MutableRefObject<any> = useRef();

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs
      .sendForm("gmail", "template_xwpiymb", form.current, "i4Ma9iw8nDyzcYwQ0")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    form.current.reset();
  };
  return (
    <React.Fragment>
      <div className="flex mt-5 justify-center items-center flex-1 w-full flex-col py-16 px-8">
        <h1 className="md:text-5xl text-3xl font-bold md:mb-20 mb-6 2xl:text-6xl leading-8">
          Contact Us
        </h1>
        <form ref={form} className="w-full max-w-lg" onSubmit={sendEmail}>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                type="text"
                name="name"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Email
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="email"
                name="email"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Subject
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                name="subject"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Message
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                name="message"
              />
            </div>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3 w-full">
              <button
                className="shadow bg-green hover:bg-blue focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded md:w-auto w-full"
                type="submit"
              >
                Send
              </button>
            </div>
            <div className="md:w-2/3 w-0"></div>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default ContactForm;
