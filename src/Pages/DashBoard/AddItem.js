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
    <div className="w-50 mx-auto">
      <h1>Please Insert Details</h1>
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="mb-2"
          placeholder="Name"
          type="text"
          {...register("name")}
        />
        <input
          className="mb-2"
          placeholder="Price"
          type="text"
          {...register("price")}
        />
        <input
          className="mb-2"
          placeholder="Available Quantity"
          type="number"
          {...register("avlquantity")}
        />
        <input
          className="mb-2"
          placeholder="Minimun Quantity for order"
          type="number"
          {...register("minquantity")}
        />
        <textarea
          className="mb-2"
          placeholder="Description"
          type="text"
          {...register("description")}
        />
        <input
          className="mb-2"
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
