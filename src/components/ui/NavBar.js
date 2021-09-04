import React, { useContext } from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom'

import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types'

export const Navbar = () => {

    const { user:{ name }, dispatch } = useContext( AuthContext )
    const history =  useHistory()
    /**
     * NOTA: usamos useHistory porque el componente NavBar no es una ruta, y en sus props no tiene el history
     * Para lograr esto, el componente DashboardRoutes, que si es una ruta, tendria que pasr de sus props al componente
     * NavBar, el history, y este estraerlo en sus props  [[ export const Navbar = ({history}) => { ]]
     */

    const handleLogout = () => {

        history.replace("/login")

        dispatch({
            type: types.logout
        })
        
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/dc"
                    >
                        DC
                    </NavLink>
                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">

                    <span className="nav-item nav-link">
                        { name }
                    </span>

                    <button 
                        activeClassName="active"
                        className="nav-item nav-link btn"    
                        onClick={ handleLogout }                   
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}