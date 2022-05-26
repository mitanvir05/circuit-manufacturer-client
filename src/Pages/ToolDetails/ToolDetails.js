import React from "react";
import { useParams } from "react-router-dom";

const ToolDetails = () => {
  const { toolId } = useParams();
  return (
    <div>
      <h1>toolDetails {toolId}</h1>
    </div>
  );
};

export default ToolDetails;
