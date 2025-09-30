import { useState } from "react";
import { IoIosContact } from "react-icons/io";
import { MdOutlineAlternateEmail, MdEmail } from "react-icons/md";
import SparklesCore from "./ui/SparklesCore";

export const Contact = () => {
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [contactMessage, setContactMessage] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setUserInput(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = e => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    fetch("/", {
      method: "POST",
      body: data,
    })
      .then(() => {
        setContactMessage(prev => !prev);
        setUserInput({ name: "", email: "", message: "" });

        setTimeout(() => {
          setContactMessage(prev => !prev);
        }, 6000);
      })

      .catch(() => alert("Failed to send message"));
  };

  const dismissHandle = () => {
    setContactMessage(prev => !prev);
  };
  return (
    <SparklesCore particleColor="#ffd166" className="w-full">
      <section className="w-full h-full flex bg-darkbg">
        <div className="w-full m-6">
          <h2 className="text-3xl font-bold text-peach mb-8 tracking-wide">
            Get In Touch
          </h2>

          <form
            name="contact"
            method="POST"
            netlify
            className="flex flex-col gap-4 m-8"
            onSubmit={handleFormSubmit}
          >
            <input type="hidden" name="form-name" value="contact" />
            {/* Name */}
            <div className="flex items-center bg-accent1 rounded-lg px-3 py-2 shadow-md">
              <IoIosContact className="text-sandy text-xl mr-2" />
              <input
                className=" bg-accent1 text-white placeholder-gray-400 outline-none font-medium"
                name="name"
                placeholder="Name"
                value={userInput.name}
                onChange={handleChange}
                required
              />
            </div>

            {/* Email */}
            <div className="flex items-center bg-accent1 rounded-lg px-3 py-2 shadow-md">
              <MdOutlineAlternateEmail className="text-sandy text-xl mr-2" />
              <input
                className=" bg-accent1 text-white placeholder-gray-400 outline-none font-medium"
                name="email"
                type="email"
                placeholder="Email"
                value={userInput.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Message */}
            <div className="flex items-start bg-accent1 rounded-lg px-3 py-2 shadow-md">
              <MdEmail className="text-sandy text-xl mr-2 mt-1" />
              <textarea
                className=" bg-accent1 text-white placeholder-gray-400 outline-none resize-none font-medium"
                name="message"
                placeholder="Message"
                rows="4"
                value={userInput.message}
                onChange={handleChange}
                required
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="bg-sandy w-48 hover:bg-peach text-darkbg font-semibold py-3 rounded-lg transition-colors duration-300 shadow-lg tracking-wide"
            >
              SEND MESSAGE
            </button>
          </form>
          <div className="w-fit flex items-start text-lg text-darkbg bg-sandy rounded-lg shadow-md fixed top-4 right-4 z-50">
            {contactMessage && (
              <p className="p-3">
                I'll get back to you soon!{" "}
                <span
                  onClick={dismissHandle}
                  className="items-center cursor-pointer text-xs"
                >
                  ❌
                </span>
              </p>
            )}
          </div>
        </div>
      </section>
    </SparklesCore>
  );
};
