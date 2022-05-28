import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

const ToolDetails = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    getValues,
  } = useForm();
  const [user] = useAuthState(auth);

  const { _id } = useParams();
  const [toolDetails, setToolDetails] = useState({});
  useEffect(() => {
    let url = `http://localhost:5000/tool/${_id}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setToolDetails(data));
  }, [_id, toolDetails]);

  const onSubmit = () => {
    const displayName = watch("displayName").toUpperCase();
    const email = watch("email");
    const address = watch("address").toUpperCase();
    // const phone = watch("phone");
    const itemName = watch("itemName");
    const quantity = parseInt(watch("quantity"));
    const price = parseInt(watch("price"));
    const totalPrice = quantity * price;
    // console.log({
    //   displayName,
    //   email,
    //   address,
    //   phone,
    //   itemName,
    //   quantity,
    //   price,
    // });

    const order = {
      orderId: _id,
      orderName: itemName,
      user: email,
      userName: displayName,
      address: address,
      quantity: quantity,
      price: totalPrice,
    };

    fetch("http://localhost:5000/order", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success(`You purchased ${itemName} successfully`);
        console.log(data);

        // to close the modal
        setToolDetails(null);
      });
  };

  return (
    <div className="">
      <div className="card w-96 bg-base-100 shadow-xl container mx-auto">
        <figure className="px-10 pt-10">
          <img src={toolDetails.img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2>UserName {user.displayName}</h2>
          {console.log(user)}
          <h2>{user.email}</h2>
          <h2 className="card-title">Circuit Name : {toolDetails.name}</h2>
          <p>Available Quantity : {toolDetails.avlquantity}</p>
          <p>Minimum Order Quantity : {toolDetails.minquantity}</p>
          <p>Unit Price : {toolDetails.price}</p>
          <p>Description : {toolDetails.description}</p>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control mb-4">
              <input
                type="text"
                value={user?.displayName}
                className="input input-bordered input-primary"
                {...register("displayName", {})}
                readOnly
                required
              />
            </div>
            <div className="form-control mb-4">
              <input
                type="email"
                value={user?.email}
                className="input input-bordered input-primary"
                {...register("email", {})}
                readOnly
                required
              />
            </div>
            <div className="form-control mb-4">
              <input
                type="text"
                placeholder="Address"
                className="input input-bordered input-primary"
                {...register("address", {
                  required: {
                    value: true,
                    message: "Address is required",
                  },
                  maxLength: {
                    value: 30,
                    message: "Address can not be more than 30 letters",
                  },
                })}
              />
              <p className="text-red-500 font-semibold">
                {errors.address?.type === "required" && (
                  <span>{errors?.address?.message}</span>
                )}
                {errors.address?.type === "maxLength" && (
                  <span>{errors?.address?.message}</span>
                )}
              </p>{" "}
            </div>
            <div className="form-control mb-4">
              <input
                type="tel"
                placeholder="Phone"
                className="input input-bordered input-primary"
                {...register("phone", {
                  required: {
                    value: true,
                    message: "Phone Number is required",
                  },
                })}
              />
              <p className="text-red-500 font-semibold">
                {errors.phone?.type === "required" && (
                  <span>{errors?.phone?.message}</span>
                )}
              </p>{" "}
            </div>
            <div className="form-control mb-4">
              <input
                type="text"
                // defaultValue={itemName}
                value={toolDetails.name}
                className="input input-bordered input-primary"
                {...register("itemName", {})}
                readOnly
                required
                // disabled
              />
            </div>
            <div className="form-control mb-4">
              <input
                type="number"
                defaultValue={toolDetails.minquantity}
                className="input input-bordered input-primary"
                {...register("quantity", {
                  required: {
                    value: true,
                    message: "Quantity is required",
                  },
                  min: {
                    value: toolDetails.minquantity,
                    message: `You can not order below ${toolDetails.minquantity} pcs`,
                  },
                  max: {
                    value: toolDetails.avlquantity,
                    message: `You can not order above ${toolDetails.avlquantity} pcs`,
                  },
                })}
              />
              <p className="text-red-500 font-semibold">
                {errors.quantity?.type === "required" && (
                  <span>{errors?.quantity?.message}</span>
                )}
                {errors.quantity?.type === "min" && (
                  <span>{errors?.quantity?.message}</span>
                )}
                {errors.quantity?.type === "max" && (
                  <span>{errors?.quantity?.message}</span>
                )}
              </p>{" "}
            </div>
            <div className="form-control mb-4">
              <input
                type="number"
                value={
                  getValues("quantity")
                    ? parseInt(toolDetails.price) *
                      parseInt(getValues("quantity"))
                    : parseInt(toolDetails.price)
                }
                className="input input-bordered input-primary"
                {...register("price", {
                  required: {
                    value: true,
                    message: "Price is required",
                  },
                })}
                readOnly
                required
              />
              <p className="text-red-500 font-semibold">
                {errors.totalPrice?.type === "required" && (
                  <span>{errors?.totalPrice?.message}</span>
                )}
              </p>{" "}
            </div>
            <div className="form-control mt-6">
              <input
                type="submit"
                className="btn btn-primary text-white uppercase"
                value="Purchase"
                disabled={errors?.quantity}
              />{" "}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ToolDetails;
