import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useParams, Link, useNavigate } from "react-router-dom"

const Detail = () => {

    const navigate = useNavigate()
    // STATE FOR HOLDING ONE BOOK
    const [product, setProduct] = useState()

    // GET PATH VARIABLE FROM REACT ROUTER
    const { product_id } = useParams()

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + product_id)
            .then(res => setProduct(res.data))
            .catch(err => console.log(err))
    }, [])


    const deleteHandler = (id) => {
        axios.delete("http://localhost:8000/api/products/"+id)
        .then(res => navigate("/"))
        .catch()
    }

    return (
        <fieldset>
            <legend>Detail.jsx</legend>
            {
                (product) ?
                <div>
                    <h1>{product.name}</h1>
                    <img src={product.photo} />
                    <p>{product.phrase}</p>
                    <h3>About</h3>
                    <p>Position: {product.position}</p>
                    <p>Treasures: {product.chest}</p>
                    <p>Peg Let: {product.pegLeg? "YES" : "NO"} </p>
                    <p>Eye Patch: {product.eyePatch? "YES" : "NO"} </p>
                    <p>Hook Hand: {product.hookHand? "YES" : "NO"}</p>
                                    

                    {/* <Link to={"/"+product_id+"/edit"}> */}
                        {/* Edit */}
                    {/* </Link> */}
                    {/* <button onClick={(e) => deleteHandler(product._id)}>Walk the Plank</button> */}
                </div> : <h1>Loading....</h1>
            }
        </fieldset>
    )
}

export default Detail