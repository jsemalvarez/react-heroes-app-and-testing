import React, { useMemo, useState } from 'react'
import { HeroCard } from '../heroes/HeroCard'
import queryString  from 'query-string'
import { useLocation } from 'react-router-dom'
import { getHeroesByName } from '../../selectores/getHeoresByName'

export const SearchScreen = ( { history} ) => {

    const location = useLocation()

    /**
     * con queryString.parse obtengo todos los parametros de la query
     * como un objeto. Ejemplo:
     *      http://localhost:3000/search?q=batman
     *      { searchText:'batman'}
     * si, en este caso searchText, no tiene ningun valor, entonces searchText = ""
     */
    const { searchText = '' } = queryString.parse( location.search )

    const [ search, setSearch ] = useState( searchText )
    
    /**
     * De esta manera, la lista se va actualizando con cada letra que escribimos
     * ya que searchText cambia su estado con cada letra que ingresamos y el componente
     * se vuelve a actualizar y llama a getHeroesByName en cada renderizado
     */
    // const heroesFiltered = getHeroesByName( search )

    /**
     * de esta otra manera solo llamamos a getHeroesByName solo cuando cambia searchText,
     * que a diferencia de search, searchText cambia con el submit
     */
    // const heroesFiltered = useMemo(() => getHeroesByName( searchText ), [ searchText ] )

    /**
     * de esta manera tambien logramos que la lista no se este actualizando con cada letra
     */
    const heroesFiltered = getHeroesByName( searchText )

    const handleSubmit = ( e ) => {
        e.preventDefault()

        history.push(`?searchText=${ search }`)
        setSearch('')
    }

    return (
        <div>
            <h1> SearchScreen </h1>
            <hr />

            <div className="row">

                <div className="col-5">
                    <h4> Search Screen </h4>
                    <hr />

                    <form onSubmit={ handleSubmit }>
                        <input 
                            type="text"
                            placeholder="Find your Hero"
                            className="form-control"
                            value={ search }
                            onChange={ (e) => setSearch( e.target.value ) }
                        />

                        <button
                            type="submit"
                            className="btn btn-primary btn-block m-1"
                        >
                            Search
                        </button>
                    </form>
                </div>

                <div className="col-7">

                    <h4> Results </h4>
                    <hr />

                    {
                        ( searchText === '' )
                            &&(
                                <div className="alert alert-info">
                                    Serch a hero
                                </div>
                            )
                    }

                    {
                        ( searchText !== '' &&  heroesFiltered.length === 0 )
                            &&(
                                <div className="alert alert-danger">
                                    There is not a hero with <strong> { searchText } </strong>
                                </div>
                            )
                    }


                    {
                        heroesFiltered.map( hero => (
                            <HeroCard 
                                key={ hero.id }
                                { ...hero }
                            />
                        ))
                    }

                </div>
            </div>
        </div>
    )
}
