import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Profile from "./pages/profile/Profile";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Responsive.css"
import {
  BrowserRouter as Router,
  Routes ,
  Route,
} from "react-router-dom";

function App() {
  return (
   <>
   <Router>
    <Routes>
    <Route path='/' element={<Home/>} />
    </Routes>
    <Routes>
    <Route path='/profile/:username' element={<Profile/>} />
    </Routes>
    <Routes>
    <Route path='/login' element={<Login/>} />
    </Routes>
    <Routes>
    <Route path='/register' element={<Register/>} />
    </Routes>
   </Router>
   {/*  */}
   {/*  */}
 
   {/* */}
   </>
  );
}

export default App;
