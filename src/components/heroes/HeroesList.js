import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../selectores/getHeroesByPublisher'
import { HeroCard } from './HeroCard'

export const HeroesList = ({ publisher }) => {

    // const heroes = getHeroesByPublisher( publisher )

    /**
     * PEQUEÑA OPTIMIZACION OPCIONAL:
     * con esta mejora, solo usamos getHeroesByPublisher cuando cambia el publisher
     * y no cada vez que se renderiza el componente 
     */
    const heroes = useMemo(() => getHeroesByPublisher( publisher ), [ publisher ] )

    return (
        <div className="card-columns">
            {
                heroes.map( hero => (
                    <HeroCard 
                        key={ hero.id }
                        { ...hero }
                    />
                ))
            }
        </div>
    )
}
