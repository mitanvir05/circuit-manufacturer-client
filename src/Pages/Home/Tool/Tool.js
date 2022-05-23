import React from "react";

const Tool = ({ tool }) => {
  const { name, minquantity, avlquantity, description, img, price } = tool;
  return (
    <div className="">
      <div class="card w-96 bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
          <img src={img} alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">Circuit Name : {name}</h2>
          <p>Available Quantity : {avlquantity}</p>
          <p>Minimum Order Quantity : {minquantity}</p>
          <p>Unit Price : {price}</p>
          <p>Description : {description}</p>
          <div class="card-actions">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tool;
