import React from 'react'
import { HeroesList } from '../heroes/HeroesList'

export const DcScreen = () => {
    return (
        <div>
            <h2>DC</h2>
            <hr />

            <HeroesList publisher="DC Comics"/>

        </div>
    )
}
