import React from "react";
import { Link, Outlet } from "react-router-dom";
import useAdmin from "../../Hooks/useAdmin";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div class="drawer drawer-mobile">
      <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content ">
        <h2 className="text-yellow-500 font-bold text-2xl">
          Welcome To Your Dashboard
        </h2>
        <Outlet></Outlet>
      </div>
      <div class="drawer-side">
        <label for="dashboard-sidebar" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
          <div>
            <li>
              <Link to="/dashboard">My Profile</Link>
            </li>
            {admin ? (
              <>
                <li>
                  <Link to="/dashboard/additem">Add Item</Link>
                </li>
                <li>
                  <Link to="/dashboard/users">Make Admin</Link>
                </li>
                <li>
                  <Link to="/dashboard/managetools">Manage Tools</Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/dashboard/order">My Order</Link>
                </li>
                <li>
                  <Link to="/dashboard/review">My Review</Link>
                </li>
              </>
            )}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
