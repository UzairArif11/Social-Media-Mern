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
  Navigate 
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./components/context/AuthContext";


function App() {
  const {user} = useContext(AuthContext);
  return (
   <>
   <Router>
    <Routes>
    <Route path='/' element={user ? <Home/>:<Navigate  to="/login"/>} />
    </Routes>
    <Routes>
    <Route path='/profile/:username' element={user ? <Profile/>:<Navigate  to="/login"/> } />
    </Routes>
    <Routes>
    <Route path='/login' element={user ?<Navigate  to="/"/>:<Login/>} />
    </Routes>
    <Routes>
    <Route path='/register' element={user ?<Navigate  to="/"/>:<Register/>} />
    </Routes>
   </Router>
   
   </>
  );
}

export default App;
