import React, { useState } from 'react';

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [password1, setPassword1] = useState('')
    const [isRegister, setRegister] = useState(false)

    function handleChange(e) {
        if (e.target.name === "username") {
            setUsername(e.target.value)
        } else if (e.target.name === "password") {
            setPassword(e.target.value)
        } else if (e.target.name === "password1") {
            setPassword1(e.target.value)
        }
    }

    function toggleRegister() {
        if (isRegister) {
            setRegister(false)
        } else {
            setRegister(true)
        }

    }
    function handleSubmit(e) {
        e.preventDefault()

    }


    return (
        <section>
            <div>
                <button onClick={toggleRegister}>
                    {isRegister ? 'Login' : 'SignUp'}
                </button>
            </div>
            <h1>{isRegister ? 'Register' : 'Login'}</h1>

            <form className='login-inputs' onSubmit={handleSubmit}>
                <div>
                    <label>Username</label>
                    <input
                        value={username}
                        onChange={handleChange}
                        name='username'
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input
                        value={password}
                        onChange={handleChange}
                        name='password'
                    />
                </div>
                {isRegister &&
                    <div>
                        <label>veryify password</label>
                        <input
                            value={password1}
                            onChange={handleChange}
                            name='password1'
                        />
                    </div>}
                <button type='Submit'>Submit</button>
            </form>


        </section >
    );
}

export default Login;