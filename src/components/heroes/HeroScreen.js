import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getHeroById } from '../../selectores/getHeroById'

export const HeroScreen = ( { history } ) => {

    const { heroId } = useParams()
    // const hero = getHeroById( heroId )

     /**
     * PEQUEÑA OPTIMIZACION OPCIONAL:
     * con esta mejora, solo usamos getHeroesByPublisher cuando cambia el publisher
     * y no cada vez que se renderiza el componente 
     */
      const hero = useMemo(() => getHeroById( heroId ), [ heroId ] )

    // si no encuentro algun heroe, lo regres o la pagina donde estaba
    if( !hero ){
        return <Redirect to="/" />
    }

    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters,
    } = hero 

    const handleReturn = () => {

        /**
         * si history.length <=2 significa que recien entro a la aplicacion
         * y al usar goBack() lo estariamos sacando de la aplicacion
         */
        if( history.length <=2 ){
            history.push('/')
        }else{
            history.goBack()
        }
    }

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img 
                    src={`../assets/heroes/${ heroId }.jpg`}
                    alt={ superhero }
                    className="img-thumbnail"
                />
            </div>
            <div className="col-8">
                <h3> { superhero } </h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Alter ego:</b> { alter_ego } </li>
                    <li className="list-group-item"><b>Publisher:</b> { publisher } </li>
                    <li className="list-group-item"><b>First appearance:</b> { first_appearance } </li>
                </ul>

                <h5> Characters </h5>
                <p> { characters } </p>

                <button 
                    className="btn btn-info"
                    onClick={ handleReturn }
                >
                    Return
                </button>
            </div>
        </div>
    )
}
