import Home from "./pages/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ResponsiveAppBar from "./components/AppBar";
import Tour from "./pages/Tour";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";

function App() {
  return (
    <div>
      <BrowserRouter>
        <ResponsiveAppBar />
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/tours" element={<Tour />} />
        </Routes>
        <Routes>
        <Route path ="/Logout" element ={<Login/>}/>
        </Routes>
        <Routes>
        <Route path ="/signup" element ={<SignUp/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
