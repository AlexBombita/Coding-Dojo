import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import obi from "./obi.jpeg"

const People = () => {
    const {id} = useParams()
    const [people, setPeople] = useState()

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}`)
        .then(res => {
            console.log(res.data)
            setPeople(res.data)
        })
        .catch(err => console.log(err))
    }, [id])

    return (
        <div>
            {
                people?
                <div>
                    <h1>{people.name}</h1>
                    <p>Height: {people.height}</p>
                    <p>Mass: {people.mass}</p>
                    <p>Hair Color: {people.hair_color}</p>
                    <p>Skin Color: {people.skin_color}</p>
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

export default People