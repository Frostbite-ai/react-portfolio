import React from "react";
import Title from "./title.jsx";

function Contact() {
  return (
    <div>
      <div className="mx-auto mb-10 flex flex-col">
        <div className="flex items-center justify-center">
          <form
            action="https://getform.io/f/ba59ad00-e20c-4c9c-8dab-8fa326b64a26"
            method="POST"
            className=" mx-8 flex w-full max-w-xl flex-col gap-2"
          >
            <Title id="contact">Contact</Title>

            <input
              type="text"
              name="name"
              placeholder="Name"
              className="rounded-md border-2 bg-transparent p-2 focus:border-blue-500 focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="rounded-md border-2 bg-transparent p-2 focus:border-blue-500 focus:outline-none"
            />

            <textarea
              name="message"
              placeholder="Message"
              rows="8"
              className="rounded-md border-2 bg-transparent p-2 focus:border-blue-500 focus:outline-none"
            />

            <button
              type="submit"
              className="rounded bg-gradient-to-r from-yellow-500 to-pink-500 px-4 py-2 font-bold text-white drop-shadow-md transition duration-300 ease-in-out hover:shadow-md"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
