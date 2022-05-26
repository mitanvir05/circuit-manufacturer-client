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
import MyReview from "./Pages/DashBoard/MyReview";
import MyProfile from "./Pages/DashBoard/MyProfile";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="businesssummary" element={<BusinessSummary />} />
        <Route path="/tool/:_id" element={<ToolDetails />} />

        <Route
          path="dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyOrder></MyOrder>}></Route>
          <Route path="review" element={<MyReview></MyReview>}></Route>
          <Route path="profile" element={<MyProfile></MyProfile>}></Route>
        </Route>
        <Route path="blogs" element={<Blogs />} />
        <Route path="portfolio" element={<MyPortfolio />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
