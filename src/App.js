import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
import Blogs from "./Pages/Blogs/Blogs";
import Dashboard from "./Pages/DashBoard/DashBoard";
import BusinessSummary from "./Pages/Home/BusinessSummary/BusinessSummary";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/Login/SignUp";
import MyPortfolio from "./Pages/MyPortfolio/MyPortfolio";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Navbar";
import NotFound from "./Pages/Shared/NotFound/NotFound";
import ToolDetails from "./Pages/ToolDetails/ToolDetails";
import RequireAuth from "./Pages/Login/RequireAuth";
import MyOrder from "./Pages/DashBoard/MyOrder";
import MyReview from "./Pages/DashBoard/AddReview";
import MyProfile from "./Pages/DashBoard/MyProfile";
import AddItem from "./Pages/DashBoard/AddItem";
import Users from "./Pages/DashBoard/Users";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="businesssummary" element={<BusinessSummary />} />
        <Route
          path="/tool/:_id"
          element={
            <RequireAuth>
              <ToolDetails />
            </RequireAuth>
          }
        />

        <Route
          path="dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path="order" element={<MyOrder></MyOrder>}></Route>
          <Route path="review" element={<MyReview></MyReview>}></Route>
          <Route path="additem" element={<AddItem></AddItem>}></Route>
          <Route path="users" element={<Users></Users>}></Route>
        </Route>
        <Route path="blogs" element={<Blogs />} />
        <Route path="portfolio" element={<MyPortfolio />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
      <Footer></Footer>
    </div>
  );
}

export default App;
