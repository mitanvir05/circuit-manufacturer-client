import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";

const MyProfile = () => {
  const [user] = useAuthState(auth);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const url = `http://localhost:5000/profile`;
    fetch(url, {
      method: "PUT",
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
            placeholder="Your Education"
            class="input input-bordered input-sm w-full max-w-xs"
            {...register("education")}
          />
          <input
            type="text"
            placeholder="Your Location"
            class="input input-bordered input-sm w-full max-w-xs"
            {...register("location")}
          />
          <input
            type="text"
            placeholder="Your Phone Number"
            class="input input-bordered input-sm w-full max-w-xs"
            {...register("phone")}
          />
          <input
            type="text"
            placeholder="Your LinkdIn Profile"
            class="input input-bordered input-sm w-full max-w-xs"
            {...register("linkdin")}
          />

          <input
            className="mb-5 btn btn-primary"
            value="Submit"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default MyProfile;
