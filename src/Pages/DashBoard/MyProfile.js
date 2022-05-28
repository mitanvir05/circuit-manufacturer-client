import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";
import { toast } from "react-toastify";

const MyProfile = () => {
  const [user] = useAuthState(auth);
  const [updateProfile, setUpdateProfile] = useState([]);
  const { register, handleSubmit, reset } = useForm();
  const url = `http://localhost:5000/user/${user.email}`;
  const onSubmit = (data) => {
    console.log(data);

    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        toast.success("Profile Update");
        reset();
        console.log(result);
      });
  };
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUpdateProfile(data));
  }, [url, updateProfile]);
  return (
    <div>
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row">
          <div class="text-center lg:text-left">
            <div class="card w-96 bg-base-100 shadow-xl">
              <div class="card-body">
                <h2 class="card-title">Updated Info</h2>

                <p class="input input-bordered input-sm w-full max-w-xs">
                  {" "}
                  Name : {updateProfile.name}
                </p>
                <p class="input input-bordered input-sm w-full max-w-xs">
                  {" "}
                  Email : {updateProfile.email}
                </p>
                <p class="input input-bordered input-sm w-full max-w-xs">
                  {" "}
                  Education : {updateProfile.education}
                </p>
                <p class="input input-bordered input-sm w-full max-w-xs">
                  {" "}
                  Location : {updateProfile.location}
                </p>
                <p class="input input-bordered input-sm w-full max-w-xs">
                  {" "}
                  Phone : {updateProfile.phone}
                </p>
                <p class="input input-bordered input-sm w-full max-w-xs">
                  {" "}
                  Linkdin : {updateProfile.linkdin}
                </p>
              </div>
            </div>
          </div>
          <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div class="card-body">
              <div>
                {console.log(updateProfile)}
                <form
                  className="grid grid-cols-1 justify-items-center gap-5"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <input
                    type="text"
                    defaultValue={user.displayName}
                    placeholder="Your Name"
                    class="input input-bordered input-sm w-full max-w-xs"
                    {...register("name")}
                  />
                  <input
                    type="text"
                    defaultValue={user.email}
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
                  {updateProfile ? (
                    <input
                      className="mb-5 btn btn-primary"
                      value="Submit"
                      type="submit"
                    />
                  ) : (
                    <input
                      className="mb-5 btn btn-primary"
                      value="Edit Now"
                      type="submit"
                    />
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
