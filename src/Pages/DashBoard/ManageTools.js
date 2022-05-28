import React from "react";
//import { useNavigate } from "react-router-dom";
import useTools from "../../Hooks/useTools";

const ManageTools = () => {
  const [tools, setTools] = useTools();
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure you want to delete?");
    if (proceed) {
      const url = `http://localhost:5000/tool/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          const remaining = tools.filter((tools) => tools._id !== id);
          setTools(remaining);
        });
    }
  };

  return (
    <div>
      <h4 className="text-center">Manage Tools</h4>
      {tools.map((tools) => (
        <div key={tools._id}>
          <div className="card w-96 bg-base-100 shadow-xl mx-auto container">
            <div className="card ">
              <img src={tools.img} className="card-img-top" alt="..." />
              <div className="card-body">
                <h2 className="card-title">Circuit Name : {tools.name}</h2>
                <p>Available Quantity : {tools.avlquantity}</p>
                <p>Minimum Order Quantity : {tools.minquantity}</p>
                <p>Unit Price : {tools.price}</p>
                <p>Description : {tools.description}</p>

                <button
                  onClick={() => handleDelete(tools._id)}
                  className="btn btn-primary"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ManageTools;
