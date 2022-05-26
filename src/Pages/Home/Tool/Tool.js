import React from "react";
import { useNavigate } from "react-router-dom";

const Tool = ({ tool }) => {
  const { _id, name, minquantity, avlquantity, description, img, price } = tool;
  const navigate = useNavigate();
  const navigateToToolDetails = (_id) => {
    navigate(`/tool/${_id}`);
  };

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Circuit Name : {name}</h2>
          <p>Available Quantity : {avlquantity}</p>
          <p>Minimum Order Quantity : {minquantity}</p>
          <p>Unit Price : {price}</p>
          <p>Description : {description}</p>
          <div className="card-actions">
            <button
              onClick={() => navigateToToolDetails(_id)}
              className="btn btn-primary"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tool;
