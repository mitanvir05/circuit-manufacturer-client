import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="text-center pb-14">
        <p className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-accent to-secondary">
          Contact Us
        </p>
        <h1 className="text-2xl text-purple-700">Stay connected with us</h1>
      </div>
      <div className="grid grid-cols-1 justify-items-center gap-5">
        <input
          type="text"
          placeholder="Your Name"
          class="input input-bordered input-sm w-full max-w-xs"
        />
        <input
          type="text"
          placeholder="Your Email"
          class="input input-bordered input-sm w-full max-w-xs"
        />
        <input
          type="text"
          placeholder="Your Message"
          class="input input-bordered input-lg w-full max-w-xs"
        />
        <button className="btn btn-primary">Submit</button>
      </div>
    </div>
  );
};

export default Contact;
