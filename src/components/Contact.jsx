import { useState } from "react";
import { IoIosContact } from "react-icons/io";
import { MdOutlineAlternateEmail, MdEmail } from "react-icons/md";

export const Contact = () => {
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    message: "",
  });

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
        alert("Message sent");
        setUserInput({ name: "", email: "", message: "" });
      })

      .catch(() => alert("Failed to send message"));
  };

  return (
    <section className="w-full h-full flex bg-darkbg px-4">
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
              className="w-full bg-accent1 text-white placeholder-gray-400 outline-none font-medium"
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
              className="w-full bg-accent1 text-white placeholder-gray-400 outline-none font-medium"
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
              className="w-full bg-accent1 text-white placeholder-gray-400 outline-none resize-none font-medium"
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
      </div>
    </section>
  );
};
