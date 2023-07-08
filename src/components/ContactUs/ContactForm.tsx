import React, { useEffect, useRef, useState } from "react";
import emailjs from "emailjs-com";

const ContactForm: React.FC = () => {
  const form: React.MutableRefObject<any> = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [emailCount, setEmailCount] = useState(0);

  const { name, email, subject, message } = formData;

  useEffect(() => {
    const storedEmailCount = localStorage.getItem("emailCount");
    if (storedEmailCount) {
      setEmailCount(Number(storedEmailCount));
    }
  }, []);

  const handleChangeInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (emailCount >= 3) {
      alert("You have reached the maximum limit of emails.");
      return;
    }

    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID ?? "",
        process.env.REACT_APP_TEMPLATE_ID ?? "",
        form.current,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setLoading(false);
          setIsFormSubmitted(true);
          setEmailCount((prevCount) => prevCount + 1);
          localStorage.setItem("emailCount", String(emailCount + 1));
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
    form.current.reset();
  };

  const validateEmail = (email: string) => {
    const emailRegex =
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(email);
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
                value={name}
                onChange={handleChangeInput}
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
                value={email}
                onChange={handleChangeInput}
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
                maxLength={50}
                value={subject}
                onChange={handleChangeInput}
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
                maxLength={200}
                value={message}
                onChange={handleChangeInput}
              />
            </div>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3 w-full">
              <button
                className="shadow bg-green hover:bg-blue focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded md:w-auto w-full"
                type="submit"
              >
                {loading ? "Sending" : "Send Message"}
              </button>
            </div>
            <div className="md:text-right w-full md:w-2/3">
              {isFormSubmitted && <span className="text-green">Thanks!</span>}
            </div>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default ContactForm;
