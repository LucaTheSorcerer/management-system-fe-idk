// import './App.css';
// import {Route, Routes, useLocation, useNavigate} from 'react-router-dom';
// import Authentication from './pages/Authentication';
// import {AuthContext} from './context/auth_context/AuthProvider'
// import {useContext, useEffect} from 'react';


// function App() {
//     const {auth} = useContext(AuthContext);
//     const navigate = useNavigate();
//     const location = useLocation();

//     console.log(auth);

//     useEffect(() => {
//         // If the user is not authenticated, navigate to the Authentication page
//         // if (!auth || !auth.isAuthenticated && location.pathname !== '/ForgotPassword') {
//         if (!auth || !auth.isAuthenticated) {

//             navigate('/Authentication');
//         }
//     }, [auth, navigate]);

//     return (
//         <div className="App">
//             <Routes>
//                 <Route path="/Authentication" element={<Authentication/>}/>
//                 {auth && auth.isAuthenticated && (
//                 <>
//                 </>
//                 )}
//             </Routes>
//         </div>
//     );
// }

// export default App;
import './App.css';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Authentication from './pages/Authentication';
import Home from './pages/Home';
import { AuthContext } from './context/auth_context/AuthProvider';
import React, { useContext, useEffect } from 'react';

function App() {
  const { auth } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!auth || !auth.isAuthenticated) {
      navigate('/Authentication');
    }
  }, [auth, navigate]);

  useEffect(() => {
    if (!auth && !auth.isAuthenticated) {
      navigate('/Authentication');
    }
  }, [auth, location.pathname, navigate]);

  return (
    <div className="App">
        <Routes>
            <Route path="/Authentication" element={<Authentication/>}/>
            {auth && auth.isAuthenticated && (
            <>
                <Route path="/" element={<Home/>}/>
            </>
            )}
        </Routes>
    </div>
);
}

export default App;
