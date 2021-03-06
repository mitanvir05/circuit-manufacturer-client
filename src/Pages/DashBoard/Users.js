import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import UserEow from "./UserEow";

const Users = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("http://localhost:5000/user").then((res) => res.json())
  );
  if (isLoading) {
    <Loading></Loading>;
  }
  return (
    <div>
      <h1 className="text-2xl">All Users : {users?.length}</h1>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Job</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user) => (
              <UserEow key={user._id} user={user} refetch={refetch}></UserEow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
