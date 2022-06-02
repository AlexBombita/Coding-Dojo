import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import obi from "./obi.jpeg"


const Planet = () => {
    const {id} = useParams()
    const [planet, setPlanet] = useState()

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}`)
        .then(res => {
            console.log(res.data)
            setPlanet(res.data)
        })
        .catch(err => console.log(err))
    }, [id])

    return (
        <div>
            {
                planet?
                    <div>
                        <h1>{planet.name}</h1>
                        <p>Climate: {planet.climate}</p>
                        <p>Terrain: {planet.terrain}</p>
                        <p>Surface Water: {planet.surface_water}</p>
                        <p>Population: {planet.population}</p>
                    </div>
                    :
                    <div>
                    {/* <h1> These aren't the droids you're looking for </h1> */}
                    <img src={obi} alt="obi"/>
                    {/* <img src="https://starwarsblog.starwars.com/wp-content/uploads/sites/6/2017/05/ANH-Ben-identification-tall-40th.jpg" alt="obi wan kanobi"/> */}
                    </div>
            }
        </div>
    )
}

export default Planet