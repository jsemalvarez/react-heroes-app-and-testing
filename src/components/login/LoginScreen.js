import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types'

export const LoginScreen = ({ history }) => {

    const { dispatch }  = useContext( AuthContext )

    console.log( AuthContext )

    const handlelogin = () => {
        // history.push('/')

        const lastPath = localStorage.getItem('lastPath') || '/'
        dispatch({
            type: types.login,
            payload: { name: 'Jose' }
        })

        //history.replace('/')
        history.replace( lastPath )
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
