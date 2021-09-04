import React from 'react'
import { AuthContext } from './auth/AuthContext'
import { AppRouter } from './routers/AppRouter'
import { autReducer } from './routers/autReducer'

const init = () => {
    return JSON.parse( localStorage.getItem('user')) || { logged: false }
}

export const HeroesApp = () => {

    const [ user , dispatch] = useReducer( autReducer , {}, init)

    return (
        <AuthContext.Provider value={{ user, dispatch }}>
            <AppRouter />
        </AuthContext.Provider>
    )
}
