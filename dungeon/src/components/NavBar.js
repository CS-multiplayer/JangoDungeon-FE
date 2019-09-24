import React, { useState } from 'react';
import Login from './Login.js';

function NavBar(props) {
    const [onLog, setOnLog] = useState(false)

    function toggleLogin() {
        if (onLog) {
            setOnLog(false)
        } else {
            setOnLog(true)
        }

    }
    function logout() {
        localStorage.removeItem('key')
        setOnLog(true)
    }

    return (
        <div className="nav">
            {props.logedIn ? <button onClick={logout}> Logout</button> : <button onClick={toggleLogin}>{onLog ? 'Return' : 'Login'}</button>}
            {onLog && <Login backendUrl={props.backendUrl} />}

        </div>
    );
}

export default NavBar;