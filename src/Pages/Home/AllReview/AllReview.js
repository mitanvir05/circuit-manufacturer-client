import React, { useEffect, useState } from "react";

const AllReview = () => {
  const [allReview, setAllReview] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/review")
      .then((res) => res.json())
      .then((data) => setAllReview(data));
  }, []);
  return (
    <div>
      <h1 className="text-center text-3xl font-bold py-10">
        Total Review : {allReview.length}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {allReview.map((review) => (
          <div key={review._id}>
            <div class="card w-96 bg-primary text-primary-content">
              <div class="card-body">
                <div className=" text-xl">
                  <h1>Rating : {review.data.rating}</h1>
                  <h1>Description : {review.data.description}</h1>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllReview;
