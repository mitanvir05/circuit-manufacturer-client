import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ToolDetails = () => {
  const { _id } = useParams();
  const [toolDetails, setToolDetails] = useState({});
  useEffect(() => {
    let url = `http://localhost:5000/tool/${_id}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setToolDetails(data));
  }, [_id, toolDetails]);
  return (
    <div>
      <div className="card w-100 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={toolDetails.img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Circuit Name : {toolDetails.name}</h2>
          <p>Available Quantity : {toolDetails.avlquantity}</p>
          <p>Minimum Order Quantity : {toolDetails.minquantity}</p>
          <p>Unit Price : {toolDetails.price}</p>
          <p>Description : {toolDetails.description}</p>
          <div className="card-actions">
            <button className="btn btn-primary">Pay Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolDetails;
