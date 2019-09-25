import React, { useState } from 'react';
import Login from './Login.js';

function NavBar(props) {
    const [onLog, setOnLog] = useState(false)

    function toggleLogin() {
        if (onLog) {
            setOnLog(false)
            props.setLocalKey()
        } else {
            setOnLog(true)
        }

    }
    function logout() {
        localStorage.removeItem('key')
        props.setLocalKey()
    }

    return (
        <div className="nav">
            {props.logedIn ? <button onClick={logout}> Logout</button> : <button onClick={toggleLogin}>{onLog ? 'Return' : 'Login'}</button>}
            {onLog && <Login backendUrl={props.backendUrl} toggleLogin={toggleLogin} />}

        </div>
    );
}

export default NavBar;