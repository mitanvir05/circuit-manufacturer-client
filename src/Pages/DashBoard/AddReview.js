import React from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddReview = () => {
  const notify = () => toast("Review Added");
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const url = `http://localhost:5000/review`;
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
    <div className="w-50 mx-auto py-3  container">
      <h1 className="text-center text-primary font-bold text-3xl py-5">
        Please Give a Review
      </h1>
      <form
        className="grid grid-cols-1 justify-items-center gap-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className="input input-bordered input-lg w-full max-w-xs"
          placeholder="Description"
          type="text"
          {...register("description")}
        />

        <input
          className="input input-bordered input-sm w-full max-w-xs"
          placeholder="Rating"
          type="number"
          {...register("rating")}
        />
        <input
          onClick={notify}
          className="mb-5 btn btn-primary"
          value="Add Review"
          type="submit"
        />
      </form>
      <ToastContainer />
    </div>
  );
};

export default AddReview;
