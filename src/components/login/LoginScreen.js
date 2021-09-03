import React from 'react'

export const LoginScreen = ({ history }) => {

    const handlelogin = () => {
        // history.push('/')
        history.replace('/')
    }

    return (
        <div className="container">
            <h1>Login</h1>
            <hr />
            <button
                className="btn btn-primary"
                onClick={ handlelogin }
            >
                Login
            </button>
        </div>
    )
}
