import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../../firebase.init";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Contact = () => {
  const notify = () => toast("Data Send!");
  const [user] = useAuthState(auth);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const url = `http://localhost:5000/contact`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ data }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };
  return (
    <div>
      <div className="text-center py-8">
        <p className="text-3xl font-bold ">Contact Us</p>
        <h1 className="text-2xl text-primary py-5 font-bold">Send Feedback</h1>
      </div>
      <div>
        <form
          className="grid grid-cols-1 justify-items-center gap-5"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            type="text"
            disabled
            value={user?.displayName || ""}
            placeholder="Your Name"
            class="input input-bordered input-sm w-full max-w-xs"
            {...register("name")}
          />
          <input
            type="text"
            disabled
            value={user?.email || ""}
            placeholder="Your Email"
            class="input input-bordered input-sm w-full max-w-xs"
            {...register("email")}
          />
          <input
            type="text"
            placeholder="Your Message"
            class="input input-bordered input-lg w-full max-w-xs"
            {...register("message")}
          />

          <input
            onClick={notify}
            className="mb-5 btn btn-primary"
            value="Submit"
            type="submit"
          />
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;
