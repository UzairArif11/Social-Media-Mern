// import Home from "./pages/home/Home";
// import Login from "./pages/login/Login";
// import Register from "./pages/register/Register";
// import Profile from "./pages/profile/Profile";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./Responsive.css"
import {
  BrowserRouter as Router,
  Routes ,
  Route,
  Navigate 
} from "react-router-dom";
import { Suspense, lazy, useContext } from "react";
import { AuthContext } from "./components/context/AuthContext";

const Home = lazy(()=> import ("./pages/home/Home"));
const Login = lazy(()=> import ("./pages/login/Login"));
const Register = lazy(()=> import ("./pages/register/Register"));
const Profile = lazy(()=> import ("./pages/profile/Profile"));


function App() {
  const {user} = useContext(AuthContext);
  return (
   <>
   <Router>
    <Routes>
    <Route path='/' element={user ? <Suspense fallback={<div>loading...</div>} > <Home/></Suspense>:<Suspense fallback={<div>loading...</div>} > <Navigate  to="/login"/></Suspense>} />
    </Routes>
    <Routes>
    <Route path='/profile/:username' element={user ? <Suspense fallback={<div>loading...</div>} > <Profile/></Suspense>:<Suspense fallback={<div>loading...</div>} > <Navigate  to="/login"/> </Suspense>} />
    </Routes>
    <Routes>
    <Route path='/login' element={user ?<Suspense fallback={<div>loading...</div>} > <Navigate  to="/"/></Suspense>:<Suspense fallback={<div>loading...</div>} > <Login/></Suspense>} />
    </Routes>
    <Routes>
    <Route path='/register' element={user ?<Suspense fallback={<div>loading...</div>} > <Navigate  to="/"/></Suspense>:<Suspense fallback={<div>loading...</div>} > <Register/></Suspense>} />
    </Routes>
   </Router>
   
   </>
  );
}

export default App;
