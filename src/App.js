import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
import Blogs from "./Pages/Blogs/Blogs";
import BusinessSummary from "./Pages/Home/BusinessSummary/BusinessSummary";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/Login/SignUp";
import MyPortfolio from "./Pages/MyPortfolio/MyPortfolio";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Navbar";
import NotFound from "./Pages/Shared/NotFound/NotFound";
import ToolDetails from "./Pages/ToolDetails/ToolDetails";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="businesssummary" element={<BusinessSummary />} />
        <Route path="/tool/:toolId" element={<ToolDetails />} />

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
