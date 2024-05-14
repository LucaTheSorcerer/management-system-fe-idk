import React, {useContext, useState} from "react";
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai';
import {FiAlertCircle} from 'react-icons/fi'; // Import alert icon for the toast
import {AuthContext} from '../context/auth_context/AuthProvider';
import {Link, useNavigate} from 'react-router-dom';

const LogIn = ({handleToggleForm}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loginError, setLoginError] = useState(''); // State to handle login error messages
    const [showToast, setShowToast] = useState(false); // State to manage toast visibility
    const [toastMessage, setToastMessage] = useState(''); // State to manage toast message
    const [showToastFade, setShowToastFade] = useState(false);



    const toastStyle = {
        position: "absolute",
        bottom: "20px",
        left: "50%",
        transform: "translateX(-50%)",
        backgroundColor: "rgba(220, 38, 38, 0.85)",
        color: "white",
        padding: "8px 16px",
        borderRadius: "8px",
        visibility: showToast ? "visible" : "hidden",
        opacity: showToastFade ? 1 : 0,
        transition: "opacity 0.5s, visibility 0.5s ease 0.5s",
    };

    const {dispatch} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleShowToast = (message) => {
        setToastMessage(message);
        setShowToast(true);
        setShowToastFade(true);
        setTimeout(() => {
            setShowToastFade(false);
        }, 2500);
        setTimeout(() => {
            setShowToast(false);
        }, 3000);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://localhost:8443/api/auth/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({login: username, password}),
            });

            if (response.ok) {
                const {token, user} = await response.json();
                console.log("Received token:", token);
                console.log("Login response user data:", user); // Debugging line
                dispatch({type: 'LOGIN', payload: {user, token}});
                navigate('/');
            } else {
                handleShowToast('Invalid username or password.'); // Show error toast
            }
        } catch (error) {
            console.error('Login error:', error);
            handleShowToast('An error occurred. Please try again later.'); // Show error toast
        }
    };


    const toggleShowPassword = (e) => {
        e.preventDefault();
        setShowPassword(!showPassword);
    };

    return (
        <div className="flex h-screen items-center justify-center">
            <div className="relative mx-auto">
                <form className="bg-white p-10 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold mb-5 text-gray-800 text-center">Log In</h2>
                    <div className="mb-5">
                        <label htmlFor="username" className="block mb-2 font-bold text-gray-500">Username</label>
                        <input
                            type="text"
                            id="username"
                            placeholder="Username"
                            className="w-full border rounded-lg px-3 py-2 mt-1 text-gray-700 focus:outline-none focus:shadow-outline"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="mb-5 relative">
                        <label htmlFor="password" className="block mb-2 font-bold text-gray-500">Password</label>
                        <div className="flex items-center border rounded-lg">
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                placeholder="Password"
                                className="w-full rounded-lg px-3 py-2 mt-1 text-gray-700 focus:outline-none"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button
                                onMouseDown={toggleShowPassword}
                                onMouseUp={(e) => e.preventDefault()} // Prevents focus state after clicking
                                className="p-2 cursor-pointer focus:outline-none">
                                {showPassword ? <AiOutlineEyeInvisible/> : <AiOutlineEye/>}
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <button
                            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:shadow-outline mb-3"
                            onClick={handleSubmit}>
                            Log In
                        </button>
                        <Link
                            to="/ForgotPassword"
                            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
                            Forgot Password?
                        </Link>
                        <button
                            onClick={handleToggleForm}
                            className="mt-4 text-sm text-blue-500 hover:text-blue-700 font-semibold">
                            Don't have an account? Sign Up
                        </button>
                    </div>

                </form>
                {showToast && (
                    <div style={toastStyle}>
                        <FiAlertCircle className="mr-2"/>
                        {toastMessage}
                    </div>
                )}
            </div>
        </div>
    );

};

export default LogIn;



