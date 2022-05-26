import React from "react";
import { useForm } from "react-hook-form";

const AddReview = () => {
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
    <div className="w-50 mx-auto py-3">
      <h1>Please Give a Review</h1>
      <form className="" onSubmit={handleSubmit(onSubmit)}>
        <textarea
          className="mb-2"
          placeholder="Description"
          type="text"
          {...register("description")}
        />

        <input
          className="mb-2"
          placeholder="Rating"
          type="number"
          {...register("rating")}
        />
        <input
          className="mb-5 btn btn-primary"
          value="Add Review"
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddReview;
