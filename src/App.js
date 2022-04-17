import Home from "./pages/Home";
import { Routes,Route, BrowserRouter} from "react-router-dom";
import ResponsiveAppBar from "./components/AppBar";
import  Tour from "./pages/Tour" ;

function App() {
  return (
    <div>
   
<BrowserRouter>
<ResponsiveAppBar/>
<Routes>
    <Route path="/home" element ={<Home/>}/>
    </Routes>
    <Routes>
    <Route path="/tours" element ={<Tour/>}/>
    </Routes>
</BrowserRouter>
    
   
    </div>
    
  
  );
}

export default App;
