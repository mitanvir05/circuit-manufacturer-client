import React from "react";
import { useForm } from "react-hook-form";

const AddItem = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const url = `http://localhost:5000/tool`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };

  return (
    <div className="text-center py-8">
      <h1>Please Insert Details</h1>
      <form
        className="grid grid-cols-1 justify-items-center gap-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className="input input-bordered input-sm w-full max-w-xs"
          placeholder="Name"
          type="text"
          {...register("name")}
        />
        <input
          className="input input-bordered input-sm w-full max-w-xs"
          placeholder="Price"
          type="text"
          {...register("price")}
        />
        <input
          className="input input-bordered input-sm w-full max-w-xs"
          placeholder="Available Quantity"
          type="number"
          {...register("avlquantity")}
        />
        <input
          className="input input-bordered input-sm w-full max-w-xs"
          placeholder="Minimun Quantity for order"
          type="number"
          {...register("minquantity")}
        />
        <input
          className="input input-bordered input-lg w-full max-w-xs"
          placeholder="Description"
          type="text"
          {...register("description")}
        />
        <input
          className="input input-bordered input-sm w-full max-w-xs"
          placeholder="Image Link"
          type="text"
          {...register("img")}
        />
        <input
          className="mb-5 btn btn-primary"
          value="Add Tool"
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddItem;
