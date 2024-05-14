import React, {useState} from 'react';
import LogIn from '../components/LogIn';
import SignUp from '../components/SignUp';

const Authentication = () => {
    const [isSignUp, setIsSignUp] = useState(false);

    const handleToggleForm = () => {
        setIsSignUp(!isSignUp);
    };

    function verifyData(username, password) {
        if (username && password) {
            return {username, password};
        } else {
            return null;
        }
    }

    return (
        <div className="animated-gradient">
            <div className="flex h-screen items-center justify-center w-full">
                {isSignUp ? (
                    <SignUp verifyData={verifyData} />
                ) : (
                    <LogIn verifyData={verifyData} handleToggleForm={handleToggleForm} />
                )}
            </div>
        </div>
    );
};

export default Authentication;
